export type TodoItem = {
  id?: number;
  uuid?: string;
  title?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type GetTodoListResponse = {
  items: TodoItem[];
};
