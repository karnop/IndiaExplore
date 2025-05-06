"use client"
import { useSession } from "next-auth/react"
import Unauthenticateaccess from "@/components/unauthenticateaccess";
import Chatbot from "@/components/chatbot";

function Page() {
    const { data: session, status } = useSession();

    return (
        <div className={"h-[100vh]"}>
            {status == "unauthenticated" &&
                <Unauthenticateaccess />
            }

            {status == "authenticated" &&
                <Chatbot  userId={session!.user!.id!} />
            }

        </div>
    );
}

export default Page;