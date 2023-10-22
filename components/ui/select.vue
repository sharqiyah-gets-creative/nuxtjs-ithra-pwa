<script lang="ts" setup>
	const props = defineProps(['id', 'label', 'options', 'placeholder']);
    const selected = ref<string | undefined>(props.placeholder);
    const emit = defineEmits(['update:dateValue']);
    watch(selected, (newVal) => {
        if (typeof newVal === 'string') emit('update:dateValue', newVal);
    });
    
</script>
<template>
	<div>
		<label :for="id" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">{{ label }}</label>
		<select 
			:id="id" v-model="selected" 
			class="bg-white 
            border  border-solid border-gray-300 
            text-gray-900 text-base 
            rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 
            block w-full 
            p-2.5 
            dark:bg-gray-800 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option selected>{{ placeholder }}</option>
			<option v-for="option of options">{{ option }}</option>
		</select>
	</div>
</template>
