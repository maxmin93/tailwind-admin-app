<script>
	import LogoIcon from '$lib/assets/icons/logo-icon.svelte';
</script>

<div class="flex items-center">
	<!-- Logo -->
	<a
		href={undefined}
		class="text-md group inline-flex items-center gap-1 font-bold tracking-wide text-foreground hover:text-indigo-600 active:text-slate-700 sm:text-lg"
	>
		<!-- Logo SVG -->
		<!-- <LogoIcon /> 은 고정 렌더링, svelte:component 는 동적 렌더링 차이 -->
		<svelte:component this={LogoIcon} />
		<!-- /Logo SVG -->
		<span>TailAdmin</span>
	</a>
	<!-- END Logo -->
</div>
