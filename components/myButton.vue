<template>
	<button
		:class="`py-2.5 px-5 rounded-lg border focus:outline-none font-light text-center text-base w-full flex items-center justify-start ${classes}`">
		<UIcon v-if="icon" class="me-2" :name="icon" />
		<span>{{ title }}</span>
	</button>
</template>

<script lang="ts" setup>
	const props = defineProps(['color', 'title', 'icon']);
    if (!props.color) props.color = 'blue';
    
    const classes = computed(() => {
        return `
            text-${props.color}-100 
            bg-${props.color}-700
            dark:bg-${props.color}-400 
            dark:text-${props.color}-900
            dark:border-${props.color}-600 
            dark:hover:text-${props.color} 
            dark:hover:bg-${props.color}-700 
            `
    })

</script>
