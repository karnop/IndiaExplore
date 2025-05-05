import React from 'react';
import {Divider, Image} from "@heroui/react";

function HomepageSteps() {
    return (
        <div className={" w-full grid grid-cols-1 md:grid-cols-4 "}>

            {/*Step 1*/}
            <div className=" rounded-md hover:shadow-sm hover:bg-slate-100">
                <div className=" flex flex-col gap-1 items-center p-4 ">
                    <Image
                        isZoomed
                        alt="HeroUI Fruit Image with Zoom"
                        src="/step1texting.png"
                        width={240}
                        className={"h-40 w-40 "}
                    />
                    <h1 className="text-sm bg-slate-100 rounded-lg text-slate-700 py-1 px-2">step 1</h1>
                    <h1 className="text-base">Talk to our AI Lawyer</h1>
                    <Divider className={"opacity-10"}/>
                    <p className="text-sm text-justify px-4">
                        Quickly resolve your queries and doubts using our free AI Lawyer. Get instant replies from a knowledge base of
                        extensive law information.
                    </p>
                </div>
            </div>


            {/*Step 2*/}
            <div className="relative rounded-md hover:shadow-sm hover:bg-slate-100">
                <div className="relative flex flex-col gap-1 items-center p-4 ">
                    <Image
                        isZoomed
                        alt="HeroUI Fruit Image with Zoom"
                        src="/step2fillform.png"
                        width={240}
                        className={"h-40 w-40"}
                    />
                    <h1 className="text-sm bg-slate-100 rounded-lg text-slate-700 py-1 px-2">step 2</h1>
                    <h1 className="text-base">More Consultation? Book an online session</h1>
                    <Divider className={"opacity-10"}/>
                    <p className="text-sm text-justify px-4">
                        Fill a form elaborating your problem. Your name, city, and other critical information will be kept private.
                        Only your lawyer would be able to see it once the session is booked. We will assign a lawyer based on your location, requirements and budget.
                        All your sessions are private and we do not store any data.
                    </p>
                </div>
            </div>

            {/*Step 3*/}
            <div className="relative rounded-md hover:shadow-sm hover:bg-slate-100">
                <div className="relative flex flex-col gap-1 items-center p-4 ">
                    <Image
                        isZoomed
                        alt="HeroUI Fruit Image with Zoom"
                        src="/step3fillform.png"
                        width={240}
                        className={"h-40 w-40"}
                    />
                    <h1 className="text-sm bg-slate-100 rounded-lg text-slate-700 py-1 px-2">step 3</h1>
                    <h1 className="text-base">Payment</h1>
                    <Divider className={"opacity-10"}/>
                    <p className="text-sm text-justify px-4">
                        Trust is two sided. We will charge a ₹100 fee once you book an appointment.
                        You will pay rest of the amount after your session. We only charge a small amount to keep the platform running,
                        the rest is transferred to the lawyer.
                    </p>
                </div>
            </div>

            {/*Step 4*/}
            <div className="relative rounded-md hover:shadow-sm hover:bg-slate-100">
                <div className="relative flex flex-col gap-1 items-center p-4 ">
                    <Image
                        isZoomed
                        alt="HeroUI Fruit Image with Zoom"
                        src="/step4offlinemeet.png"
                        width={240}
                        className={"h-40 w-40"}
                    />
                    <h1 className="text-sm bg-slate-100 rounded-lg text-slate-700 py-1 px-2">step 3</h1>
                    <h1 className="text-base">Futute sessions, Offline meeting</h1>
                    <Divider className={"opacity-10"}/>
                    <p className="text-sm text-justify px-4">
                        You are free to meet your lawyer offline or book a session again. All your sessions are private and we do not store any data.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomepageSteps;