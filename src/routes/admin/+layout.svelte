<script>
	import AdminFooter from './admin-footer.svelte';
	import AdminHeader from './admin-header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui';
	import HeaderDesktopNavMenu from './header-desktop-nav-menu.svelte';
	import { updateTheme } from '$lib/utils';
	import { config } from '$lib/config';
	$: updateTheme($config.theme);
</script>

<ModeWatcher />
<Toaster />

<!-- Page Container -->
<div
	id="page-container"
	class="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-background text-foreground"
>
	<!-- Page Header -->
	<AdminHeader />
	<!-- END Page Header -->

	<!-- Page Content -->
	<main id="page-content" class="flex max-w-full flex-auto flex-col">
		<div class="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
			<div class="grid grid-cols-1 md:gap-20 lg:grid-cols-12">
				<!-- Navigation -->
				<HeaderDesktopNavMenu />
				<!-- END Navigation -->

				<!-- Main Content -->
				<slot />
				<!-- END Main Content -->
			</div>
		</div>
	</main>
	<!-- END Page Content -->

	<!-- Page Footer -->
	<AdminFooter />
	<!-- END Page Footer -->
</div>
<!-- END Page Container -->
