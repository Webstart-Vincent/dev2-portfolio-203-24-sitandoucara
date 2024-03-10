import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = [
  process.env.EMAIL_ADMIN,
  process.env.EMAIL_VINCENT,
  process.env.EMAIL_SITAN,
];

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user: { email } }) {
      return allowedEmails.includes(email);
    },

    async redirect({ url, baseUrl }) {
      console.log("*****redirect console log", baseUrl);
      return baseUrl + "/dashboard";
    },

    async session({ session }) {
      console.log("*****session console log", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
//export { handler as GET, handler as POST, authOptions };
export { handler as GET, handler as POST, authOptions };
