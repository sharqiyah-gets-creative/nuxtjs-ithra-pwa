<template>
  <div class="flex justify-start items-start">
    <UIcon class="me-3" :name="icon" color="gray" aria-label="Theme" />
    <span class="inline-block">
        {{ title }}
        <small v-if="description" class="text-slate-400 sm block">{{ description }}</small>
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
  icon: String
})
</script>


