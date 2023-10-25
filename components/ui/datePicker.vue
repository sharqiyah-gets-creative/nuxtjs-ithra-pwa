<script lang="ts" setup>
	import VueDatePicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css';

	defineProps(['label']);

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
		console.log('dateValue', newVal);
		emit('update:dateValue', newVal);
	});

    // min date is october 20
    const min_date = new Date(2023, 9, 20);
    // max is april 2024
    const max_date = new Date(2024, 3, 30);
</script>

<style lang="scss">
	.dp-custom-input {
		@apply rounded-md py-2 shadow-sm bg-white text-gray-900  ring-1 ring-inset ring-gray-300;
        padding-inline-start: var(--dp-input-icon-padding);
        &:focus {
            @apply outline-none ring-2 ring-primary-500;
        }
        &::placeholder {
            @apply text-right;
        }
	}
    
    .dp__month_year_row, .dp__calendar_row, .dp__calendar_header{
        @apply flex-row-reverse;
    }

    .dp--tp-wrap{
        @apply hidden;
    }
    .dp__inner_nav .dp__icon{
        @apply rotate-180;
    }

	@media (prefers-color-scheme: dark) {
        .dp-custom-input{
            @apply bg-gray-900 text-white ring-gray-700;
            &:focus{
                @apply ring-primary-400
            }
        }
	}
</style>

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
