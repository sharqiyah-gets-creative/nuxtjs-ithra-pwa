<template>
    <header id="title" class="flex-none sticky top-0 z-30 md:px-0 py-4 standalone:pt-6" :class="additional_classes">
      <UContainer class="flex justify-between">
        <h1 class="text-3xl font-black">
          {{ title }}
          <p class="block text-lg font-light">{{ description }}</p>
        </h1>
        <NavsSide />
      </UContainer>
    </header>
</template>

<script setup lang="ts">
defineProps(["title", "description", "additional_classes"])
</script>
