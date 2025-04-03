export interface ITodoFetchListService {
  findAll(): Promise<any[]>;
}

export class TodoFetchListService implements ITodoFetchListService {
  async findAll(): Promise<any[]> {
    const rows = [
      { id: 1, text: 'hoge', completed: true, createdAt: '2025-10-01T00:00:00.000Z' },
      { id: 2, text: 'fuga', completed: true, createdAt: '2025-10-02T00:00:00.000Z' }
    ];
    return rows;
  }
}
