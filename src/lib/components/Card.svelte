<!-- lib/Card.svelte -->
<div class="rounded border p-4 shadow">
  <header class="text-lg font-bold text-blue-500">
    <slot name="title" />
  </header>

  <main class="my-5">
    <slot />
    <!-- 無名スロット -->
  </main>

  <footer class="text-sm text-gray-400">
    <slot name="footer" />
  </footer>
</div>
