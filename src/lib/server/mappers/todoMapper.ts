import type { TodoFetchListResult } from '../types/dto/todo';
import type { GetTodoListResponse } from '../types/responses/todo';

interface ITodoMapper {
  toGetTodoListResponse(data: any): GetTodoListResponse;
}

export class TodoMapper implements ITodoMapper {
  toGetTodoListResponse(result: TodoFetchListResult): GetTodoListResponse {
    const res = {
      items: result.items.map((item: any) => ({
        id: item.id,
        title: item.title,
        completed: item.completed,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      }))
    };
    return res;
  }
}
