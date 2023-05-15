import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: "760aeefd1a4c4f02f06b",
      clientSecret: "9ac2e968eaabccca01c00fedb195ef36c9582ccb",
    }),
  ],
});
