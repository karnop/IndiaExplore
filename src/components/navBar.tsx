import React from 'react';
import {Button} from "@heroui/button";
import {ShipWheel, Tent} from "lucide-react";
import Link from "next/link";
import {auth, signIn, signOut} from "@/auth"

async function NavBar() {
    const session = await auth()

    return (
        <div className={" flex justify-between items-center w-full md:max-w-4xl md:mx-auto py-4 px-4 gap-2 "}>
            <Link href={"/"} className="font-bold text-2xl flex">
                C <span className={"flex items-center w-5"}><ShipWheel/></span> onversi<span
                className={"flex items-center w-5"}><Tent/></span>
            </Link>

            <div className="flex gap-2">
                <Link href={"/booksession"} className="bg-slate-100 text-black rounded-lg py-2 px-2 hover:bg-slate-200">
                    Book a Session
                </Link>
                {(!session) && <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                >
                    <Button type={"submit"}
                            className=" bg-slate-900 text-white rounded-lg py-2  cursor-pointer hover:opacity-85">Sign
                        In</Button>
                </form>}

                {session &&
                    <Button
                            className=" bg-black text-white rounded-lg py-2 hover:opacity-80 cursor-pointer px-4">
                        <Link href={"/profile"}>Profile</Link>
                    </Button>
                    }

            </div>
        </div>
    );
}

export default NavBar;