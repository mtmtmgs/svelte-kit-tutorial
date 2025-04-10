import { genOpenAIModel } from '$lib/server/utils/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

export const POST = async ({ request }): Promise<Response> => {
  const { messages } = await request.json();

  const result = streamText({
    model: genOpenAIModel(),
    messages,
    tools: {
      weather: tool({
        description: 'Get the weather in a location (fahrenheit)',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for')
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature
          };
        }
      })
    }
  });
  return result.toDataStreamResponse();
};
