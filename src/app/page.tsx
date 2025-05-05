"use client"
import {MessageSquareDot} from "lucide-react";
import Link from "next/link";
import HomepageSteps from "@/components/homepageSteps";


export default function Home() {
    return (
      <div className={"flex flex-col gap-2"}>
        <div className="text w-full">
          <h1 className={"text-4xl font-bold flex w-full justify-center text-justify"}>
              We make sure You get your rights with minimal Trouble </h1>
        </div>

          <div className="chat w-full md:max-w-4xl mx-auto md:px-4">
              <div className="flex border-2 shadow-2xl border-slate-300 rounded-lg px-4 items-center gap-2 mt-3">
                  <MessageSquareDot />
                  <Link href={"/chat"} className="py-3 px-3 outline-none  w-full">
                      Talk to your AI Lawyer for free...
                  </Link>
              </div>
          </div>


          <div className="w-full mt-12">
              <h1 className={"text-4xl font-bold flex w-full justify-center text-justify"}> How? </h1>
              <h1 className={"text-lg flex w-full justify-center text-justify"}> In 4 easy steps </h1>
              <HomepageSteps />
          </div>




      </div>
  );
}
