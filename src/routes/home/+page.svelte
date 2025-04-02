<script lang="ts">
  import Dashboard from './Dashboard.svelte';
  import List from './List.svelte';

  let currentComponent = 'dashboard';

  const components = {
    dashboard: Dashboard,
    list: List
  };
  type ComponentName = keyof typeof components;

  function setComponent(component: ComponentName) {
    currentComponent = component;
  }
</script>

<div class="flex h-screen">
  <!-- サイドバー -->
  <aside class="h-full w-1/4 overflow-y-auto bg-green-100 p-4">
    <h1 class="mb-4 text-lg font-bold">管理システム</h1>
    <nav>
      <ul class="space-y-2">
        <li>
          <button
            on:click={() => setComponent('dashboard')}
            class="block w-full rounded bg-green-500 p-2 text-left text-white hover:bg-green-600"
          >
            ダッシュボード
          </button>
        </li>
        <li>
          <button
            on:click={() => setComponent('list')}
            class="block w-full rounded bg-green-500 p-2 text-left text-white hover:bg-green-600"
          >
            一覧
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- メインコンテンツ -->
  <main class="flex-1 bg-gray-100 p-4">
    <header class="mb-4 flex items-center justify-between">
      <h2 class="text-xl font-bold">hoge</h2>
      <div class="space-x-2">
        <button class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"> 検索 </button>
        <button class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          新規作成
        </button>
      </div>
    </header>
    <section class="rounded bg-green-200 p-4">
      {#if components.hasOwnProperty(currentComponent)}
        <svelte:component this={components[currentComponent]} />
      {/if}
    </section>
  </main>
</div>
