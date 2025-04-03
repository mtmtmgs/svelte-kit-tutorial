<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<main class="flex-grow">
  <slot />
</main>

<footer class="bg-gray-800 p-4 text-center text-white">
  <p>&copy; 2025 Todo App</p>
</footer>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }

  .flex-grow {
    flex: 1;
  }
</style>
