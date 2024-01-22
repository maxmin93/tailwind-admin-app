<script>
	import SalesIcon from '$lib/assets/icons/sales-icon.svelte';
	import UsersIcon from '$lib/assets/icons/users-icon.svelte';
	import HomeIcon from '$lib/assets/icons/home-icon.svelte';
	import ChartIcon from '$lib/assets/icons/chart-icon.svelte';
	import BaggageIcon from '$lib/assets/icons/baggage-icon.svelte';
	import InvoiceIcon from '$lib/assets/icons/invoice-icon.svelte';
	import AccountIcon from '$lib/assets/icons/account-icon.svelte';
	import LockIcon from '$lib/assets/icons/lock-icon.svelte';
</script>

<nav class="hidden lg:col-span-3 lg:block">
	<a
		href={undefined}
		class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:text-indigo-600 active:text-indigo-400"
	>
		<HomeIcon />
		<span class="grow">Dashboard</span>
	</a>
	<hr class="border-1 h-5" />
	<div class="space-y-1.5">
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
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
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<ChartIcon />
			<span class="grow">Analytics</span>
		</a>
	</div>
	<hr class="h-5 border-0" />
	<div class="space-y-1.5">
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
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
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
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
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<InvoiceIcon />
			<span class="grow">Invoices</span>
			<span
				class="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900"
				>7.5k</span
			>
		</a>
	</div>
	<hr class="h-5 border-0" />
	<div class="space-y-1.5">
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<AccountIcon />
			<span class="grow">Account</span>
		</a>
		<a
			href={undefined}
			class="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200"
		>
			<LockIcon />
			<span class="grow">Logout</span>
		</a>
	</div>
</nav>
