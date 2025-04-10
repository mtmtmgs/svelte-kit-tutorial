import { INTERFACE_SYMBOLS } from '$lib/server/consts';
import type { ITodoFetchListService } from '$lib/server/services';
import type { TodoFetchListResult } from '$lib/server/types/dto';
import { inject, injectable } from 'tsyringe';

export interface ITodoFetchListUseCase {
  execute(): Promise<TodoFetchListResult>;
}

@injectable()
export class TodoFetchListUseCase implements ITodoFetchListUseCase {
  constructor(
    @inject(INTERFACE_SYMBOLS.SERVICE.ITodoFetchListService)
    private readonly todoFetchListService: ITodoFetchListService
  ) {}

  async execute(): Promise<TodoFetchListResult> {
    const todoList = await this.todoFetchListService.findAll();
    return {
      items: todoList
    };
  }
}
