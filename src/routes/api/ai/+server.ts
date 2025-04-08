import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }): Promise<Response> => {
  const reqBody = await request.json();
  const { prompt } = reqBody;

  try {
    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      prompt
    });
    return json({ text });
  } catch (err) {
    console.error(err);
    return json({ message: 'error' }, { status: 500 });
  }
};
