import { json } from '@sveltejs/kit';
import { TodoFetchListUseCase } from '../../../lib/server/useCases';
import { TodoFetchListService } from '../../../lib/server/services';

export const GET = async (): Promise<Response> => {
  const todoFetchListUseCase = new TodoFetchListUseCase(new TodoFetchListService());
  const res = await todoFetchListUseCase.execute();
  return json(res);
};

export const POST = async ({ request }): Promise<Response> => {
  const body = await request.json();
  const res = body;
  return json(res);
};
