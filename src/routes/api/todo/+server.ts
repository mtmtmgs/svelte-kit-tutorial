import { json } from '@sveltejs/kit';
import { TodoFetchListUseCase } from '../../../lib/server/useCases';
import { TodoFetchListService } from '../../../lib/server/services';
import { TodoMapper } from '../../../lib/server/mappers';
import { TodoRepository } from '../../../lib/server/repositories';
import { prismaClient } from '../../../../prisma/mysql/client';

const todoFetchListUseCase = new TodoFetchListUseCase(new TodoFetchListService(new TodoRepository(prismaClient)));
const todoMapper = new TodoMapper();

export const GET = async (): Promise<Response> => {
  const result = await todoFetchListUseCase.execute();
  const res = todoMapper.toGetTodoListResponse(result);
  return json(res);
};

export const POST = async ({ request }): Promise<Response> => {
  const body = await request.json();
  const res = body;
  return json(res);
};
