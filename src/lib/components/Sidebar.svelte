<script lang="ts">
  type SidebarItem = {
    label: string;
    href: string;
  };

  export let items: SidebarItem[] = [];
</script>

<nav class="sidebar">
  <ul>
    {#each items as item}
      <li><a href={item.href}>{item.label}</a></li>
    {/each}
  </ul>
</nav>

<style>
  .sidebar {
    width: 250px;
    background-color: #f4f4f4;
    padding: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 0.5rem 0;
  }
  a {
    text-decoration: none;
    color: #333;
  }
</style>
