import { redirect, type Handle } from '@sveltejs/kit';
import { handle as authenticationHandle } from './lib/auth';
import { sequence } from '@sveltejs/kit/hooks';

async function authorizationHandle({ event, resolve }) {
  if (event.url.pathname.startsWith('/api')) {
    const session = await event.locals.auth();
    if (!session) {
      throw redirect(303, '/login');
    }
  }

  return resolve(event);
}

export const handle: Handle = sequence(authenticationHandle, authorizationHandle);
