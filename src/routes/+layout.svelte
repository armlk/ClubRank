<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import Page from './+page.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen w-screen flex-col justify-between bg-gray-800">
	<NavBar /><Page /><Footer />
</div>

<!-- {@render children?.()} -->
