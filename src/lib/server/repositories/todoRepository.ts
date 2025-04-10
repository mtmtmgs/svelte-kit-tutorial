import type { Todo } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import type { IMySQLClient } from '../../../../prisma/mysql/client';

export interface ITodoRepository {
  findAll(): Promise<Todo[]>;
}

@injectable()
export class TodoRepository implements ITodoRepository {
  constructor(@inject('IMySQLClient') private readonly mysql: IMySQLClient) {}

  async findAll(): Promise<Todo[]> {
    const rows = await this.mysql.todo.findMany();
    return rows;
  }
}
