import type { TodoFetchListResult } from '$lib/server/types/dto';
import type { GetTodoListResponse } from '$lib/server/types/responses';
import type { Todo } from '@prisma/client';

interface ITodoMapper {
  toGetTodoListResponse(result: TodoFetchListResult): GetTodoListResponse;
}

export class TodoMapper implements ITodoMapper {
  toGetTodoListResponse(result: TodoFetchListResult): GetTodoListResponse {
    const res = {
      items: result.items.map((item: Todo) => ({
        id: item.id,
        uuid: item.uuid,
        title: item.title || '',
        completed: item.completed,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString()
      }))
    };
    return res;
  }
}
