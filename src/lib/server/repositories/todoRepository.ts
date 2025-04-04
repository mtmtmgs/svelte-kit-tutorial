import { PrismaClient } from '@prisma/client';
import type { Todo } from '@prisma/client';

export interface ITodoRepository {
  findAll(): Promise<Todo[]>;
}

export class TodoRepository implements ITodoRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Todo[]> {
    const rows = await this.prisma.todo.findMany();
    return rows;
  }
}
