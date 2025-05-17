"use client";

import React, { useEffect, useState, useRef, use } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { Divider } from "@heroui/react";
import { Order } from "@/app/generated/prisma";
import { getOrder } from "@/lib/actions";

interface PageProps {
    params: { meetid: string };
}

function formatDuration(ms: number) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export default function Page({ params }: PageProps) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { meetid } = use(params);

    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<Order | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [remainingMs, setRemainingMs] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // redirect if not signed in
    useEffect(() => {
        if (status === "unauthenticated") {
            signIn();
        }
    }, [status]);

    // fetch & authorize
    useEffect(() => {
        if (status !== "authenticated") return;

        (async () => {
            setLoading(true);
            try {
                const data = await getOrder(meetid);
                setOrder(data);

                const userId = session!.user.id;
                if (data.userId !== userId && data.advocateID !== userId) {
                    setErrorMsg("You are not authorized to join this meeting.");
                    return;
                }

                // meetingStart comes directly from MongoDB Date (UTC)
                const meetingStart = new Date(data.date);
                // meetingEnd = start + (callduration + 15) minutes
                const totalMs = (data.callduration + 15) * 60 * 1000;
                const meetingEnd = new Date(meetingStart.getTime() + totalMs);
                const now = new Date();

                if (now < meetingStart) {
                    setRemainingMs(meetingStart.getTime() - now.getTime());
                } else if (now >= meetingStart && now <= meetingEnd) {
                    setRemainingMs(0);
                } else {
                    setErrorMsg("This meeting is in the past.");
                }
            } catch (err) {
                console.error(err);
                setErrorMsg("Failed to load meeting details.");
            } finally {
                setLoading(false);
            }
        })();
    }, [status, meetid, session]);

    // countdown
    useEffect(() => {
        if (remainingMs && remainingMs > 0) {
            timerRef.current = setInterval(() => {
                setRemainingMs((prev) =>
                    prev! - 1000 > 0 ? prev! - 1000 : 0
                );
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [remainingMs]);

    if (loading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <BeatLoader />
            </div>
        );
    }

    if (!order) {
        return (
            <div className="p-4 text-center text-red-600">
                {errorMsg || "Order not found."}
            </div>
        );
    }

    // Render meeting date/time in IST
    const istDateStr = new Date(order.date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="min-h-[100vh] p-4">
            <div className="space-y-4">
                {/* Meeting Info */}
                <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between">
            <span className="text-sm text-gray-600">
              {istDateStr} IST
            </span>
                    </div>
                    <Divider className="my-2" />

                    <div className="flex justify-between">
            <span>
              Case Type: <strong>{order.caseType}</strong>
            </span>
                        <span>
              Advocate:{" "}
                            <strong>
                {order.advocateName || "Not assigned yet"}
              </strong>
            </span>
                    </div>
                    <Divider className="my-2" />

                    <div>
                        Grievance: <strong>{order.grievance}</strong>
                    </div>
                    <Divider className="my-2" />

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                            Language: <strong>{order.language}</strong>
                        </div>
                        <div>
                            Mode: <strong>{order.callmode}</strong>
                        </div>
                        <div>
                            Duration: <strong>{order.callduration} min</strong>
                        </div>
                    </div>
                </div>

                {/* Timer / Messages / Join Button */}
                {errorMsg && !remainingMs && (
                    <div className="text-center text-red-600">
                        {errorMsg}
                    </div>
                )}

                {remainingMs! > 0 && (
                    <div className="text-center text-gray-700">
                        Meeting starts in: {formatDuration(remainingMs!)}
                    </div>
                )}

                {remainingMs === 0 && !errorMsg && (
                    <div className="text-center">
                        <button
                            onClick={() => router.push(`/meet/${meetid}/join`)}
                            className="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Join Meeting
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
