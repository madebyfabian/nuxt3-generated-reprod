<template>
	<div>
		<p>This piece of text is inside the <code>error.vue</code></p>
		<p>
			As you can see, the <code>layouts/default.vue</code> is not used, the
			header is missing!
		</p>
		<pre>these props are cool to get some info: {{ props }}</pre>
		<button @click="handleError">Go home</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		error: Object,
	})

	const handleError = () => clearError({ redirect: '/' })
</script>
