<script lang="ts" setup>
	defineProps(['title', 'icon', 'link']);
</script>

<template>
	<NuxtLink
		:to="link"
        safe-area-inset-bottom
		class="py-3 px-5 inline-flex flex-col items-center justify-center text-slate-700 text-opacity-40 dark:text-opacity-40 dark:text-gray-200 transition-colors duration-300"
		activeClass="!text-opacity-100 !dark:text-opacity-100">
		<UIcon class="text-2xl" :name="icon" />
		<span class="text-xs">{{ title }}</span>
	</NuxtLink>
</template>
