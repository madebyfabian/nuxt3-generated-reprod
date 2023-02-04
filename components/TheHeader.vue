<template>
	<header
		style="
			border-bottom: 1px solid gray;
			padding: 20px;
			background-color: #f7f7f8;
		"
	>
		<p>
			This is <code>TheHeader.vue</code>, which is used inside
			<code>layouts/default.vue</code> You have currently these todos (loaded
			from an API do demonstrate <code>nuxt generate</code>):
		</p>
		<pre
			style="
				max-height: 200px;
				overflow: scroll;
				max-width: 500px;
				background-color: lightgray;
			"
			>{{ data }}</pre
		>
	</header>
</template>

<script setup lang="ts">
	const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos')
</script>
