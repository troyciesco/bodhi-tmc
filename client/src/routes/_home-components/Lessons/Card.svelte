<script lang="ts">
	import Button from "$lib/Button.svelte"
	import { classNames } from "$lib/utils"

	export let title: string
	export let time: string
	export let description: any
	export let price: number
	export let discountedPrice: number | null = null
	export let isMostPopular: boolean = false
</script>

<div
	class={classNames(
		"w-96 rounded-[40px] relative",
		isMostPopular ? "bg-gradient-to-b gradient-golden-sea" : "bg-wet-sand"
	)}
>
	<!-- <h3 class="mb-2 heading-lg text-sea"><slot name="title" /></h3>
	<span class="block mb-6 body-lg text-black-sand"><slot name="time" /></span>
	<p class="mb-6 body-md"><slot name="description" /></p> -->
	<div class="rounded-[36px] px-9 py-9 bg-wet-sand m-1">
		<h3 class="mb-2 heading-lg text-sea">{@html title}</h3>
		<span class="block mb-6 body-lg text-black-sand">{time}</span>
		<p class="mb-6 body-md">{@html description}</p>
		{#if discountedPrice}
			<span class="block mb-4 heading-lg text-sea"
				>${discountedPrice} <span class="line-through text-black-sand">${price}</span></span
			>
		{:else}
			<span class="block mb-4 heading-lg text-sea">${price}</span>
		{/if}
		<Button className="mb-6">Book now</Button>
		{#if isMostPopular}
			<div
				class="absolute text-white uppercase detail bottom-0 left-0 w-full py-4 text-center rounded-b-[40px] bg-golden-hour"
			>
				Most Popular
			</div>
		{/if}
	</div>
</div>
