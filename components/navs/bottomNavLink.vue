<template>
  <NuxtLink
        :to="link"
        class="
        pt-2 px-5 standalone:pb-6 
        inline-flex flex-col items-center justify-center 
        text-slate-800
        text:bg-purple-300 

        dark:text-gray-200 
        dark:hocus:bg-purple-900
        transition-colors duration-300
        "
      >
        <UIcon class="text-3xl" :name="icon" />
        <span class="text-sm">{{ title }}</span>
      </NuxtLink>
</template>

<script lang="ts" setup>
defineProps(["title", "icon", "link"])
</script>


