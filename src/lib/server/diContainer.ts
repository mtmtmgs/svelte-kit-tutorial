import { INTERFACE_SYMBOLS } from '$lib/server/consts';
import { TodoRepository } from '$lib/server/repositories';
import { TodoFetchListService } from '$lib/server/services';
import { TodoFetchListUseCase } from '$lib/server/useCases';
import { MySQLClient } from '$prisma/mysql/client';
import 'reflect-metadata';
import { container } from 'tsyringe';

// clients
container.registerSingleton(INTERFACE_SYMBOLS.CLIENT.IMySQLClient, MySQLClient);

// repositories
container.registerSingleton(INTERFACE_SYMBOLS.REPOSITORY.ITodoRepository, TodoRepository);

// services
container.registerSingleton(INTERFACE_SYMBOLS.SERVICE.ITodoFetchListService, TodoFetchListService);

// use cases
export const todoFetchListUseCase = container
  .registerSingleton(INTERFACE_SYMBOLS.USE_CASE.ITodoFetchListUseCase, TodoFetchListUseCase)
  .resolve(TodoFetchListUseCase);
