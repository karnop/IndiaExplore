
import { auth } from "@/auth"

export async function getUserIdFromSession() {
    const session = await auth();
    return session!.user!.id!;
}