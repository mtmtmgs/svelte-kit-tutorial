import { json } from '@sveltejs/kit';

export const GET = async (): Promise<Response> => {
  return json({ message: 'ok' });
};
