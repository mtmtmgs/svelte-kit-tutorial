export class TodoFetchListService {
  async findAll(): Promise<any[]> {
    const rows = [
      { id: 1, text: 'hoge', createdAt: '2025-10-01T00:00:00.000Z' },
      { id: 2, text: 'fuga', createdAt: '2025-10-02T00:00:00.000Z' }
    ];
    return rows;
  }
}
