<script lang="ts">
  type Todo = {
    id: number;
    text: string;
  };

  let todos: Todo[] = [];
  let newTodo: string = '';

  function addTodo(): void {
    if (newTodo.trim()) {
      todos = [...todos, { id: Date.now(), text: newTodo }];
      newTodo = '';
    }
  }

  function removeTodo(id: number): void {
    todos = todos.filter((todo) => todo.id !== id);
  }
</script>

<div class="p-4">
  <div class="todo-layout m-4 rounded-lg border border-gray-300 bg-gray-100 p-4">
    <h1 class="mb-4 text-xl font-bold">Todo List</h1>
    <div class="mb-4 flex items-center">
      <input
        type="text"
        bind:value={newTodo}
        placeholder="新しいTodoを入力"
        class="mr-2 rounded border border-gray-300 p-2"
      />
      <button on:click={addTodo} class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
        追加
      </button>
    </div>
  </div>
  <ul class="list-none p-4">
    {#each todos as todo (todo.id)}
      <li class="flex items-center justify-between border-b border-gray-300 py-2">
        <span>{todo.text}</span>
        <button
          on:click={() => removeTodo(todo.id)}
          class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700"
        >
          削除
        </button>
      </li>
    {/each}
  </ul>
</div>
