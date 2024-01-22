<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { clickOutsideAction } from 'svelte-legos';
	// clickOutsideAction 사용시, toggleDropdown 이 작동 안한다 (계속 true)
	// - 변수로 writable 을 사용해도 작동 안한다.
	// - 명시적으로 false 대입을 해야 dropdown 메뉴가 닫힌다. (mobileNavOpen 는 잘됨)

	import { getContext } from 'svelte';
	const dropdownOpen = getContext('dropdownOpen');

	import FlaskIcon from '$lib/assets/icons/flask-icon.svelte';
	import InboxIcon from '$lib/assets/icons/inbox-icon.svelte';
	import AccountIcon from '$lib/assets/icons/account-icon.svelte';
	import LockIcon from '$lib/assets/icons/lock-icon.svelte';
</script>

<div class="relative inline-block">
	<!-- Dropdown Toggle Button -->
	<button
		type="button"
		class="group flex items-center justify-between rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 active:bg-indigo-100 sm:gap-2"
		id="tk-dropdown-layouts-user"
		aria-haspopup="true"
		aria-expanded={$dropdownOpen}
		on:click={dropdownOpen.open}
	>
		<span class="sm:hidden">JD</span>
		<span class="hidden sm:inline-block">John Doe</span>
		<svg
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			class="hi-solid hi-chevron-down inline-block h-5 w-5 text-slate-400"
		>
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			></path>
		</svg>
	</button>
	<!-- END Dropdown Toggle Button -->

	<!-- Dropdown -->
	{#if $dropdownOpen}
		<!-- svelte-ignore a11y-interactive-supports-focus -->
		<div
			transition:scale={{
				duration: 150,
				delay: 50,
				opacity: 0.2,
				start: 0.8,
				easing: quintOut
			}}
			on:click={dropdownOpen.close}
			use:clickOutsideAction={dropdownOpen.close}
			role="menu"
			aria-labelledby="tk-dropdown-layouts-user"
			class="absolute end-0 mt-2 w-48 rounded shadow-xl shadow-slate-200 ltr:origin-top-right rtl:origin-top-left"
		>
			<div class="divide-y divide-slate-100 rounded bg-white ring-1 ring-slate-900 ring-opacity-5">
				<div class="space-y-1 p-2">
					<a
						role="menuitem"
						href={undefined}
						class="group flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 hover:text-slate-700"
					>
						<FlaskIcon />
						<span>Lab</span>
					</a>
					<a
						role="menuitem"
						href={undefined}
						class="group flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 hover:text-slate-700"
					>
						<InboxIcon />
						<span>Inbox</span>
					</a>
				</div>
				<div class="space-y-1 p-2">
					<a
						role="menuitem"
						href={undefined}
						class="group flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 hover:text-slate-700"
					>
						<AccountIcon />
						<span>Account</span>
					</a>
				</div>
				<div class="space-y-1 p-2">
					<form on:submit={() => false}>
						<button
							type="submit"
							role="menuitem"
							class="group flex w-full items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 hover:text-slate-700"
						>
							<LockIcon />
							<span>Logout</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	{/if}
	<!-- END Dropdown -->
</div>
