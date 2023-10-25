<script lang="ts" setup>
	import VueTailwindDatepicker from 'vue-tailwind-datepicker';
	const dateValue = ref<string | [Date, Date]>('');
    defineProps(['label']);

	watch(dateValue, (newVal) => {
		if (typeof newVal === 'string') emit('update:dateValue', newVal);
	});
	const emit = defineEmits(['update:dateValue']);

    function dDate(date:Date) {
        return date < new Date() || date > new Date(2024, 3, 1)
    }

</script>

<template>
    <div>
        <label for="date-picker" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">{{ label }}</label>

        <vue-tailwind-datepicker 
        id="date-picker" 
        dir="ltr" 
        class="placeholder:text-right"
        :disable-date="dDate"
        :formatter="{ date: 'MMM/DD/YYYY', month: 'MMM' }" 
        as-single 
        placeholder="اختر تاريخ" v-model="dateValue" />
    </div>
	
</template>
