import { genOpenAIModel } from '$lib/server/utils/openai';
import { json } from '@sveltejs/kit';
import { streamText } from 'ai';

export const POST = async ({ request }): Promise<Response> => {
  const reqBody = await request.json();
  const { prompt } = reqBody;

  try {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const { textStream } = streamText({
            model: genOpenAIModel(),
            prompt
          });

          for await (const textPart of textStream) {
            controller.enqueue(encoder.encode(textPart));
          }

          controller.close();
        } catch (err) {
          console.error(err);
          controller.error('Error generating text');
        }
      }
    });

    return new Response(stream);
  } catch (err) {
    console.error(err);
    return json({ message: 'error' }, { status: 500 });
  }
};
