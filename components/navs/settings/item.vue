<script lang="ts" setup>
    defineProps(['title', 'description', ]);

</script>
<template>
  <li class="flex justify-center items-center p-4 lg:py-6 space-x-4 rtl:space-x-reverse border-b border-b-gray-600 last:border-b-0">
    <div class="scale-125 leading-none">
      <slot name="right-icon" />
    </div>
    
    <div class="flex-1 flex flex-col space-y-2">
        <span class="leading-none text-gray-900 dark:text-gray-100">
          {{ title }}
        </span>
        <span class="text-base leading-none text-gray-500 dark:text-gray-400">
          {{ description }}
        </span>
    </div>

    <slot />

    <div class="leading-none">
        <slot name="left-icon" />
    </div>
  </li>
</template>

