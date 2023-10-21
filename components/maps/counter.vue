<script lang="ts" setup>
    defineProps(['title', 'value'])
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-xl font-bold leading-none">{{ value }}</div>
    <div class="text-base font-light leading-none">{{ title }}</div>
</div>
</template>

