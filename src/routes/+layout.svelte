<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import Page from './+page.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-screen w-screen bg-gray-800"><NavBar /><Page /></div>

<!-- {@render children?.()} -->
