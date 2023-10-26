<script lang="ts" setup>
	import VueDatePicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css';

	defineProps(['label']);

    // min date is october 20
    const min_date = new Date(2023, 9, 20);
    // max is april 2024
    const max_date = new Date(2024, 3, 30);

	const dateValue = ref<any>('');

	const setDate = (value: Date) => {
		dateValue.value = format(value);
	};

	const format = (date: Date | '') => {
		if (!date) return '';
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${month}/${day}/${year}`;
	};

	const emit = defineEmits(['update:dateValue']);

	watch(dateValue, (newVal) => {
		emit('update:dateValue', newVal);
	});
</script>

<template>
	<div>
		<label for="date-picker" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">{{ label }}</label>

		<VueDatePicker
			:dark="$colorMode.preference === 'dark'"
            week-start="0" 
            :min-date="min_date"
            :max-date="max_date"
			teleport-center
			:format="format"
			@update:model-value="setDate"
			:model-value="dateValue"
			placeholder="اختر تاريخ"
			input-class-name="dp-custom-input"
			auto-apply
			dir="rtl">
		</VueDatePicker>
	</div>
</template>
