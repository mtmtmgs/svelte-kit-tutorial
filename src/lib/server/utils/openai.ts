import { env } from '$env/dynamic/private';
import { createOpenAI } from '@ai-sdk/openai';

const defaultModel = env.OPEN_AI_DEFAULT_MODEL || '';

const genOpenAI = () => {
  const openai = createOpenAI({
    apiKey: env.OPENAI_API_KEY,
    compatibility: 'strict'
  });

  return openai;
};

export const genOpenAIModel = (modelName = defaultModel) => {
  const openai = genOpenAI();
  const model = openai(modelName);

  return model;
};

export const genOpenAIChatModel = (modelName = defaultModel) => {
  const openai = genOpenAI();
  const chatModel = openai.chat(modelName);

  return chatModel;
};
