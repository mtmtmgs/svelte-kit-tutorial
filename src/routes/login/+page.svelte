<script>
  import { SignIn, SignOut } from '@auth/sveltekit/components';
  import { page } from '$app/stores';
  import { Button, ButtonGroup } from 'flowbite-svelte';
</script>

<div class="flex h-screen flex-col items-center justify-center">
  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <img src={$page.data.session.user.image} class="avatar" alt="User Avatar" />
    {/if}
    <div class="m-3 text-green-500">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? 'User'}</strong>
    </div>
    <pre>{JSON.stringify($page.data.session, null, 2)}</pre>
    <Button class="mb-2">
      <SignOut>
        <div slot="submitButton" class="buttonPrimary">Sign out</div>
      </SignOut>
    </Button>
  {:else}
    <div class="m-3 text-red-500">You are not signed in</div>
    <ButtonGroup
      class="mb-3 flex flex-col items-center"
      aria-label="Basic example"
      data-tooltip-target="tooltip-default"
      data-tooltip-placement="top"
      data-tooltip-trigger="hover"
      data-tooltip-content="Sign in with your email and password"
    >
      <Button class="mb-2">
        <SignIn>
          <div slot="submitButton">Sign in</div>
        </SignIn>
      </Button>
      <Button>
        <SignIn provider="google" />
      </Button>
    </ButtonGroup>
  {/if}
</div>
