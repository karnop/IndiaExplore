import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma"
const MAX_DAILY_MESSAGES =3;

export async function POST(request: Request) {
    try {

        const {userId, message, history }: {userId : string, message: string; history: { role: string; content: string }[] } = await request.json();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        // Rate-limit: count today's user messages
        // Determine today's UTC date at midnight
        const now = new Date();
        const utcMidnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

        let dailyRecord = await prisma.dailyMessageCount.findUnique({
            where: { userId_date: { userId, date: utcMidnight } }
        });
        if (dailyRecord) {
            if (dailyRecord.count >= MAX_DAILY_MESSAGES) {
                // Do not increment further, just return the limit message
                return NextResponse.json({ error: 'Daily limit reached. Try again tomorrow.' }, { status: 429 });
            }
            // Otherwise increment
            dailyRecord = await prisma.dailyMessageCount.update({
                where: { userId_date: { userId, date: utcMidnight } },
                data: { count: { increment: 1 } }
            });
        } else {
            // No record yet: create with count = 1
            dailyRecord = await prisma.dailyMessageCount.create({
                data: { userId, date: utcMidnight, count: 1 }
            });
        }

        const systemPrompt = 'You are an Indian advocate. You just have to give advice to people about law and their problems. I have already told them that you are an AI and not to take your advice as sole decider of their decisions. Try to back your answers with relevant law in indian law books and refuse to answer anything outside of what a lawyer could answer. Be formal, empathetic and supportive. Also, try to push them to booking a consultation with a real lawyer by giving relevant reasons. They can book real lawyer sessions from our website.';
        const convo = (history || []).map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.content}`).join("\n");
        const prompt = [systemPrompt, convo, `User: ${message}`, 'Assistant:'].filter(Boolean).join("\n");

        const cohereRes = await fetch('https://api.cohere.ai/v1/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.COHERE_API_KEY}`!,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'command-r-plus',
                prompt,
                max_tokens: 300,
                temperature: 0.3,
                stop_sequences: ['User:', 'Assistant:']
            })
        });

        if (!cohereRes.ok) {
            const errorText = await cohereRes.text();
            return NextResponse.json({ error: errorText }, { status: 500 });
        }

        const data = await cohereRes.json();
        const reply = data.generations?.[0]?.text?.trim();

        return NextResponse.json({ reply });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
