import GithubProvider from "next-auth/providers/github";
import { NuxtAuthHandler } from "#auth";
export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/auth'
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
