<script setup lang="ts">
import { useCommonStore } from '~/store/common';

const { lastColor, setLastColor } = useCommonStore();

let color = getEventHeaderClass();

// if the generated color is the same as the previous one in the store, generate another
while (color === lastColor) {
  color = getEventHeaderClass();
}

setLastColor(color);

defineProps({
  name: {
    type: String,
    required: true,
  },
  timing: {
    type: String,
  },
  location: {
    type: String,
  },
});
</script>

<template>
  <div class="w-full text-slate-900 rounded-xl overflow-hidden shadow-md">
    <div :class="`${color}`" class="p-2 px-4 text-lg font-bold">{{ name }}</div>
    <div class="p-2 px-4 bg-white">
      <ul class="space-y-1 font-light text-base">
        <li class="flex justify-start items-center">
          <UIcon class="me-2" name="i-heroicons-clock" />{{ timing }}
        </li>
        <li class="flex justify-start items-center">
          <UIcon class="me-2" name="i-heroicons-map-pin-solid" />{{ location }}
        </li>
      </ul>
    </div>
  </div>
</template>
