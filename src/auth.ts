import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    // 1. At sign-in (first jwt call), pull the user's ID from the DB into the token
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { id: true },
        });
        if (dbUser) token.id = dbUser.id;
      }
      return token;
    },
    // 2. Expose the user ID on the client session object
    async session({ session, token }) {
      session.user = {
        ...session.user!,
        id: token.id?.toString() || "", // ✅ Convert to string
      };
      return session;
    },
    // 3. Upsert the user on sign-in
    async signIn({ user }) {
      const exists = await prisma.user.findUnique({
        where: { email: user.email! },
      });
      if (!exists) {
        await prisma.user.create({
          data: { email: user.email!, image: user.image },
        });
      }
      return true;
    },
  },
});
