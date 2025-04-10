import { INTERFACE_SYMBOLS } from '$lib/server/consts';
import type { ITodoRepository } from '$lib/server/repositories';
import type { Todo } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

export interface ITodoFetchListService {
  findAll(): Promise<Todo[]>;
}

@injectable()
export class TodoFetchListService implements ITodoFetchListService {
  constructor(@inject(INTERFACE_SYMBOLS.REPOSITORY.ITodoRepository) private readonly todoRepository: ITodoRepository) {}

  async findAll(): Promise<Todo[]> {
    const rows = await this.todoRepository.findAll();
    return rows;
  }
}
