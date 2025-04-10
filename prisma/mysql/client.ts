import { PrismaClient } from '@prisma/client';
import 'reflect-metadata';
import { injectable } from 'tsyringe';

export interface IMySQLClient extends PrismaClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

@injectable()
export class MySQLClient extends PrismaClient implements IMySQLClient {
  constructor() {
    super();
  }

  async connect(): Promise<void> {
    await this.$connect();
  }

  async disconnect(): Promise<void> {
    await this.$disconnect();
  }
}
