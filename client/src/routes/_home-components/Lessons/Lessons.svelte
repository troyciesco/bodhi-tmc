<script lang="ts">
	import Card from "./Card.svelte"
	import Toggle from "./Toggle.svelte"

	$: choice = "surf" as "surf" | "yoga"
</script>

<section class="flex flex-col items-center justify-center py-24">
	<div class="grid items-center grid-cols-3 px-4 mx-auto max-w-7xl">
		<div class="flex flex-col items-start col-span-1 pr-10">
			<h2 class="mb-6 heading-2xl text-sea">Book Lessons</h2>
			<img class="mb-6" src="wave-orange.svg" alt="" />
			<p class="mb-6 body-lg max-w-prose">
				Limited space available. Act fast & secure your spot by booking your lesson today.
			</p>
			<Toggle {choice} />
		</div>
		<div class="flex flex-wrap col-span-2 gap-10">
			<!-- <Card price={120}>
			<svelte:fragment slot="title">Private Session</svelte:fragment>
			<svelte:fragment slot="time">120 minute session</svelte:fragment>
			<svelte:fragment slot="description"
				>One-on-one session suitable for surfers of all skill levels.</svelte:fragment
			>
		</Card> -->
			<Card
				title={`Private <br/>Session`}
				time="120 minute session"
				description="One-on-one session suitable for surfers of all skill levels."
				price={120}
			/>
			<Card
				title={`Private <br />Package`}
				time="5x 120 minute sessions"
				description={`5 private sessions.<br />Save 20%.`}
				price={600}
				discountedPrice={120}
				isMostPopular
			/>
			<Card
				title={`Group <br/>Session`}
				time="180 minute session"
				description="Group session (2-5 people) suitable for surfers of all skill levels."
				price={300}
			/>
			<Card
				title={`Group <br/>Package`}
				time="5x 180 minute sessions"
				description={`5 group sessions.<br />Save 20%.`}
				discountedPrice={1200}
				price={1500}
			/>
		</div>
	</div>
</section>
