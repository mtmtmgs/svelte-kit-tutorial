import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import Facebook from '@auth/core/providers/facebook';
import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    }),
    GitHub({}),
    Facebook({})
  ],
  secret: AUTH_SECRET,
  session: {
    // strategy: 'jwt',
    maxAge: 60 * 5
  }
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
});
