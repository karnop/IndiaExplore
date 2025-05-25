"use client";
import React, { useEffect, useState, useTransition } from "react";
import type { User, Order } from "@/app/generated/prisma";
import { Button } from "@heroui/button";
import { getPastOrders, getUpcomingOrders } from "@/lib/actions";
import { Divider } from "@heroui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
export interface ClientProfileProps {
  user: User;
}

function Clientprofile({ user }: ClientProfileProps) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [upcoming, setUpcoming] = useState<Order[]>([]);
  const [past, setPast] = useState<Order[]>([]);
  const [pageUp, setPageUp] = useState(1);
  const [totalUp, setTotalUp] = useState(1);
  const [pagePast, setPagePast] = useState(1);
  const [totalPast, setTotalPast] = useState(1);
  const limit = 5;
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      // fetch upcoming
      getUpcomingOrders(user.id, pageUp, limit).then(({ items, total }) => {
        setUpcoming(items);
        setTotalUp(Math.ceil(total / limit));
      });
      // fetch past
      getPastOrders(user.id, pagePast, limit).then(({ items, total }) => {
        setPast(items);
        setTotalPast(Math.ceil(total / limit));
      });
    });
    // scroll to top on page/tab change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [user.id, pageUp, pagePast, tab]);
  return (
    <div className={"flex flex-col h-full w-full gap-1"}>
      {/*pfp and logout*/}
      <div className="flex flex-col gap-3 md:flex-row border-y border-slate-200 py-4 justify-between">
        {/*pfp*/}
        <div className="flex gap-6">
          <div className="w-16 h-16 rounded-full bg-slate-900"></div>
          <div className="flex flex-col">
            <div className="text-xl">Hi {user.name}</div>
            <div className="text-slate-500">{user.email}</div>
            <div className="text-slate-500 text-xs">
              joined {user.createdAt.toString()}
            </div>
          </div>
        </div>

        {/*logout*/}
        <div className=" flex items-end justify-end gap-2">
          <Link href="/client/edit-profile">
            <Button className="bg-slate-100 text-black rounded-md h-fit p-2 hover:opacity-80 cursor-pointer">
              Edit profile
            </Button>
          </Link>
          <Button
            className="bg-black text-white rounded-md h-fit p-2 hover:opacity-80 cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/*tabs*/}
      <div className="flex flex-col w-full gap-2 overflow-x-auto max-w-5xl mx-auto">
        {/*tab headers*/}
        <div className="flex w-full gap-1 rounded-md border-1 border-slate-200 p-1">
          <button
            className={`${
              tab == "upcoming" ? "bg-slate-100" : "bg-slate-50"
            } rounded-md w-full md:p-2 p-1 flex items-center justify-center cursor-pointer`}
            onClick={() => {
              setTab("upcoming");
            }}
          >
            Upcoming Appointments
          </button>
          <button
            className={`${
              tab == "past" ? "bg-slate-100" : "bg-slate-50"
            } rounded-md w-full md:p-2 p-1 flex items-center justify-center cursor-pointer`}
            onClick={() => {
              setTab("past");
            }}
          >
            Past Appointments
          </button>
        </div>

        {/*tab content*/}
        {tab == "upcoming" && (
          <div className="border-1 border-slate-200 rounded-md flex flex-col gap-1 p-1 md:p-2">
            {upcoming.map((order) => (
              <div
                key={order.id}
                className="border-1 border-slate-100 hover:bg-slate-100 rounded-md p-1 md:p-2 flex flex-col gap-1"
              >
                {/*date*/}
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="flex gap-1">
                    <div className="">
                      <span className="text-slate-600 text-xs">
                        {order.date?.toString()}, {order.time}
                      </span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />

                {/*case type*/}
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="flex gap-1">
                    <div className="">
                      Case Type :{" "}
                      <span className="text-slate-600">{order.caseType}</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <div className="">
                      Advocate :{" "}
                      <span className="text-slate-600">
                        {order.advocateName ||
                          "Not assigned (will be assigned soon)"}
                      </span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />

                {/*grievance*/}
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="flex gap-1">
                    <div className="">
                      Grievance :{" "}
                      <span className="text-slate-600">{order.grievance}</span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />

                {/*meta data*/}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <div className="flex gap-1">
                    <div className="">
                      Language :{" "}
                      <span className="text-slate-600">{order.language}</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <div className="">
                      Call mode :{" "}
                      <span className="text-slate-600">{order.callmode}</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <div className="">
                      Call duration :{" "}
                      <span className="text-slate-600">
                        {order.callduration} minutes
                      </span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />

                <Button
                  className={
                    "bg-black text-white w-full px-1 py-2 rounded-md cursor-pointer"
                  }
                >
                  <Link href={`/meet/${order.id}`}>Join meeting </Link>
                </Button>
              </div>
            ))}

            {/* pagination */}
            {upcoming.length > 0 ? (
              <div className="flex justify-center gap-2 mt-2">
                <Button
                  disabled={pageUp <= 1}
                  onClick={() => setPageUp(pageUp - 1)}
                >
                  Previous
                </Button>
                <span className="px-2 py-1 text-sm text-gray-700">
                  Page {pageUp} of {totalUp}
                </span>
                <Button
                  disabled={pageUp >= totalUp}
                  onClick={() => setPageUp(pageUp + 1)}
                >
                  Next
                </Button>
              </div>
            ) : (
              <p className="text-center text-slate-700">
                No Upcoming appointments
              </p>
            )}
          </div>
        )}

        {tab == "past" && (
          <div className="border-1 border-slate-200 rounded-md flex flex-col gap-1 p-1 md:p-2">
            {past.map((order) => (
              <div
                key={order.id}
                className="border-1 border-slate-100 hover:bg-slate-100 rounded-md p-1 md:p-2 flex flex-col gap-1"
              >
                {/*date*/}
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="flex gap-1">
                    <div className="">
                      <span className="text-slate-600 text-xs">
                        {order.date?.toString()}, {order.time}
                      </span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />

                {/*case type*/}
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="flex gap-1">
                    <div className="">
                      Case Type :{" "}
                      <span className="text-slate-600">{order.caseType}</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <div className="">
                      Advocate :{" "}
                      <span className="text-slate-600">
                        {order.advocateName ||
                          "Not assigned (will be assigned soon)"}
                      </span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />

                {/*grievance*/}
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="flex gap-1">
                    <div className="">
                      Grievance :{" "}
                      <span className="text-slate-600">{order.grievance}</span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />

                {/*meta data*/}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <div className="flex gap-1">
                    <div className="">
                      Language :{" "}
                      <span className="text-slate-600">{order.language}</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <div className="">
                      Call mode :{" "}
                      <span className="text-slate-600">{order.callmode}</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <div className="">
                      Call duration :{" "}
                      <span className="text-slate-600">
                        {order.callduration} minutes
                      </span>
                    </div>
                  </div>
                </div>
                <Divider className={"text-slate-100 h-1"} />
              </div>
            ))}

            {/* pagination */}
            <div className="flex justify-center gap-2 mt-2">
              <Button
                disabled={pagePast <= 1}
                onClick={() => setPagePast(pagePast - 1)}
              >
                Previous
              </Button>
              <span className="px-2 py-1 text-sm text-gray-700">
                Page {pagePast} of {totalPast}
              </span>
              <Button
                disabled={pagePast >= totalPast}
                onClick={() => setPagePast(pagePast + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clientprofile;
