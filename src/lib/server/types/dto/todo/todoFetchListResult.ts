import type { Todo } from '$prisma/mysql/generated';

export type TodoFetchListResult = {
  items: Todo[];
};
