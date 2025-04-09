import { messages, newMessage, currentBotMessage } from '$lib/stores/chat';

export const useChatStore = () => {
  return {
    messages,
    newMessage,
    currentBotMessage
  };
};
