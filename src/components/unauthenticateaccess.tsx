import {KeySquare} from 'lucide-react';
import React from 'react';
import {Button} from "@heroui/button";
import {signIn} from "next-auth/react";
import {Divider} from "@heroui/react";

function Unauthenticateaccess() {
    return (
        <div className={"flex flex-col gap-1 items-center justify-center w-full h-full "}>
            <KeySquare className={"w-8 h-8 text-slate-700"} />
            <Divider className={"w-md text-slate-500"}/>
            <Button onClick={() => {signIn("google")}}
                    className="w-md bg-black text-white rounded-lg py-2  cursor-pointer hover:opacity-85">Sign
                In</Button>
            <Divider className={"w-md py-2 text-slate-500"}/>
            <h2 className="w-sm text-center">You need to sign in to access the AI Advocate. This helps us prevent spam.
            Signing in takes only 10 seconds.</h2>
        </div>
    );
}

export default Unauthenticateaccess;