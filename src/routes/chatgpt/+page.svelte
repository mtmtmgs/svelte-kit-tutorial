<script lang="ts">
  import { Chat } from '@ai-sdk/svelte';
  import { Button, Textarea } from 'flowbite-svelte';

  const chat = new Chat();
</script>

<main class="flex h-screen bg-gray-100">
  <!-- サイドメニュー -->
  <aside class="w-64 flex-shrink-0 bg-gray-100 p-4 shadow-md">
    <h2 class="mb-4 text-lg font-bold">Menu</h2>
    <ul class="space-y-2">
      <li><a href="#" class="block rounded p-2 hover:bg-gray-200">Home</a></li>
      <li><a href="#" class="block rounded p-2 hover:bg-gray-200">Profile</a></li>
      <li><a href="#" class="block rounded p-2 hover:bg-gray-200">Settings</a></li>
    </ul>
  </aside>

  <!-- チャットエリア -->
  <section class="flex flex-1 flex-col bg-white">
    <!-- チャット履歴 -->
    <div class="flex-1 overflow-y-auto p-4">
      <div class="mx-auto w-full max-w-4xl">
        <ul class="space-y-4 p-4">
          {#each chat.messages as message (message.id)}
            <li class="flex" class:justify-end={message.role === 'user'} class:justify-start={message.role !== 'user'}>
              <div
                class="max-w-xs rounded-2xl p-3 text-gray-800 shadow"
                class:bg-gray-200={message.role === 'user'}
                class:bg-gray-50={message.role !== 'user'}
              >
                <span>{message.content}</span>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- 入力フォームエリア -->
    <div class="bg-white p-8 shadow-md">
      <div class="mx-auto w-full max-w-4xl">
        <form onsubmit={chat.handleSubmit} class="flex items-center space-x-2">
          <Textarea bind:value={chat.input} class="h-12 flex-1 rounded-xl" placeholder="質問してみましょう" />
          <Button type="submit" class="h-12 bg-gray-900 hover:bg-gray-600">送信</Button>
        </form>
      </div>
    </div>
  </section>
</main>
