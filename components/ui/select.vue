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
			class="  
            p-2.5 
            dark:focus:ring-blue-500

            block w-full 
            opacity-100 
            
            rounded-lg 
            border-solid 
            text-sm 
            text-vtd-secondary-700 
            placeholder-vtd-secondary-400 
            transition-colors bg-white 
            border border-vtd-secondary-300 
            focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none 
            
            dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 
            dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 
            dark:focus:ring-opacity-20

            
            
            
            
            ">
			<option selected>{{ placeholder }}</option>
			<option v-for="option of options">{{ option }}</option>
		</select>
	</div>
</template>
