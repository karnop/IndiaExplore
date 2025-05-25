import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Clientprofile from "@/components/profiles/clientprofile";
import Advocateprofile from "@/components/profiles/advocateprofile";
import Adminprofile from "@/components/profiles/adminprofile";

async function Page() {
  const session = await auth();

  // if no user redirect to 404
  if (!session?.user?.id) redirect("/404");

  // fetching user record
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });

  if (!user) redirect("/404");

  return (
    <div className={"w-full min-h-[100vh] flex flex-col"}>
      {user.role == "ADMIN" && (
        <div className="">
          <Adminprofile id={session!.user!.id!} />
        </div>
      )}
      {user.role == "CLIENT" && (
        <div className="">
          <Clientprofile user={user} />
        </div>
      )}
      {user.role == "ADVOCATE" && (
        <div className="">
          <Advocateprofile user={user} />
        </div>
      )}
    </div>
  );
}

export default Page;
