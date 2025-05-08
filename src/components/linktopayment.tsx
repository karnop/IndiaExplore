"use client"
import React, { useEffect, useState } from 'react';

type LinkToPaymentProps = { order: any };

export function LinkToPayment({ order }: LinkToPaymentProps) {
    const [deeplink, setDeeplink] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/create-order', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...order, transactionId: crypto.randomUUID() })
        })
            .then(res => res.json())
            .then(data => {
                if (data.deeplinkUrl) setDeeplink(data.deeplinkUrl);
                else throw new Error(data.error || 'No deeplink returned');
            })
    }, []);

    if (!deeplink) return <p>Preparing payment link…</p>;
    // redirect or open in new tab
    window.location.href = deeplink;
    return null;
}

export default LinkToPayment;