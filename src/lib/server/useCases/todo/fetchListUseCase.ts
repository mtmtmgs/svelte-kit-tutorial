import type { TodoFetchListService } from '../../services';

export class TodoFetchListUseCase {
  constructor(private readonly todoFetchListService: TodoFetchListService) {}

  async execute(): Promise<any[]> {
    const rows = await this.todoFetchListService.findAll();
    return rows;
  }
}
