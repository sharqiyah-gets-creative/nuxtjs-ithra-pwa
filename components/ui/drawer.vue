<script lang="ts" setup>
	defineProps(['id', 'title', 'contentClass']);
</script>
<template>
	<!-- drawer component -->
    <div
        :id="id"
        class="flex flex-col
            fixed bottom-0 left-0 right-0 z-50 
            max-h-screen min-h-[50%] max-w-xl w-full mx-auto  
            rounded-lg shadow
            overflow-y-auto 
            transition-transform 
            translate-y-full 
            bg-white dark:bg-gray-800"
        tabindex="-1"
        :ariaLabelledby="`${id}-label`"
    >
        <div class="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 relative" :data-drawer-toggle="id">
            <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            <h5 v-if="title"  class="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium">
                <span>{{ title }}</span>
            </h5>
        </div>

        <div class="content flex-1 p-4" :class="contentClass">
            <slot />
        </div>
    </div>
</template>
