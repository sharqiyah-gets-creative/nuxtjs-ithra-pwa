<script setup lang="ts">
import { Timestamp } from "firebase/firestore";
import { useCommonStore } from "~/store/common";
import { IEvent } from "~/types";

const { lastColor, setLastColor } = useCommonStore();

let color = getEventHeaderClass();

// if the generated color is the same as the previous one in the store, generate another
while (color === lastColor) {
  color = getEventHeaderClass();
}

setLastColor(color);

defineProps({
  event: {
    type: Object as PropType<IEvent>,
    required: true,
  },
});




</script>

<template>
  <NuxtLink :to="`/event/${event.id}`" class="w-full text-slate-900 rounded-lg overflow-hidden shadow-md">
    <div :class="`${color}`" class="p-2 px-4 text-lg font-bold flex justify-between" >
      <span>{{ event.title }}</span>
      <div class="badges space-x-2 rtl:space-x-reverse">
        <UBadge variant="solid" color="black" v-for="(language, index) of event.language"
          :key="index" size="xs" :label="language" />
      </div>
    </div>
    <div class="p-2 px-4 bg-white">
      <ul class="space-y-1 font-light text-base">
        <li class="flex justify-start items-center space-x-2 rtl:space-x-reverse" >
          <UIcon name="i-heroicons-clock" />
          <time :datetime="event.start_time.toString()">{{ formatDate(event.start_time) }}</time>
          <b class="font-bold">إلى</b>
          <time :datetime="event.end_time.toString()">{{ formatDate(event.end_time) }}</time>
        </li>

        <li class="flex justify-start items-center">
          <UIcon class="me-2" name="i-heroicons-map-pin-solid" />{{ event.city }} - {{ event.area }}
        </li>

        <li class="flex justify-start items-center space-x-2 rtl:space-x-reverse" >
          <UIcon name="i-heroicons-user" />
          <span>{{ event.category }}</span>
          <span class="font-bold">بواسطة</span>
          <span>{{ event.entity }}</span>
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
