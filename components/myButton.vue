<template>
  <Button class="
  py-2.5 px-5 rounded-lg 
  border border-gray-200 
  text-gray-900 
  bg-white 

  focus:outline-none 
  
  hover:bg-gray-100 
  hover:text-blue-700 

  dark:bg-gray-800 
  dark:text-gray-400 
  dark:border-gray-600 
  dark:hover:text-white 
  dark:hover:bg-gray-700

  font-light text-center text-base 
  w-full 
  
  flex items-center justify-start">
    <UIcon v-if="icon" class="me-2" :name="icon" />
    <span>{{ title }}</span>
  </Button>
</template>

<script lang="ts" setup>
defineProps(['title','icon'])
</script>


