import { messages, newMessage } from '$lib/stores/chat';

export const useChatStore = () => {
  return {
    messages,
    newMessage
  };
};
