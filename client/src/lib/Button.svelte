<script lang="ts">
	import { classNames } from "./utils"

	// export let text: string
	export let className: string = ""
</script>

<button class={classNames("px-6 py-3 rounded-full heading-sm text-sand bg-sea", className)}
	><slot /></button
>
