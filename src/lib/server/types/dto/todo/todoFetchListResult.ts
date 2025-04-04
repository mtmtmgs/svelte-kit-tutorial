import type { Todo } from '@prisma/client';

export type TodoFetchListResult = {
  items: Todo[];
};
