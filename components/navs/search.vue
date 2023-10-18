<template>
	<div>
		<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
		<div class="relative">
			<input
				type="search"
				id="default-search"
				class="block w-full p-2 ps-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="إبحث عن الفعاليات .."
				v-model="searchQuery"
				required />

			<button type="submit" class="absolute top-0 left-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-l-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				<UIcon name="i-mdi-search" />
				<span class="sr-only">Search</span>
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { useEventsStore } from '~/store/events';
	const store = useEventsStore();

	const searchQuery = ref('');

	watch(searchQuery, (value) => {
		console.log(value);
		store.setSearchKeywords(value);
	});
</script>
