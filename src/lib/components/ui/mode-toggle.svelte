<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { resetMode, setMode } from 'mode-watcher';

	const {
		elements: { trigger, menu, item, separator, arrow },
		// builders: { createSubmenu, createMenuRadioGroup, createCheckboxItem },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true
	});
</script>

<button type="button" class="trigger" use:melt={$trigger} aria-label="Toggle theme">
	<Sun
		class="dark:-roate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 ring-0 transition-all dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 ring-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</button>

{#if $open}
	<div class="menu" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<div class="item" use:melt={$item} on:click={() => setMode('light')}>Light</div>
		<div class="item" use:melt={$item} on:click={() => setMode('dark')}>Dark</div>
		<div class="separator" use:melt={$separator} />
		<div class="item" use:melt={$item} on:click={() => resetMode()}>System</div>
		<div use:melt={$arrow} />
	</div>
{/if}

<style lang="postcss">
	.button:focus {
		outline: none;
	}

	.menu {
		@apply z-10 flex max-h-[300px] min-w-[120px] flex-col shadow-lg;
		@apply rounded-md bg-background p-1 shadow-neutral-900/30 lg:max-h-none;
		@apply outline-none ring-0 !important;
	}
	.item {
		@apply relative h-6 min-h-[24px] select-none rounded-sm pl-6 pr-1;
		@apply z-20 text-foreground outline-none ring-0 !important;
		@apply flex items-center text-sm leading-none;
		@apply data-[highlighted]:bg-neutral-400/50 data-[highlighted]:text-primary-foreground;
		/* @apply data-[highlighted]:text-neutral-900 data-[disabled]:text-neutral-300; */
	}
	/*
		@apply outline-none ring-0 ring-offset-0 !important;
	// focus:ring-0 focus:ring-offset-0
	 */
	.trigger {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-background;
		@apply text-foreground transition-colors hover:bg-slate-400 hover:bg-opacity-25;
		@apply p-0 text-sm font-medium outline-none;
	}
</style>
