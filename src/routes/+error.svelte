<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>{page.status} {page.error?.message}</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
  <div class="max-w-md rounded-lg bg-white p-6 text-center shadow-md">
    <h1 class="mb-4 text-4xl font-bold text-red-500">{page.status} - {page.error?.message}</h1>
    <p class="mb-4 text-gray-700">{page.error?.message}</p>
    {#if page.status === 401}
      <a href="/login" class="text-blue-500 hover:underline"> ログインページに戻る </a>
    {/if}
  </div>
</div>
