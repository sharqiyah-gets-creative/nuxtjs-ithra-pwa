<script lang="ts" setup>
    import { initFlowbite } from 'flowbite'
	defineProps(['id', 'title', 'contentClass']);
    onMounted(() => {
        initFlowbite();
        console.log('components/ui/drawer.vue', 'mounted');
    });
</script>
<template>
	<!-- drawer component -->
    <div
        :id="id"
        class="standalone-bottom-padding flex flex-col
            fixed bottom-0 left-0 right-0 z-50 
            h-auto min-h-content max-w-xl w-full mx-auto  
            rounded-lg shadow
            overflow-y-auto 
            transition-transform 
            translate-y-full 
            bg-white dark:bg-indigo-950"
        tabindex="-1"
        :ariaLabelledby="`${id}-label`"
    >
        <div class="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 relative" :data-drawer-toggle="id">
            <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-600 rounded-lg top-3 left-1/2 dark:bg-white"></span>
            <h5 v-if="title" class="inline-flex justify-center text-base text-gray-800 dark:text-white font-medium">
                <span>{{ title }}</span>
            </h5>
        </div>

        <div class="content flex-1 p-4" :class="contentClass">
            <slot />
        </div>
    </div>
</template>
