import React from 'react';
import {Button} from "@heroui/button";
import {ShipWheel, Tent} from "lucide-react";

function NavBar() {
    return (
        <div className={"flex justify-between max-w-4xl mx-auto mt-6 px-4 gap-2"}>
            <div className="font-bold text-2xl flex">Indi <span className={"flex items-center w-5"}><Tent/></span> pl<span className={"flex items-center w-5"}><ShipWheel /></span>re</div>
            <Button className="bg-slate-900 text-white rounded-lg py-2 w-auto cursor-pointer hover:opacity-90">Sign In</Button>
        </div>
    );
}

export default NavBar;