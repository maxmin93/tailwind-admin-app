<script>
	import { BookOpen } from 'lucide-svelte';
	import { faker } from '@faker-js/faker/locale/ko';
</script>

<header class="container mt-10 h-full items-center p-4 lg:mt-4 lg:flex">
	<div class="w-full">
		<h1 class="text-4xl font-bold lg:text-6xl">
			Hello,
			<span class="text-green-700">SvelteKit &plus; TailwindCSS</span>
		</h1>
		<div class="my-4 h-2 w-44 bg-green-700"></div>
		<p class="mb-10 text-xl">{faker.lorem.paragraph(5)}</p>
		<button
			class="hover:bg-primary/90 inline-flex items-center rounded bg-primary px-4 py-2 text-2xl font-medium text-primary-foreground shadow"
		>
			<BookOpen size="2rem" />
			<span class="ml-2">Learn more</span>
		</button>
	</div>
</header>
