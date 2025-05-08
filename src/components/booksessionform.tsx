"use client";
import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Divider } from '@heroui/react';
import Link from "next/link";
const roboto = Inter({
    subsets : ["latin"],
    weight : "400"
})


interface ChatWindowProps {
    userId: string;
}

declare global {
    interface Window { Razorpay: any; }
}

export default function BookSessionForm({ userId }: ChatWindowProps) {
    const costMatrix: Record<string, Record<string, number>> = {
        voice: { "10": 50, "30": 150, "60": 300 },
        video: { "10": 150, "30": 450, "60": 800 },
    };

    // compute tomorrow's date in IST for datepicker min value
    const getTomorrowIST = (): string => {
        const now = new Date();
        const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
        const istOffsetMs = 5.5 * 60 * 60000;
        const istNow = new Date(utcMs + istOffsetMs);
        const tomorrow = new Date(istNow);
        tomorrow.setDate(istNow.getDate() + 1);
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const dd = String(tomorrow.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };
    const minDate = getTomorrowIST();

    const [step, setStep] = useState<number>(1);

    // Section 1: Details
    const [name, setName] = useState<string>('');
    const [city, setCity] = useState<string>('delhi');
    const [language, setLanguage] = useState<string>('english');
    const [caseType, setCaseType] = useState<string>('family');
    const [grievance, setGrievance] = useState<string>('');
    // Strongly type errors as a map of field to message
    const [errors, setErrors] = useState<Record<string,string>>({});

    // Section 2: Service Selection
    const [callmode, setCallmode] = useState<string>('video');
    const [callduration, setCallduration] = useState<string>('10');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('6pm');
    // 2. Compute total cost
    const totalCost = costMatrix[callmode]?.[callduration] ?? 0;


    // Section 3: Phone Verification
    const [phone, setPhone] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [otpSent, setOtpSent] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verified, setVerified] = useState(false);
    // Send OTP
    const handleSendOtp = async () => {
        // Validate phone number before sending
        if (!isValidIndianPhone(phone)) {
            setErrors({ phone: 'Please enter a valid Indian phone number' });
            return;
        }
        // Clear any previous phone errors
        setErrors((prev) => ({ ...prev, phone: '' }));
        setIsVerifying(true);
        try {
            const res = await fetch('/api/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone }),
            });
            const data = await res.json();

            if (res.ok) {
                setOtpSent(true);
            } else {
                setErrors({ phone: data.error || 'Could not send OTP' });
            }
        } catch (error) {
            setErrors({ phone: 'Network error, please try again later' });
        } finally {
            setIsVerifying(false);
        }
    };
    // Verify OTP
    const handleVerifyOtp = async () => {
        setIsVerifying(true);
        const res = await fetch('/api/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, code: otp }),
        });
        const data = await res.json();
        setIsVerifying(false);

        if (res.ok && data.verified) {
            setVerified(true);
            next();
        } else {
            setErrors({ otp: 'Invalid OTP. Please try again.' });
        }
    };

    // step 5
    const [orderRecordId, setOrderRecordId] = useState<string>('');

    const handlePayment = async () => {
        // 1) create-order
        const resCreate = await fetch('/api/razorpay/create-order', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify( prepareOrder() ),
        });
        const { razorpayOrderId, amount, currency, orderRecordId } = await resCreate.json();
        setOrderRecordId(orderRecordId);
        // 2) launch checkout
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
            amount,
            currency,
            name: 'Your App Name',
            description: 'Legal Consultation',
            order_id: razorpayOrderId,
            handler: async (response: any) => {
                // 3) verify-order
                const resVerify = await fetch('/api/razorpay/verify-order', {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                        ...response,
                        orderRecordId,
                    }),
                });
                const data = await resVerify.json();
                if (data.ok) {
                    next();  // advance to step 6
                } else {
                    alert('Payment verification failed');
                }
            },
            prefill: { name, email: '', contact: phone },
            theme: { color: '#3399cc' }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const next = () => setStep((s) => s + 1);
    const prev = () => {
        setErrors({});
        setStep((s) => s - 1);
    };

    // Validate steps
    const validateStep = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (step === 1) {
            if (!name.trim()) newErrors.name = 'Name is required';
            if (!caseType) newErrors.caseType = 'Please select a case type';
            if (!city) newErrors.city = 'Please select a city';
        }
        if (step === 2) {
            if (!callmode) newErrors.callmode = 'Please select a call mode';
            if (!callduration) newErrors.callduration = 'Please select a call duration';
            if (!date) newErrors.date = 'Please select a date';
            if (!time) newErrors.time = 'Please select a time';
        }
        if (step === 3 && !verified) {
            if (!phone.trim()) newErrors.phone = 'Phone number is required';
            if (!otp.trim()) newErrors.otp = 'OTP is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Basic Indian phone validation
    const isValidIndianPhone = (num: string): boolean => {
        return /^(?:\+91|0)?[6-9]\d{9}$/.test(num.trim());
    };

    // Adjust handleNext
    const handleNext = () => {
        if (!validateStep()) return;
        if (step < 3) return next();
        // at step 3, either send or verify
        if (!otpSent) {
            return handleSendOtp();
        } else {
            return handleVerifyOtp();
        }
    };

    function prepareOrder() {
        return {
            userId,
            name,
            caseType,
            grievance,
            city,
            language,
            callmode,
            callduration,
            date,
            time,
            phone,
            totalCost,
        };
    }



    return (

        <div className={`border border-slate-200 w-full md:w-3/4 mx-auto p-6 rounded-xl shadow-lg ${roboto.className}`}>
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="afterInteractive"
            />
            {step === 1 && (
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-center">Your Details</h1>

                    {/*Full name*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">Full Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md outline-none focus:bg-slate-100"
                            placeholder="Raj Singh"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    {/*Case Type*/}
                    <div className="mt-4">
                        <label className="block text-slate-700">Case Type</label>
                        <select
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md outline-none focus:bg-slate-100"
                            value={caseType}
                            onChange={(e) => setCaseType(e.target.value)}
                        >
                                <option value="criminal">Criminal Offence</option>
                                <option value="family">Family Disputes</option>
                                <option value="property">Property Disputes</option>
                                <option value="traffic">Traffic Violations</option>
                                <option value="employment">Employment Disputes</option>
                                <option value="consumer">Consumer Complaints</option>
                                <option value="landlord">Landlord-Tenant Disputes</option>
                                <option value="civil">Civil Litigation</option>
                                <option value="ip">Intellectual Property Disputes</option>
                                <option value="tax">Tax Matters</option>
                                <option value="others">Others</option>
                        </select>
                        {errors.caseType && <p className="text-red-600 mt-1">{errors.caseType}</p>}
                    </div>

                    {/*Grievance*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">(Optional) Explain your problem here</label>
                        <textarea
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md h-40 outline-none focus:bg-slate-100"
                            placeholder="Maximim 300 characters"
                            maxLength={300}
                            value={grievance}
                            onChange={(e) => setGrievance(e.target.value)}
                        />
                    </div>

                    {/*City*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">Select your city (it helps us connect you to a lawyer in your city or nearby)</label>
                        <select
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md outline-none focus:bg-slate-100"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="delhi">Delhi</option>
                            <option value="ghaziabad">Ghaziabad</option>
                            <option value="noida">Noida</option>
                            <option value="greater-noida">Greater Noida</option>
                            <option value="faridabad">Faridabad</option>
                        </select>
                        {errors.city && <p className="text-red-600 mt-1">{errors.city}</p>}
                    </div>

                    {/*Language*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">Which language do you prefer to be consulted in</label>
                        <select
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md outline-none focus:bg-slate-100"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="english">English</option>
                            <option value="hindi">hindi</option>
                            <option value="urdu">urdu</option>
                        </select>
                        {errors.city && <p className="text-red-600 mt-1">{errors.city}</p>}
                    </div>

                    <button
                        onClick={handleNext}
                        className="mt-6 w-full py-2 bg-black text-white rounded-md disabled:opacity-50 hover:opacity-80 cursor-pointer"
                        disabled={isVerifying}
                    >
                        Next
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-center">Service Selection</h2>

                    {/*Call type*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">Call mode</label>
                        <select
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md outline-none focus:bg-slate-100"
                            value={callmode}
                            onChange={(e) => setCallmode(e.target.value)}
                        >
                            <option value="voice">Voice Call</option>
                            <option value="video">Video Call</option>
                        </select>
                        {errors.city && <p className="text-red-600 mt-1">{errors.city}</p>}
                    </div>

                    {/*Call duration*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">Call duration</label>
                        <select
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md outline-none focus:bg-slate-100"
                            value={callduration}
                            onChange={(e) => setCallduration(e.target.value)}
                        >
                            <option value="10">10 minutes (Rs. {callmode == "voice" ? "50" : "150"})</option>
                            <option value="30">30 minutes (Rs. {callmode == "voice" ? "150" : "450"})</option>
                            <option value="60">60 minutes (Rs. {callmode == "voice" ? "300" : "800"})</option>
                        </select>
                        {errors.city && <p className="text-red-600 mt-1">{errors.city}</p>}
                    </div>

                    {/*Date*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">Choose a Date (from tomorrow)</label>
                        <input
                            type="date"
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={minDate}
                        />
                        {errors.city && <p className="text-red-600 mt-1">{errors.city}</p>}
                    </div>


                    {/*time duration*/}
                    <div className="mt-6">
                        <label className="block text-slate-700">Call timing</label>
                        <select
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md outline-none focus:bg-slate-100"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value="5pm">5 pm</option>
                            <option value="6pm">6 pm</option>
                            <option value="7pm">7 pm</option>
                        </select>
                        {errors.city && <p className="text-red-600 mt-1">{errors.city}</p>}
                    </div>


                    <div className="mt-6 flex justify-between">
                        <button onClick={prev} className="py-2 px-4 rounded-md bg-slate-200  cursor-pointer hover:opacity-70">Back</button>
                        <button
                            onClick={handleNext}
                            className="py-2 px-4 bg-black text-white rounded-md disabled:opacity-50  cursor-pointer hover:opacity-70"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-center">Phone Verification</h2>

                    <div className="mt-4">
                        <label className="block text-slate-700">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full mt-1 p-2 border border-slate-300 rounded-md"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={otpSent}
                        />
                        {errors.phone && <p className="text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <button
                        onClick={otpSent ? handleVerifyOtp : handleSendOtp}
                        className="mt-4 w-full py-2 bg-black text-white rounded-md disabled:opacity-50  cursor-pointer hover:opacity-70"
                        disabled={isVerifying}
                    >
                        {isVerifying && otpSent ? 'Verifying...' : otpSent ? 'Verify OTP' : 'Send OTP'}
                    </button>

                    {otpSent && (
                        <div className="mt-4">
                            <label className="block text-slate-700">OTP</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border border-slate-300 rounded-md"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                disabled={verified}
                            />
                            {errors.otp && <p className="text-red-600 mt-1">{errors.otp}</p>}
                        </div>
                    )}

                    {verified && <p className="mt-4 text-green-600 text-center">Phone verified ✔️</p>}

                    <div className="mt-6 flex justify-between">
                        <button onClick={prev} className="py-2 px-4 rounded-md bg-slate-200  cursor-pointer hover:opacity-70">Back</button>
                        <button onClick={next} className="py-2 px-4 rounded-md bg-black text-white  cursor-pointer hover:opacity-70" disabled={!verified}>
                            Next
                        </button>
                    </div>
                </div>
            )}



            {step === 4 && (
                <div className="flex flex-col space-y-4">

                    <div className=" p-4 rounded-md space-y-2  bg-slate-100">
                        <h2 className="text-2xl font-bold text-center">Booking Summary</h2>
                        <Divider className={"text-slate-300 mb-4"}/>

                        <p>Full Name: {name}</p>
                        <p>Case Type: {caseType}</p>
                        <p>Your Grievance: {grievance}</p>
                        <p> City:  {city}</p>
                        <p> Language:  {language}</p>
                        <Divider className={"text-slate-300"}/>

                        <p> Call Mode:  {callmode === "voice" ? "Voice Call" : "Video Call"}</p>
                        <p> Duration:  {callduration} minutes</p>
                        <p> Date:  {date}</p>
                        <p> Time:  {time}</p>
                        <Divider className={"text-slate-300"}/>


                        <p> Phone:  {phone}</p>
                        <Divider className={"text-slate-300"}/>

                        <p className="text-lg">
                             Total Cost:  ₹{totalCost}
                        </p>
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={prev}
                            className="py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-300  cursor-pointer hover:opacity-70"
                        >
                            Back
                        </button>
                        <button
                            onClick={handlePayment}
                            className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer hover:opacity-70"
                        >
                            Confirm & Pay
                        </button>
                    </div>
                </div>
            )}

            {step === 5 && (
                <div className="flex flex-col gap-2">
                    <p className="mt-6 text-center text-gray-700">All steps completed! Thank you.</p>
                    <Divider className={"text-slate-300 mb-4"}/>

                    <p className="text-gray-700 text-center">You can now move to your <Link href={"/profile"} className={"underline text-black cursor-pointer"}>Profile</Link> to see your booking.</p>
                </div>
            )}
        </div>
    );
}
