import { json } from '@sveltejs/kit';
import { TodoFetchListUseCase } from '../../../lib/server/useCases/todo';
import { TodoFetchListService } from '../../../lib/server/services/todo';
import { TodoMapper } from '../../../lib/server/mappers';

const todoFetchListUseCase = new TodoFetchListUseCase(new TodoFetchListService());
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
