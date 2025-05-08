import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import prisma from '@/lib/prisma';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    // 1) Create our Order record (paymentStatus=false)
    const dbOrder = await prisma.order.create({
        data: {
            userId: body.userId,
            name: body.name,
            caseType: body.caseType,
            grievance: body.grievance,
            city: body.city,
            language: body.language,
            callmode: body.callmode,
            callduration: parseInt(body.callduration, 10),
            date: new Date(body.date),
            time: body.time,
            phone: body.phone,
            totalCost: body.totalCost,
            transactionId: '',
            paymentStatus: false,
        }
    });

    // 2) Create Razorpay order
    const rpOrder = await razorpay.orders.create({
        amount: dbOrder.totalCost * 100, // ₹ → paise
        currency: 'INR',
        receipt: dbOrder.id,
        payment_capture: 1,
    });

    return NextResponse.json({
        razorpayOrderId: rpOrder.id,
        amount: rpOrder.amount,
        currency: rpOrder.currency,
        orderRecordId: dbOrder.id,
    });
}
