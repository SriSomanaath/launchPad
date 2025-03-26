import { NextAuthOptions } from "next-auth";

//Providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import GitlabProvider from "next-auth/providers/gitlab";
// import EmailProvider from "next-auth/providers/email";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // GitlabProvider({
    //   clientId: process.env.GITLAB_CLIENT_ID!,
    //   clientSecret: process.env.GITLAB_CLIENT_SECRET!,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      // Optional: Check user info before allowing login
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect users to /home after login
      return `${baseUrl}/home`;
    },
  },
  pages: {
    signOut: "/",
  },
} satisfies NextAuthOptions;
