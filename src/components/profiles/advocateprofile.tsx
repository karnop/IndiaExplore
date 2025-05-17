"use client"

import React, {useEffect, useState, useTransition} from 'react';
import type {Order, User} from "@/app/generated/prisma";
import {Button} from "@heroui/button";
import {signOut} from "next-auth/react";
import {Divider} from "@heroui/react";
import {getOrdersAdvocate, getOrdersAdvocate2, advocateAcceptAppointment} from "@/lib/actions";
import Link from "next/link";

export interface AdvocateProfileProps {
    user: User
}
function Advocateprofile({user}: AdvocateProfileProps) {
    const [tab, setTab] = useState<string>("my-appointments");
    const [orders, setOrders] = useState<Order[]>([]);
    const [orders2, setOrders2] = useState<Order[]>([]);
    const [isPending, startTransition] = useTransition();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [page2, setPage2] = useState(1);
    const [totalPages2, setTotalPages2] = useState(1);
    const limit = 5;

    useEffect(() => {
        startTransition(() => {
            getOrdersAdvocate(user.id, page, limit).then(({ orders, total }) => {
                setOrders(orders);
                setTotalPages(Math.ceil(total / limit));
            });

            getOrdersAdvocate2(page2, limit).then(({ orders, total }) => {
                setOrders2(orders);
                setTotalPages2(Math.ceil(total / limit));
            });
        });
    }, [user.id, page, page2]);

    async function acceptAppointment(orderId: string) {
        setErrorMsg(null);

        // call server action
        const res = await advocateAcceptAppointment({
            orderId,
            advocateId: user.id,
            advocateName: user.name || '',
        });

        if (!res.success) {
            setErrorMsg(res.message!);
        } else {
            // refresh lists
            startTransition(() => {
                getOrdersAdvocate(user.id).then(setOrders);
                getOrdersAdvocate2().then(setOrders2);
            });
        }
    }

    return (
        <div className={"flex flex-col h-full w-full gap-1"}>
            {/*pfp and logout*/}
            <div className="flex flex-col gap-3 md:flex-row border-y border-slate-200 py-4 justify-between">

                {/*pfp*/}
                <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-full bg-slate-900"></div>
                    <div className="flex flex-col">
                        <div className="text-xl">Hi Advocate {user.name}</div>
                        <div className="text-slate-500">{user.email}</div>
                        <div className="text-slate-500 text-xs">joined {user.createdAt.toString()}</div>
                    </div>
                </div>

                {/*logout*/}
                <div className=" flex items-end justify-end gap-2">
                    <Button className="bg-slate-100 text-black rounded-md h-fit p-2 hover:opacity-80 cursor-pointer">Edit profile</Button>
                    <Button className="bg-black text-white rounded-md h-fit p-2 hover:opacity-80 cursor-pointer" onClick={() => {signOut()}}>Logout</Button>
                </div>

            </div>

            {/*tabs*/}
            <div className="flex flex-col w-full gap-2 overflow-x-auto max-w-5xl mx-auto">
                {/*tab headers*/}
                <div className="flex w-full gap-1 rounded-md border-1 border-slate-200 p-1">
                    <button className={`${tab == "my-appointments" ? 'bg-slate-100' : 'bg-slate-50'} rounded-md w-full md:p-2 p-1 flex items-center justify-center cursor-pointer`} onClick={() => {setTab("my-appointments")}}>My Appointments</button>
                    <button className={`${tab == "all-appointments" ? 'bg-slate-100' : 'bg-slate-50'} rounded-md w-full md:p-2 p-1 flex items-center justify-center cursor-pointer`} onClick={() => {setTab("all-appointments")}}>Get Appointments</button>
                </div>

                {/*tab content*/}
                {tab == "my-appointments" && <div className="border-1 border-slate-200 rounded-md flex flex-col gap-1 p-1 md:p-2">
                    {orders.map((order) =>
                        <div key={order.id} className="border-1 border-slate-100 hover:bg-slate-100 rounded-md p-1 md:p-2 flex flex-col gap-1">

                            {/*date*/}
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <div className="flex gap-1">
                                    <div className=""><span className="text-slate-600 text-xs">{order.date?.toString()}, {order.time}</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            {/*case type*/}
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <div className="flex gap-1">
                                    <div className="">Case Type : <span className="text-slate-600">{order.caseType}</span></div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="">Incentive : <span className="text-slate-600">Rs. {order.totalCost}</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            {/*grievance*/}
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <div className="flex gap-1">
                                    <div className="">Grievance : <span className="text-slate-600">{order.grievance}</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            {/*meta data*/}
                            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                <div className="flex gap-1">
                                    <div className="">Language : <span className="text-slate-600">{order.language}</span></div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="">Call mode : <span className="text-slate-600">{order.callmode}</span></div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="">Call duration : <span className="text-slate-600">{order.callduration} minutes</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            <Button className={"bg-black text-white w-full px-1 py-2 rounded-md cursor-pointer"}>
                                <Link href={`/meet/${order.id}`}>Join meeting </Link>
                            </Button>

                        </div>
                    )}

                    {orders.length == 0 && <p className="text-center text-slate-700">No appointments</p>}

                    {/*pagination*/}
                    <div className="flex justify-center gap-2 mt-2">
                        <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</Button>
                        <span className="px-2 py-1 text-sm text-gray-700">Page {page} of {totalPages}</span>
                        <Button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</Button>
                    </div>
                </div>}


                {/*tab content*/}

                {tab == "all-appointments" && <div className="border-1 border-slate-200 rounded-md flex flex-col gap-1 p-1 md:p-2">
                    {errorMsg && (
                        <p className="text-center text-red-600 mt-2">
                            {errorMsg}
                        </p>
                    )}

                    {orders2.map((order) =>
                        <div key={order.id} className="border-1 border-slate-100 hover:bg-slate-100 rounded-md p-1 md:p-2 flex flex-col gap-1">

                            {/*date*/}
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <div className="flex gap-1">
                                    <div className=""><span className="text-slate-600 text-xs">{order.date?.toString()}, {order.time}</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            {/*case type*/}
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <div className="flex gap-1">
                                    <div className="">Case Type : <span className="text-slate-600">{order.caseType}</span></div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="">Incentive : <span className="text-slate-600">Rs. {order.totalCost}</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            {/*grievance*/}
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <div className="flex gap-1">
                                    <div className="">Grievance : <span className="text-slate-600">{order.grievance}</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            {/*meta data*/}
                            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                <div className="flex gap-1">
                                    <div className="">Language : <span className="text-slate-600">{order.language}</span></div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="">Call mode : <span className="text-slate-600">{order.callmode}</span></div>
                                </div>

                                <div className="flex gap-1">
                                    <div className="">Call duration : <span className="text-slate-600">{order.callduration} minutes</span></div>
                                </div>
                            </div>
                            <Divider className={"text-slate-100 h-1"}/>

                            <Button className={"bg-black text-white w-full px-1 py-2 rounded-md cursor-pointer"} onClick={() => {acceptAppointment(order.id)}}>Accept Appointment</Button>

                        </div>
                    )}

                    {orders2.length == 0 && <p className="text-center text-slate-700">No appointment requests currently. Please check back soon! </p>}

                    {/*pagination*/}
                    <div className="flex justify-center gap-2 mt-2">
                        <Button disabled={page2 <= 1} onClick={() => setPage2(page2 - 1)}>Previous</Button>
                        <span className="px-2 py-1 text-sm text-gray-700">Page {page2} of {totalPages2}</span>
                        <Button disabled={page2 >= totalPages2} onClick={() => setPage2(page2 + 1)}>Next</Button>
                    </div>
                </div>}

            </div>

        </div>
    );
}

export default Advocateprofile;