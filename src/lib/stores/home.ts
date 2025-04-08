import type { TodoItem } from '$lib/server/types/responses';
import { writable } from 'svelte/store';

export const currentView = writable<'dashboard' | 'list'>('dashboard');
export const todoItems = writable<TodoItem[]>([]);
