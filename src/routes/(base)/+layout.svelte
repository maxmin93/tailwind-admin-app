<script>
	import { updateTheme } from '$lib/utils';
	import { config } from '$lib/config';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster, ModeToggle } from '$lib/components/ui';

	$: updateTheme($config.theme);
</script>

<ModeWatcher />
<Toaster />

<div class="relative flex min-h-screen flex-col" id="page">
	<!-- <SiteHeader /> -->
	<header
		class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container flex h-14 items-center">
			<ModeToggle />
		</div>
	</header>

	<!-- page -->
	<div class="flex-1">
		<slot />
	</div>
	<!-- <SiteFooter /> -->
</div>
