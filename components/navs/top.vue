<template>
    <header id="title" class="md:px-0 py-4 standalone:pt-6">
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
defineProps(["title", "description"])
</script>
