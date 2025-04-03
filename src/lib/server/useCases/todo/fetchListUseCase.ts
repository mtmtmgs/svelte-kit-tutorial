import type { ITodoFetchListService } from '../../services/todo';
import type { GetTodoListResponse } from '../../types/responses/todo';

export interface ITodoFetchListUseCase {
  execute(): Promise<GetTodoListResponse>;
}

export class TodoFetchListUseCase implements ITodoFetchListUseCase {
  constructor(private readonly todoFetchListService: ITodoFetchListService) {}

  async execute(): Promise<GetTodoListResponse> {
    const result = await this.todoFetchListService.findAll();
    return {
      items: result.map((item) => ({
        id: item.id,
        title: item.text,
        completed: item.completed,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      }))
    };
  }
}
