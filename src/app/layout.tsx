import type { Metadata } from "next";
import "./globals.css";
import { Varela_Round } from 'next/font/google'
const varela = Varela_Round({
    subsets : ["latin"],
    weight : "400"
})
import {Providers} from "@/app/providers";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import {SessionProvider} from "next-auth/react";
import {HeroUIProvider} from "@heroui/react";

export const metadata: Metadata = {
  title: "Conversia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <SessionProvider>
          <html lang="en">
          <body className={` bg-slate-50 ${varela.className}`}>
          <Providers>
              <HeroUIProvider>
              <div className="bg-slate-50 fixed z-50  top-0 w-full h-[10vh] ">
                  <NavBar/>
              </div>
              <main className={`z-20 p-4 mt-[9vh]`}>{children}</main>
              <div className=" w-full ">
                  <Footer/>
              </div>
              </HeroUIProvider>
          </Providers>
          </body>
          </html>
      </SessionProvider>
  );
}
