import { PrismaClient } from '@prisma/client';
import type { Todo } from '@prisma/client';

export interface ITodoFetchListService {
  findAll(): Promise<Todo[]>;
}

export class TodoFetchListService implements ITodoFetchListService {
  constructor(private prisma: PrismaClient = new PrismaClient()) {}

  async findAll(): Promise<Todo[]> {
    const rows = await this.prisma.todo.findMany();
    return rows;
  }
}
