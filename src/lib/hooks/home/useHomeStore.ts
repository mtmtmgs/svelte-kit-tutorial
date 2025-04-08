import { currentView, todoItems } from '$lib/stores/home';

export const useHomeStore = () => {
  return {
    currentView,
    todoItems
  };
};
