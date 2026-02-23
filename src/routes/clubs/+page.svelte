<script>
	let { data } = $props();
</script>

<ul>
	{#each data.clubs as club (club.id)}
		<li class="text-white">{club.name}</li>
	{/each}
</ul>
