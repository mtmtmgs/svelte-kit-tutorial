<script lang="ts">
  import { Button } from 'flowbite-svelte';

  let items: { id: number; value: string }[] = [];

  async function loadStream() {
    const res = await fetch('/api/stream');
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    if (!reader) return;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.trim() === '') continue;
        const json = JSON.parse(line);
        items = [...items, json];
      }
    }
  }
</script>

<div class="flex flex-col items-center gap-5 p-5">
  <div class="flex w-full justify-center bg-white p-2 shadow-md">
    <Button on:click={loadStream}>Load Stream</Button>
  </div>

  <div class="w-full max-w-xl">
    <ul class="list-none p-0">
      {#each items as item (item.id)}
        <li class="border-b border-gray-300 p-2 last:border-b-0">
          {item.id}: {item.value}
        </li>
      {/each}
    </ul>
  </div>
</div>
