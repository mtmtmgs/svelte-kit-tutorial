import { useCases } from '$lib/server/diContainer';
import { TodoMapper } from '$lib/server/mappers';
import { json } from '@sveltejs/kit';

const { todoFetchListUseCase } = useCases;
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
