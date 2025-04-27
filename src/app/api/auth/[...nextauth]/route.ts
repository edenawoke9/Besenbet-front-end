import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const res = await axios.post("https://instagram-clone-api.fly.dev/sessions", {
            email: credentials?.email,
            password: credentials?.password
          });

          if (res.status === 200) {
            return {id: res.data.user.id };
          }
           
        
          return null;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT, user: any }) {
      if (user) {
        token.user = user;
        
      }
      return token;
    },
    async session({ session, token }: { session: Session, token: JWT }) {
      session.user = token.user as any;
     
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };