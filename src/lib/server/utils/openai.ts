import { env } from '$env/dynamic/private';
import { createOpenAI } from '@ai-sdk/openai';

const MODEL = 'gpt-4o-mini';

const genOpenAI = () => {
  const openai = createOpenAI({
    apiKey: env.OPENAI_API_KEY,
    compatibility: 'strict'
  });

  return openai;
};

export const genOpenAIModel = (modelName = MODEL) => {
  const openai = genOpenAI();
  const model = openai(modelName);

  return model;
};

export const genOpenAIChatModel = (modelName = MODEL) => {
  const openai = genOpenAI();
  const chatModel = openai.chat(modelName);

  return chatModel;
};
