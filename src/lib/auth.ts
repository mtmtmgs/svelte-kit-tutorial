import { env } from '$env/dynamic/private';
import Facebook from '@auth/core/providers/facebook';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { SvelteKitAuth } from '@auth/sveltekit';

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    GitHub({}),
    Facebook({})
  ],
  secret: env.AUTH_SECRET,
  session: {
    // strategy: 'jwt',
    maxAge: 60 * 60 * 1
  },
  // callbacks: {
  //   async jwt({ token, user, trigger }) {
  //     if (trigger === 'signIn' && user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user.id = token.id;

  //     return session;
  //   }
  // }
  trustHost: env.AUTH_TRUST_HOST === 'true'
});
