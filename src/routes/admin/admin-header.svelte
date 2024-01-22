<script>
	import { ModeToggle } from '$lib/components/ui';
	import { dropdownOpen, mobileNavOpen } from './open-handlers';
	import { setContext } from 'svelte';
	setContext('dropdownOpen', dropdownOpen);
	setContext('mobileNavOpen', mobileNavOpen);

	import HeaderLeftSection from './header-left-section.svelte';
	import HeaderMobileNavButton from './header-mobile-nav-button.svelte';
	import HeaderMobileNavMenu from './header-mobile-nav-menu.svelte';
	import HeaderUserDropdown from './header-user-dropdown.svelte';
	import HeaderRightToolbar from './header-right-toolbar.svelte';
</script>

<header id="page-header" class="z-1 flex flex-none items-center">
	<div class="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
		<div class="flex justify-between border-b-2 border-slate-200/50 py-6">
			<!-- Left Section -->
			<HeaderLeftSection />
			<!-- END Left Section -->

			<!-- Right Section -->
			<div class="flex items-center gap-1 lg:gap-5">
				<!-- Header Navigation -->
				<HeaderRightToolbar />
				<!-- END Header Navigation -->

				<!-- User Dropdown -->
				<HeaderUserDropdown />
				<!-- END User Dropdown -->

				<ModeToggle />

				<!-- Toggle Mobile Navigation -->
				<HeaderMobileNavButton />
				<!-- END Toggle Mobile Navigation -->
			</div>
			<!-- END Right Section -->
		</div>

		<!-- Mobile Navigation -->
		{#if $mobileNavOpen}
			<HeaderMobileNavMenu />
		{/if}
		<!-- END Mobile Navigation -->
	</div>
</header>
