<script lang="ts">
	import { classNames } from "$lib/utils"

	const testimonials = [
		{
			title: "Bodhi helped me achieve my dream",
			content:
				"Willow's Forest Flow Yoga class was rejuvenating! The serene forest setting deepened my practice, and I left feeling recharged. Highly recommended!",
			name: "Thomas H.",
			avatarImage: "thomas.jpg"
		},
		{
			title: "A week of Bodhi yoga cleared my mind",
			content:
				"Willow's Forest Flow Yoga class was rejuvenating! The serene forest setting deepened my practice, and I left feeling recharged. Highly recommended!",
			name: "Thomas H.",
			avatarImage: "thomas.jpg"
		},
		{
			title: "Our family had a great time learning to surf",
			content:
				"Willow's Forest Flow Yoga class was rejuvenating! The serene forest setting deepened my practice, and I left feeling recharged. Highly recommended!",
			name: "Thomas H.",
			avatarImage: "thomas.jpg"
		},
		{
			title: "Our family had a great time learning to surf",
			content:
				"Willow's Forest Flow Yoga class was rejuvenating! The serene forest setting deepened my practice, and I left feeling recharged. Highly recommended!",
			name: "Thomas H.",
			avatarImage: "thomas.jpg"
		}
	]
</script>

<section class="px-16 py-16">
	<div class="flex flex-col items-center justify-center">
		<h2 class="mb-6 heading-xl text-sea">Testimonals</h2>
		<img class="mb-8" src="wave-green.svg" alt="" />
	</div>
	<div class="flex items-center gap-4">
		{#each testimonials as { title, content, name, avatarImage }, i}
			<div class="p-10 bg-wet-sand rounded-[40px]">
				<h3 class={classNames("heading-md mb-4", i % 2 === 0 ? "text-sea" : "text-golden-hour")}>
					{title}
				</h3>
				<p class="mb-4 body-md">{content}</p>
				<div class="flex items-center gap-2">
					<img class="object-cover w-12 h-12 rounded-full" src={avatarImage} alt={name} />
					<span class="heading-xs">{name}</span>
				</div>
			</div>
		{/each}
	</div>
</section>
