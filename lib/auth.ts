import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";

const authConfig = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials) throw new Error("Missing credentials");

        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) throw new Error("Missing credentials");

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) throw new Error("User not found");

        // 🚨 THIS is where you enforce email verification
        if (user.emailVerified == null) {
          throw new Error("Please verify your email first");
        }

        if (!user.password) {
          throw new Error("Invalid login method");
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) throw new Error("Invalid credentials");

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
});

export const { handlers, auth, signIn, signOut } = authConfig;
