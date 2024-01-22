<script>
	import HeartIcon from '$lib/assets/icons/heart-icon.svelte';
</script>

<footer id="page-footer" class="flex grow-0 items-center">
	<div class="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
		<div
			class="flex flex-col space-y-2 border-t-2 border-slate-200/50 py-6 text-center text-sm font-medium text-slate-600 md:flex-row md:justify-between md:space-y-0 md:text-start"
		>
			<div>© <span class="font-semibold">tailadmin</span></div>
			<div class="inline-flex items-center justify-center">
				<span>Crafted with</span>
				<HeartIcon />
				<span
					>by
					<a
						class="font-medium text-indigo-600 transition hover:text-indigo-700"
						href="https://pixelcave.com"
						target="_blank">pixelcave</a
					></span
				>
			</div>
		</div>
	</div>
</footer>
