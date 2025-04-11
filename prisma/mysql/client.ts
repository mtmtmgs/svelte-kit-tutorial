import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { PrismaClient } from './generated';

export interface IMySQLClient {
  getPrismaClient(): PrismaClient;
}

@injectable()
export class MySQLClient implements IMySQLClient {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}
