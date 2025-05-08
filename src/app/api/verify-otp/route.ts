import { NextRequest, NextResponse } from 'next/server';
import Twilio from 'twilio';

const client = Twilio(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: NextRequest) {
    const { phone, code } = await req.json();
    if (!phone || !code) {
        return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    try {
        const check = await client.verify.v2
            .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
            .verificationChecks.create({ to: "+91"+phone, code });

        if (check.status === 'approved') {
            return NextResponse.json({ verified: true });
        }
        return NextResponse.json({ verified: false });
    } catch (err) {
        console.error('verify-otp error', err);
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
    }
}
