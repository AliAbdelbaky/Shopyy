import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/auth",
  },
  secret: useRuntimeConfig().AUTH_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: useRuntimeConfig().GITHUB_CLIENT_ID,
      clientSecret: useRuntimeConfig().GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    FacebookProvider.default({
      clientId: "9a82b532b4538c675980fdcf4331cebd",
      clientSecret: "214201248079839|sERAqFM5syI04S604dP8tWLWRBI"
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {}, // Object is required but can be left empty.
      authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
        console.log(credentials);
        const user = {
          id: "1",
          name: "J Smith",
          username: "test@gmai.cionm",
          password: "test",
        };
        if (
          credentials?.email === user.username &&
          credentials?.password === user.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // eslint-disable-next-line no-console
          console.error(
            "Warning: Malicious login attempt registered, bad credentials provided"
          );
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
