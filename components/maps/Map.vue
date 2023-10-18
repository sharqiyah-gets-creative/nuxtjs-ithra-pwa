<script setup lang="ts">
import { GoogleMap, MarkerCluster, Marker } from "vue3-google-map";
import mapStyles from "@/assets/maps/styles.json";

const DEFAULT_ZOOM = ref(9);

// will be changed to get value from store for user location
const store = useUserStore();

console.log('center to be set on map', toRaw(store.getPosition))

const config = useRuntimeConfig();

defineProps(['locations'])

</script>
<template>
  <ClientOnly>
    <GoogleMap
      :api-key="config.public.GOOGLE_API_KEY"
      class="w-full h-[20vh] md:h-[50vh] relative"
      :center="toRaw(store.getPosition)"
      :zoom="DEFAULT_ZOOM"
      :styles="mapStyles"
      :control-size="20"
      :street-view-control="false"
      :map-type-control="false"
      :gesture-handling="'cooperative'"
    >
      <MarkerCluster>
        <Marker v-for="(location, i) in locations" :options="{ position: location.position }" :key="i" />
      </MarkerCluster>
    </GoogleMap>
  </ClientOnly>
</template>
