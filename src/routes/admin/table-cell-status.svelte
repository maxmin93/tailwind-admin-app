<script lang="ts">
	import { tv } from 'tailwind-variants';
	const status = tv({
		base: 'inline-block rounded-full border px-2 py-1 text-xs font-semibold leading-4',
		variants: {
			color: {
				completed: 'border-success text-success',
				proceeding: 'border-info text-info',
				pending: 'border-warning bg-warning/50 text-error'
			}
		}
	});
	export let value: string;
</script>

<div class={status({ color: value.toLowerCase() })}>
	{value}
</div>
