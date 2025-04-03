<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import {
    ChartPieSolid,
    GridSolid,
    MailBoxSolid,
    UserSolid,
    ArrowRightToBracketOutline,
    EditOutline
  } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Dashboard from './Dashboard.svelte';
  import List from './List.svelte';
  import { useToast } from '$lib/hooks/useToast';
  import type { GetTodoListResponse, TodoItem } from '$lib/server/types/responses/todo';

  export const currentComponent = writable<'dashboard' | 'list'>('dashboard');
  export const todoItems = writable<TodoItem[]>([]);

  let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  let todoListRes: GetTodoListResponse;
  const toast = useToast();

  const components = {
    dashboard: Dashboard,
    list: List
  };
  type ComponentName = keyof typeof components;

  function setComponent(component: ComponentName) {
    currentComponent.set(component);
  }

  onMount(async () => {
    try {
      const res = await fetch('/api/todo');
      if (res.ok) {
        todoListRes = await res.json();
        todoItems.set(todoListRes?.items || []);
      } else {
        toast.error('Todoリストの取得に失敗しました');
      }
    } catch (error) {
      toast.error('Todoリストの取得中にエラーが発生しました');
    }
  });
</script>

<div class="flex h-screen">
  <!-- サイドバー -->
  <Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard" on:click={() => setComponent('dashboard')}>
          <svelte:fragment slot="icon">
            <ChartPieSolid
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="todo" {spanClass} on:click={() => setComponent('list')}>
          <svelte:fragment slot="icon">
            <GridSolid
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span
              class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              Pro
            </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass}>
          <svelte:fragment slot="icon">
            <MailBoxSolid
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span
              class="text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium"
            >
              3
            </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/docs/components/sidebar">
          <svelte:fragment slot="icon">
            <UserSolid
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign In">
          <svelte:fragment slot="icon">
            <ArrowRightToBracketOutline
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign Up">
          <svelte:fragment slot="icon">
            <EditOutline
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>

  <!-- メインコンテンツ -->
  <main class="flex-1 bg-gray-100 p-4">
    <header class="mb-4 flex items-center justify-between">
      <h2 class="text-xl font-bold">hoge</h2>
      <div class="space-x-2">
        <button class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"> 検索 </button>
        <button class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"> 新規作成 </button>
      </div>
    </header>
    <section class="rounded bg-green-200 p-4">
      {#if $currentComponent in components}
        <svelte:component this={components[$currentComponent]} />
      {/if}

      <h3 class="mt-4 text-lg font-bold">Todoリスト</h3>
      <ul class="mt-2 space-y-2">
        {#each $todoItems as todo}
          <li class="rounded bg-white p-2 shadow">
            <span class={todo.completed ? 'line-through' : ''}>{todo.title}</span>
          </li>
        {/each}
      </ul>
    </section>
  </main>
</div>
