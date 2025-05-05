import {Button} from "@heroui/button";
import {Search} from "lucide-react";

export default function Home() {
  return (
      <div className={"flex flex-col gap-2"}>
        <div className="text w-full">
          <h1 className={"text-4xl font-bold flex w-full justify-center text-justify"}>We make your trips Safer, Better Planned, and Informative </h1>
        </div>
          <div className="search w-full md:max-w-4xl mx-auto md:px-4">
              <div className="flex border-2 shadow-2xl border-slate-300 rounded-lg px-4 items-center gap-2 mt-3">
                  <Search />
                  <input type="text" className="py-3 px-3 outline-none  w-full" placeholder={"Your Destination ..."}/>
              </div>
          </div>
      </div>
  );
}
