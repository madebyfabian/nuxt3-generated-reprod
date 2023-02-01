<template>
	<div>
		<p>Custom error template:</p>
		<pre>{{ props }}</pre>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		error: Object,
	})
</script>

<style scoped></style>
