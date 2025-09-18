<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import clubRankLogo from '$lib/assets/club-rank-logo.png';
</script>

<NavigationMenu.Root class="z-10 flex">
	<NavigationMenu.List class="flex w-screen list-none items-center justify-between px-10 py-5">
		<NavigationMenu.Item>
			<NavigationMenu.Link href="/" class="transition-all hover:brightness-75">
				<img class="w-10" src={clubRankLogo} alt="Club Rank Logo" />
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="space-x-3">
			<NavigationMenu.Link
				class="space-x-3 rounded-md border border-gray-600 bg-purple-500/10 px-4 py-2 text-white/85 transition-all hover:cursor-pointer hover:bg-purple-800/10"
				><span>🔍︎</span><span>Search</span>
			</NavigationMenu.Link>
			<NavigationMenu.Link
				class="rounded-md px-5 py-2 text-white transition-all hover:bg-gray-700/50"
				href="register">Sign In</NavigationMenu.Link
			><NavigationMenu.Link
				class="rounded-md border border-purple-400 px-5 py-2 text-white transition-all hover:bg-black/25"
				href="register">Sign Up</NavigationMenu.Link
			></NavigationMenu.Item
		>
	</NavigationMenu.List>
</NavigationMenu.Root>
