<template>
	<div>
		<p>This piece of text is inside the <code>error.vue</code></p>
		<p>This error template template does not uses any layouts at all.</p>
		<pre>these props are cool to get some info: {{ props }}</pre>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		error: Object,
	})
</script>
