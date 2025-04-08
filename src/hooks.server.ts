import { json, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authenticationHandle } from './lib/auth';

async function authorizationHandle({ event, resolve }) {
  if (event.url.pathname.startsWith('/api')) {
    const session = await event.locals.auth();
    if (!session) {
      return json({ message: 'Unauthorized' }, { status: 401 });
    }
  }

  return resolve(event);
}

export const handle: Handle = sequence(authenticationHandle, authorizationHandle);
