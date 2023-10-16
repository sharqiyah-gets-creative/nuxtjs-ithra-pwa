<template>
  <div>
    <!-- drawer init and toggle -->
    <div class="text-center">
      <button class="
      overflow-y-auto text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
      py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
      focus:outline-none dark:focus:ring-blue-800" type="button" 
      data-drawer-target="drawer-top-example" 
      data-drawer-show="drawer-top-example" 
      data-drawer-placement="bottom" 
      aria-controls="drawer-top-example"
      data-drawer-backdrop="true"
      >
      Show top drawer
      </button>
    </div>

    <!-- drawer component -->
    <div id="drawer-top-example" class="fixed bottom-0 left-0 right-0 z-50 w-full p-4 max-h-screen min-h-[50%] rounded-lg
    overflow-y-auto transition-transform translate-y-full bg-white dark:bg-gray-800 flex flex-col" tabindex="-1" aria-labelledby="drawer-top-label">
        
        <h5 id="drawer-top-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <UIcon class="me-2" name="i-heroicons-clock" />
          <span class="title">Top drawer</span>
        </h5>
        
        
        <button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" 
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 left-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <UIcon name="i-heroicons-user" />
          <span class="sr-only">Close menu</span>
      </button>
      <div class="content flex-1">
        The Beef
      </div>

      <div class="actions">
          <a href="#" class="inline-flex w-full justify-center items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <span>Get access</span> 
            <UIcon name="i-heroicons-user" class="ms-2" />
          </a>
      </div>
        
    </div>


  </div>
</template>

<script lang="ts" setup>
import { initFlowbite } from 'flowbite';

onMounted(async () => {
  console.log('Drawer vue mounted')
  
  initFlowbite();

});

</script>


