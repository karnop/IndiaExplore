"use client"

import React from 'react';
import Booksessionform from "@/components/booksessionform";
import {useSession} from "next-auth/react";
import Unauthenticateaccess from "@/components/unauthenticateaccess";

function Page() {
    const { data: session, status } = useSession();
    return (
        <div className={"min-h-[100vh]"}>
            {status == "unauthenticated" &&
                <Unauthenticateaccess />
            }

            {status == "authenticated" &&
                <div className={"w-full min-h-[100vh] flex flex-col-reverse md:flex-row justify-end"}>
                    {/*form*/}
                    <div className="md:basis-2/3 flex flex-col gap-2 items-center ">
                        <h3 className="text-2xl font-semibold">Book an online session</h3>
                        <Booksessionform userId={session!.user!.id!}/>
                    </div>

                    {/*divider*/}
                    <div className="border-1 border-slate-300 m-4"></div>

                    {/*video*/}
                    <div className="md:basis-1/3 flex flex-col gap-2 items-center ">
                        <h1 className="text-2xl font-bold">How it Works?</h1>
                        <div className="video w-[90%] h-40 bg-black shadow-lg rounded-xl">f</div>
                    </div>
                </div>
            }

        </div>
    );
}

export default Page;