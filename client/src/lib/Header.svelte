<script lang="ts">
	function handleAnchorClick(event: any) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace("#", "")
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor!.offsetTop,
			behavior: "smooth"
		})
	}
</script>

<header class="fixed z-10 w-full px-16 mt-10">
	<nav class="flex items-center justify-between px-10 py-5 rounded-full shadow-md bg-accent">
		<a href="/"><img src="logo.svg" alt="Bodhi logo" /></a>
		<ul class="flex items-center gap-6 text-lg font-bold text-primary">
			<li><a class="hover:underline" on:click={handleAnchorClick} href="#surf">Surf</a></li>
			<li><a class="hover:underline" on:click={handleAnchorClick} href="#yoga">Yoga</a></li>
			<li>
				<a class="hover:underline" on:click={handleAnchorClick} href="#instructors">Instructors</a>
			</li>
			<!-- <li><a class="hover:underline" href="#about">About</a></li> -->
			<!-- <li><a class="hover:underline" href="#contact">Contact</a></li> -->
			<li><a href="/book" class="px-6 py-3 rounded-full text-accent bg-primary">Book</a></li>
		</ul>
	</nav>
</header>
