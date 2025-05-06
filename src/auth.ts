
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    secret : process.env.AUTH_SECRET,
    callbacks: {
        // 1️. At sign-in (first jwt call), pull onboarding from DB into the token
        async jwt({ token, user }) {
            if (user) {
                const dbUser = await prisma.user.findUnique({
                    where: { email: user.email! },
                    select: { onboarding: true },
                })
                token.onboarding = dbUser?.onboarding ?? false
            }
            return token
        },
        // 2. Expose onboarding on the client session object
        async session({ session, token }) {
            session.user = {
                ...session.user!,
                onboarding: token.onboarding,
            }
            return session
        },
        // 3 Your existing signIn hook that upserts the user...
        async signIn({ user }) {
            const exists = await prisma.user.findUnique({ where: { email: user.email! } })
            if (!exists) {
                await prisma.user.create({
                    data: { email: user.email!, image: user.image },
                })
            }
            return true
        },
    },
})