"use client"
import React, {useEffect} from 'react';
import { useSession } from "next-auth/react"
import {signIn} from "@/auth";
import {Button} from "@heroui/button";
import Unauthenticateaccess from "@/components/unauthenticateaccess";

function Page() {
    const { data: session, status } = useSession();

    return (
        <div className={"h-[100vh]"}>
            {status == "unauthenticated" &&
                <Unauthenticateaccess />
            }
        </div>
    );
}

export default Page;