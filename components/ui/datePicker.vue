<script lang="ts" setup>
	import VueDatePicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css';

	defineProps(['label']);

	const dateValue = ref<any>('');
	const datePickerRef = ref<any>(null);

	onMounted(() => {
		const datePickerElement = datePickerRef.value.$el;
		console.log('datePickerElement', datePickerElement);

		datePickerElement.addEventListener('click', () => {
			console.log('datePickerElement clicked');
			datePickerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	});

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

	const customPosition = () => ({ top: 0, left: 0 });

	const scroll = () => {
		console.log('scroll');
		const datePickerElement = datePickerRef.value.$el;
		console.log('datePickerElement', datePickerElement);
		datePickerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const emit = defineEmits(['update:dateValue']);

	watch(dateValue, (newVal) => {
		console.log('dateValue', newVal);
		emit('update:dateValue', newVal);
	});
</script>

<style lang="scss">
	.dp-custom-input {
		@apply rounded-md px-3.5 py-2.5 shadow-sm bg-white text-gray-900  ring-1 ring-inset ring-gray-300;
        &:focus {
            @apply outline-none ring-2 ring-primary-500;
        }
        &::placeholder {
            @apply text-right;
        }
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
			ref="datePickerRef"
			teleport-center
			vertical
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
