<script>
	import HamburgerIcon from '$lib/assets/icons/hamburger-icon.svelte';
	import { getContext } from 'svelte';
	const mobileNavOpen = getContext('mobileNavOpen');
</script>

<div class="lg:hidden">
	<button
		type="button"
		class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 active:bg-indigo-100"
		on:click={mobileNavOpen.toggle}
	>
		<HamburgerIcon />
	</button>
</div>
