import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";

// Remove export - this is only used locally
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            "https://instagram-clone-api.fly.dev/sessions", 
            {
              email: credentials?.email,
              password: credentials?.password
            }
          );

          if (res.status === 200) {
            // Return minimal user information
            return { id: res.data.user.id };
          }
          return null;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      // Update token with user data if available
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Safely assign user data to session
      session.user = token.user as User;
      return session;
    }
  },
  pages: {
    signIn: "/login", // Optional: Custom login page
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
