<script lang="ts" setup>
	const props = defineProps(['color', 'title', 'icon', 'outline']);
	const color = ref(props.color || 'blue');
    const outline = ref(props.outline || false);

    // if outline is true, then we need to add outline to the button and bg-transparent
    // if outline is false, then we need to add bg-color and text-color
    const classes = computed(() => {
        if (outline.value) {
            return `
                bg-transparent
                border-${color.value}-700 border
                text-${color.value}-700
                hover:bg-${color.value}-700
                hover:${color.value}-900
            `;
        } else {
            return `
                text-${color.value}-100
                bg-${color.value}-700
                dark:bg-${color.value}-400 
                dark:text-${color.value}-900
                dark:hover:text-${color.value} 
                dark:hover:bg-${color.value}-700 
            `;
        }
    });

</script>

<template>
	<button
		:class="`
            py-2.5 px-5 
            rounded-lg font-normal text-center text-base w-full flex items-center justify-start ${classes}`">
		<UIcon v-if="icon" class="me-2" :name="icon" />
		<span>{{ title }}</span>
	</button>
</template>
