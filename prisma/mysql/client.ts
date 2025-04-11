import { PrismaClient } from '@prisma/client';
import { injectable } from 'tsyringe';

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
