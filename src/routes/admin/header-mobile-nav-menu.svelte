<script>
	import { getContext } from 'svelte';
	const mobileNavOpen = getContext('mobileNavOpen');

	import SalesIcon from '$lib/assets/icons/sales-icon.svelte';
	import UsersIcon from '$lib/assets/icons/users-icon.svelte';
	import HomeIcon from '$lib/assets/icons/home-icon.svelte';
	import ChartIcon from '$lib/assets/icons/chart-icon.svelte';
	import BaggageIcon from '$lib/assets/icons/baggage-icon.svelte';
	import InvoiceIcon from '$lib/assets/icons/invoice-icon.svelte';
</script>

<nav class="flex flex-col py-4 lg:hidden" on:click={mobileNavOpen.close}>
	<a
		href={undefined}
		class="group flex items-center justify-between gap-2 rounded-md border border-transparent bg-indigo-100 px-2.5 py-2 text-sm font-semibold text-indigo-500 active:border-indigo-200"
	>
		<HomeIcon />
		<span class="grow">Dashboard</span>
	</a>
	<hr class="h-5 border-0" />
	<div class="space-y-1.5">
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<SalesIcon />
			<span class="grow">Sales</span>
			<span
				class="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
				>250</span
			>
		</a>
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<ChartIcon />
			<span class="grow">Analytics</span>
		</a>
	</div>
	<hr class="h-5 border-0" />
	<div class="space-y-1.5">
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<UsersIcon />
			<span class="grow">Users</span>
			<span
				class="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
				>563</span
			>
		</a>
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<BaggageIcon />
			<span class="grow">Projects</span>
			<span
				class="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
				>1.2k</span
			>
		</a>
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<InvoiceIcon />
			<span class="grow">Invoices</span>
			<span
				class="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
				>7.5k</span
			>
		</a>
	</div>
</nav>
