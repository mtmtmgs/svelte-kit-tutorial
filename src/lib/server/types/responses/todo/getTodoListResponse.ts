export type TodoItem = {
  id?: number;
  title?: string;
  completed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type GetTodoListResponse = {
  items: TodoItem[];
} extends Response
