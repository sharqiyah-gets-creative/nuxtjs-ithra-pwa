<script lang="ts" setup>
	import VueTailwindDatepicker from 'vue-tailwind-datepicker';
	const dateValue = ref<string | [Date, Date]>('');
    defineProps(['label']);

	watch(dateValue, (newVal) => {
		if (typeof newVal === 'string') emit('update:dateValue', newVal);
	});
	const emit = defineEmits(['update:dateValue']);
</script>
<template>
    <div>
        <label for="date-picker" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">{{ label }}</label>
        <vue-tailwind-datepicker 
        id="date-picker" 
        dir="ltr" 
        :formatter="{ date: 'MMM/DD/YYYY', month: 'MMM' }" 
        as-single 
        placeholder="اختر تاريخ" v-model="dateValue" />
    </div>
	
</template>
