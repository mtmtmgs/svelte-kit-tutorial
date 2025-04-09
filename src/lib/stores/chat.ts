import { writable } from 'svelte/store';

export const messages = writable([
  { sender: 'user', text: 'こんにちは！' },
  { sender: 'bot', text: 'こんにちは！どのようにお手伝いできますか？' }
]);

export const newMessage = writable('');

export const currentBotMessage = writable('');
