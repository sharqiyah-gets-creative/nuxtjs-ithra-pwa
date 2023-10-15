<script setup lang="ts">
import { InfoWindow, Marker } from "vue3-google-map";

const props = defineProps({
  marker: {
    type: Object,
    required: true,
  },
});
computed(() => {
  console.log(props.marker);
});
</script>

<template>
  <Marker :options="{ ...marker, anchorPoint: 'CENTER' }">
    <InfoWindow :options="{ content: 'Hi' }">
      <b>{{ marker.content }}</b>
    </InfoWindow>
  </Marker>
</template>
