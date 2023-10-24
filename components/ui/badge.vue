<script lang="ts" setup>
	const props = defineProps(['color', 'label']);

    const color = ref(props.color);
    if (!color.value) color.value = 'blue';

	const bg_color = `bg-${color.value}-100`;
	const text_color = `text-${color.value}-800`;
	const dark_bg_color = `dark:bg-${color.value}-900`;
	const dark_text_color = `dark:text-${color.value}-300`;

	const comnbined_classes = `${bg_color} ${text_color} ${dark_bg_color} ${dark_text_color}`;
</script>

<template>
	<span :class="`inline text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-opacity-60 ${comnbined_classes}`">{{ label }}</span>
</template>
