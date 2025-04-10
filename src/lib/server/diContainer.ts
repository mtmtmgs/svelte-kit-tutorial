import 'reflect-metadata';
import { container } from 'tsyringe';
import { TodoFetchListUseCase } from './useCases';
import { TodoRepository } from './repositories';
import { TodoFetchListService } from './services';
import { MySQLClient } from '../../../prisma/mysql/client';

export const INTERFACE_SYMBOLS = {
  CLIENT: {
    IMySQLClient: Symbol(`I${MySQLClient.name}`)
  },
  REPOSITORY: {
    ITodoRepository: Symbol(`I${TodoRepository.name}`)
  },
  SERVICE: {
    ITodoFetchListService: Symbol(`I${TodoFetchListService.name}`)
  },
  USE_CASE: {
    ITodoFetchListUseCase: Symbol(`I${TodoFetchListUseCase.name}`)
  }
};

// clients
container.registerSingleton('IMySQLClient', MySQLClient).resolve(MySQLClient);

// repositories
container.registerSingleton('ITodoRepository', TodoRepository).resolve(TodoRepository);

// services
container.registerSingleton('ITodoFetchListService', TodoFetchListService).resolve(TodoFetchListService);

// use cases
export const todoFetchListUseCase = container
  .registerSingleton('TodoFetchListUseCase', TodoFetchListUseCase)
  .resolve(TodoFetchListUseCase);
