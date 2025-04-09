<script lang="ts">
  import { Button, Input, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { useChatStore } from '$lib/hooks/chat/useChatStore';

  const { messages, newMessage, currentBotMessage } = useChatStore();

  const sendMessage = async () => {
    const userMessage = $newMessage.trim();
    if (userMessage === '') return;

    messages.update((msgs) => [...msgs, { sender: 'user', text: userMessage }]);
    newMessage.set('');

    try {
      await loadStream(userMessage);
    } catch (error) {
      console.error(error);
      messages.update((msgs) => [...msgs, { sender: 'bot', text: 'エラーが発生しました。' }]);
    }
  };

  const loadStream = async (prompt: string) => {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    if (!reader) {
      messages.update((msgs) => [...msgs, { sender: 'bot', text: '結果を読み込めませんでした。' }]);
      return;
    }

    currentBotMessage.set('');
    messages.update((msgs) => [...msgs, { sender: 'bot', text: $currentBotMessage }]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      buffer += decoder.decode(value, { stream: true });

      currentBotMessage.update((msg) => msg + buffer);

      messages.update((msgs) => {
        const updatedMsgs = [...msgs];
        updatedMsgs[updatedMsgs.length - 1].text = $currentBotMessage;
        return updatedMsgs;
      });

      buffer = '';
    }
  };
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
      {#each $messages as { sender, text }, index (index)}
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
