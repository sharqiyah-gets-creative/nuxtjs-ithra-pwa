<script setup lang="ts">
import { GoogleMap, MarkerCluster, Marker } from "vue3-google-map";
import mapStyles from "@/assets/maps/styles.json";

const styles = ref(mapStyles);

const zoom = ref(9);

const center = ref({ lat: 26.3570737, lng: 50.1100591 });

const config = useRuntimeConfig();

defineProps(['locations'])

</script>
<template>
  <ClientOnly>
    <GoogleMap
      :api-key="config.public.GOOGLE_API_KEY"
      class="w-full h-[25vh] md:h-[50vh] relative"
      :center="center"
      :zoom="zoom"
      :styles="styles"
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
