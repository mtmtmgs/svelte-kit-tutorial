import type { Todo } from '@prisma/client';
import type { ITodoRepository } from '../../repositories';

export interface ITodoFetchListService {
  findAll(): Promise<Todo[]>;
}

export class TodoFetchListService implements ITodoFetchListService {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async findAll(): Promise<Todo[]> {
    const rows = await this.todoRepository.findAll();
    return rows;
  }
}
