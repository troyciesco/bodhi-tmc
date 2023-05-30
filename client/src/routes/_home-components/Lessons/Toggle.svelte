<script lang="ts">
	import { classNames } from "$lib/utils"

	export let choice: "surf" | "yoga"
</script>

<div class="flex items-center border-2 rounded-full border-sea">
	<button
		class={classNames(
			"rounded-l-full py-4 px-10 heading-sm",
			choice === "surf" ? "bg-sea text-sand" : "bg-sand text-sea"
		)}
		on:click={() => (choice = "surf")}>Surf</button
	>
	<button
		class={classNames(
			"rounded-r-full py-4 px-10 heading-sm",
			choice === "yoga" ? "bg-sea text-sand" : "bg-sand text-sea"
		)}
		on:click={() => (choice = "yoga")}>Yoga</button
	>
</div>
