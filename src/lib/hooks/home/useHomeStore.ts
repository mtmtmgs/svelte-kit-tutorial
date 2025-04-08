import { currentView, todoItems } from '$lib/stores/home';

export function useHomeStore() {
  return {
    currentView,
    todoItems
  };
}
