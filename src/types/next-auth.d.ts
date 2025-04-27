// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email?: string;
    name?: string;
    accessToken?: string;
    refreshToken?: string;
  }

  interface JWT {
    user: User;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    user: User;
    accessToken?: string;
    refreshToken?: string;
    expires: string;
  }
}