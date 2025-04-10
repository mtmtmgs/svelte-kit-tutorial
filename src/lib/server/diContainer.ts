import { INTERFACE_SYMBOLS } from '$lib/server/consts';
import { TodoRepository } from '$lib/server/repositories';
import { TodoFetchListService } from '$lib/server/services';
import { TodoFetchListUseCase } from '$lib/server/useCases';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { MySQLClient } from '../../../prisma/mysql/client';

// clients
container.registerSingleton(INTERFACE_SYMBOLS.CLIENT.IMySQLClient, MySQLClient).resolve(MySQLClient);

// repositories
container.registerSingleton(INTERFACE_SYMBOLS.REPOSITORY.ITodoRepository, TodoRepository).resolve(TodoRepository);

// services
container
  .registerSingleton(INTERFACE_SYMBOLS.SERVICE.ITodoFetchListService, TodoFetchListService)
  .resolve(TodoFetchListService);

// use cases
export const todoFetchListUseCase = container
  .registerSingleton(INTERFACE_SYMBOLS.USE_CASE.ITodoFetchListUseCase, TodoFetchListUseCase)
  .resolve(TodoFetchListUseCase);
