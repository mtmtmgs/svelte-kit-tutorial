import { json } from '@sveltejs/kit';
import { TodoFetchListUseCase } from '../../../lib/server/useCases';
import { TodoFetchListService } from '../../../lib/server/services';
import type { GetTodoListResponse } from '../../../lib/server/types/responses/todo';

export const GET = async (): Promise<GetTodoListResponse> => {
  const todoFetchListUseCase = new TodoFetchListUseCase(new TodoFetchListService());
  const res = await todoFetchListUseCase.execute();
  return json(res);
};

export const POST = async ({ request }): Promise<Response> => {
  const body = await request.json();
  const res = body;
  return json(res);
};
