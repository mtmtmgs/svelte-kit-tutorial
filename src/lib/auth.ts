import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import Facebook from '@auth/core/providers/facebook';

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHub({}),
    Facebook({})
  ],
  secret: process.env.AUTH_SECRET
});
