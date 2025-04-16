import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Storage } from '@google-cloud/storage';

export const GET = async (): Promise<Response> => {
  const credentials = JSON.parse(env.GOOGLE_APPLICATION_CREDENTIALS ?? '');

  const storage = new Storage({ credentials });

  const [buckets] = await storage.getBuckets();
  const bucketNames = buckets.map((b) => b.name);

  try {
    return json({ bucketNames });
  } catch (e) {
    console.error(e);
    return json({ error: 'Error occurred during search' }, { status: 500 });
  }
};
