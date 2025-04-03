import type { ITodoFetchListService } from '../../services/todo';
import type { TodoFetchListResult } from '../../types/dto/todo';

export interface ITodoFetchListUseCase {
  execute(): Promise<TodoFetchListResult>;
}

export class TodoFetchListUseCase implements ITodoFetchListUseCase {
  constructor(private readonly todoFetchListService: ITodoFetchListService) {}

  async execute(): Promise<TodoFetchListResult> {
    const todoList = await this.todoFetchListService.findAll();
    return {
      items: todoList
    };
  }
}
