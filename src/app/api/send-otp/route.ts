import { NextRequest, NextResponse } from 'next/server';
import Twilio from 'twilio';

// initialize Twilio client with env vars
const client = Twilio(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: NextRequest) {
    const { phone } = await req.json();
    if (!phone) {
        return NextResponse.json({ error: 'Missing phone' }, { status: 400 });
    }

    try {
        const verification = await client.verify.v2
            .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
            .verifications.create({ to: "+91"+phone, channel: 'sms' });

        return NextResponse.json({ status: verification.status });
    } catch (err) {
        console.error('send-otp error', err);
        return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
    }
}
