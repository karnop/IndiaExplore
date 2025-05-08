import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, orderRecordId } = await req.json();

    // 1) Verify signature
    const generated_sig = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

    if (generated_sig !== razorpay_signature) {
        return NextResponse.json({ ok: false, error: 'Invalid signature' }, { status: 400 });
    }

    // 2) Update our Order record
    await prisma.order.update({
        where: { id: orderRecordId },
        data: {
            transactionId: razorpay_payment_id,
            paymentStatus: true,
        }
    });

    return NextResponse.json({ ok: true });
}
