import { writable } from 'svelte/store';

type ToastType = 'success' | 'error' | 'info';
type ToastPosition = 'bottom-center' | 'top-right' | 'top-left';

type Toast = {
  type: ToastType;
  message: string;
  id: number;
  position: ToastPosition;
};

export const toasts = writable<Toast[]>([]);

export function useToast() {
  const addToast = (type: ToastType, message: string, position: ToastPosition = 'bottom-center') => {
    const id = Date.now();
    toasts.update((current) => [...current, { type, message, id, position }]);
    setTimeout(() => removeToast(id), 1000);
  };

  const removeToast = (id: number) => {
    toasts.update((current) => current.filter((toast) => toast.id !== id));
  };

  return {
    success: (message: string) => addToast('success', message),
    error: (message: string) => addToast('error', message),
    info: (message: string) => addToast('info', message),
    toasts
  };
}
