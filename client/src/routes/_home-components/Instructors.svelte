<script lang="ts">
	import { classNames } from "$lib/utils"

	const instructors = [
		{
			firstName: "Jon",
			lastName: "Doe",
			description:
				"Instructor is a seasoned surf instructor who has seen some of the biggest waves in oceans all around the world. Pura Vida.",
			image: "instructor-1.jpg"
		},
		{
			firstName: "Jane",
			lastName: "Smith",
			description:
				"Instructor is a seasoned surf instructor who has seen some of the biggest waves in oceans all around the world. Pura Vida.",
			image: "instructor-2.jpg"
		},
		{
			firstName: "Suzy",
			lastName: "Green",
			description:
				"Instructor is a seasoned surf instructor who has seen some of the biggest waves in oceans all around the world. Pura Vida.",
			image: "instructor-3.jpg"
		}
	]
</script>

<section id="instructors" class="py-24 bg-wet-sand">
	<div class="flex flex-col items-center">
		<h2 class="mb-6 text-center heading-2xl text-sea">Instructors</h2>
		<img class="mb-6" src="wave-orange.svg" alt="" />
		<p class="mb-10 body-xl">Meet our team of talented surf & yoga instructors</p>
	</div>
	<div class="flex items-center justify-center gap-8">
		{#each instructors as instructor, i}
			<div class="flex flex-col bg-sand w-96 rounded-[40px]">
				<div class="relative w-full h-80 rounded-t-[40px]">
					<img
						class="absolute object-cover w-full h-full rounded-t-[40px]"
						src={instructor.image}
						alt={`${instructor.firstName} ${instructor.lastName}`}
					/>
				</div>
				<div class="flex flex-col items-center px-20 py-8 text-center">
					<h3 class={classNames("mb-2 heading-lg", i % 2 === 0 ? "text-sea" : "text-golden-hour")}>
						{instructor.firstName}<br />{instructor.lastName}
					</h3>
					<p class="body-sm">{instructor.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
