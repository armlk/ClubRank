<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import clubRankLogo from '$lib/assets/club-rank-logo.png';
</script>

<NavigationMenu.Root class="z-10 flex w-full justify-center">
	<NavigationMenu.List class="items-cener flex w-full list-none justify-center py-5">
		<NavigationMenu.Item>
			<NavigationMenu.Link href="/" class="transition-all hover:brightness-75">
				<img class="w-10" src={clubRankLogo} alt="Club Rank Logo" />
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item
			><NavigationMenu.Link
				class="rounded-md px-5 py-2 text-white transition-all hover:bg-gray-700/50"
				href="register">Sign Up</NavigationMenu.Link
			></NavigationMenu.Item
		>
	</NavigationMenu.List>
</NavigationMenu.Root>
