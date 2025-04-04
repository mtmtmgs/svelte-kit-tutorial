<script>
  import { Button, Input, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { writable } from 'svelte/store';

  export const messages = writable([
    { sender: 'user', text: 'こんにちは！' },
    { sender: 'bot', text: 'こんにちは！どのようにお手伝いできますか？' }
  ]);

  export const newMessage = writable('');

  function sendMessage() {
    newMessage.update((value) => {
      if (value.trim() !== '') {
        messages.update((msgs) => [...msgs, { sender: 'user', text: value }]);
        setTimeout(() => {
          messages.update((msgs) => [...msgs, { sender: 'bot', text: 'それは興味深いですね！' }]);
        }, 1000);
      }
      return '';
    });
  }
</script>

<div class="flex h-screen font-sans">
  <!-- サイドバー -->
  <Sidebar class="flex-shrink-0 bg-gray-800 text-white">
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem href="#" label="新しいチャット" />
        <SidebarItem href="#" label="履歴" />
        <SidebarItem href="#" label="設定" />
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>

  <!-- メインチャット画面 -->
  <div class="flex flex-grow flex-col bg-gray-900 text-white">
    <!-- チャットウィンドウ -->
    <div class="flex-1 space-y-4 overflow-y-auto p-4">
      {#each $messages as { sender, text }}
        <div class="flex {sender === 'user' ? 'justify-end' : 'justify-start'}">
          <div class="max-w-xs rounded-lg bg-gray-700 p-3">
            <p class="text-sm">{text}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- 入力エリア -->
    <div class="flex items-center space-x-2 bg-gray-800 p-4">
      <Input bind:value={$newMessage} placeholder="メッセージを入力..." class="flex-1" />
      <Button on:click={sendMessage} color="green">送信</Button>
    </div>
  </div>
</div>
