<script>
	import FlagIcon from '$lib/assets/icons/flag-icon.svelte';
</script>

<nav class="flex items-center gap-2">
	<a
		href={undefined}
		class="group flex items-center justify-between rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 active:bg-indigo-100 sm:gap-2"
	>
		<FlagIcon />
		<span
			class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-900"
			>3</span
		>
	</a>
</nav>
