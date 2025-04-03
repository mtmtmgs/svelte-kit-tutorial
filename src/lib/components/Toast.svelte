<script lang="ts">
  import { toasts } from '$lib/hooks/useToast';

  export let position;
</script>

<div class="fixed" style="z-index: 1000;" class:bottom-10={position.includes('bottom-center')}>
  {#each $toasts as { type, message, id }}
    <div
      class="m-2 rounded p-4 shadow"
      class:bg-green-500={type === 'success'}
      class:bg-red-500={type === 'error'}
      class:bg-blue-500={type === 'info'}
      class:text-white={type !== 'info'}
    >
      {message}
    </div>
  {/each}
</div>

<style>
  .fixed {
    max-width: 300px;
  }
</style>
