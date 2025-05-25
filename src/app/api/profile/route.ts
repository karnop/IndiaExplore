import getServerSession from "next-auth";
import { auth } from "@/auth";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Prisma client

export async function PATCH(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email } = await req.json();

  try {
    const updated = await prisma.user.update({
      where: { id: session.user!.id },
      data: { name, email }, // ✅ updated with name + email
    });

    return NextResponse.json({ success: true, user: updated });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
