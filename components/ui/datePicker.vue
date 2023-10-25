<script lang="ts" setup>
	import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

	const dateValue = ref<string | [Date, Date]>('');

    defineProps(['label']);

	watch(dateValue, (newVal) => {
		if (typeof newVal === 'string') emit('update:dateValue', newVal);
	});

	const emit = defineEmits(['update:dateValue']);

    function dDate(date:Date) {
        return date < new Date() || date > new Date(2024, 3, 1)
    }

    const format = (date: Date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }


</script>

<template>
    <div>
        <label for="date-picker" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">{{ label }}</label>

        <VueDatePicker 
            :format="format" 
            v-model="dateValue"
            placeholder="اختر تاريخ"
            class="placeholder:text-right"
            
            dir="ltr"
        >
        </VueDatePicker>

    </div>
	
</template>
