import type { Todo } from '@prisma/client';
import type { TodoFetchListResult } from '../types/dto';
import type { GetTodoListResponse } from '../types/responses';

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
