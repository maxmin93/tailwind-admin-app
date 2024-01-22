<script>
	import { twMerge } from 'tailwind-merge';
	const defaultClass = 'hi-solid hi-menu inline-block h-5 w-5';
</script>

<svg
	class={twMerge(defaultClass, $$props.class)}
	fill="currentColor"
	viewBox="0 0 20 20"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
		clip-rule="evenodd"
	></path>
</svg>
