<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import clubRankLogo from '$lib/assets/club-rank-logo.png';
</script>

<NavigationMenu.Root class="z-10 flex">
	<NavigationMenu.List class="flex w-screen list-none items-center justify-between px-10 py-5">
		<NavigationMenu.Item class="flex items-center space-x-7">
			<NavigationMenu.Link href="/" class="transition-all hover:brightness-75">
				<img class="w-10" src={clubRankLogo} alt="Club Rank Logo" />
			</NavigationMenu.Link>
			<NavigationMenu.Link
				href="/clubs"
				class="text-white underline decoration-transparent transition-all hover:text-white/75 hover:decoration-purple-400"
			>
				Clubs
			</NavigationMenu.Link>
			<NavigationMenu.Link
				href="/"
				class="text-white underline decoration-transparent transition-all hover:text-white/75 hover:decoration-purple-400"
			>
				Rankings
			</NavigationMenu.Link>
			<NavigationMenu.Link
				href="/"
				class="text-white underline decoration-transparent transition-all hover:text-white/75 hover:decoration-purple-400"
			>
				Contact Us
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="space-x-3">
			<NavigationMenu.Link
				class="space-x-3 rounded-md border border-gray-600 bg-purple-500/10 px-4 py-2 pr-[10vw] text-white/85 transition-all duration-300 hover:cursor-pointer hover:border-gray-500 hover:bg-purple-800/10 hover:pr-[20vw]"
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
