import { INTERFACE_SYMBOLS } from '$lib/server/consts';
import type { PrismaClient, Todo } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import type { IMySQLClient } from '../../../../prisma/mysql/client';

export interface ITodoRepository {
  findAll(): Promise<Todo[]>;
}

@injectable()
export class TodoRepository implements ITodoRepository {
  private readonly prisma: PrismaClient;

  constructor(@inject(INTERFACE_SYMBOLS.CLIENT.IMySQLClient) private readonly mysql: IMySQLClient) {
    this.prisma = this.mysql.getPrismaClient();
  }

  async findAll(): Promise<Todo[]> {
    const rows = await this.prisma.todo.findMany();
    return rows;
  }
}
