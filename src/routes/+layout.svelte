<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg' 
	
	import Test from './Test.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

	<Test />


<!-- {@render children?.()} -->
