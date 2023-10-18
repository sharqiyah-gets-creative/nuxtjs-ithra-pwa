<script setup lang="ts">
import { GoogleMap, MarkerCluster, Marker } from "vue3-google-map";
import mapStyles from "@/assets/maps/styles.json";
import { useUserStore } from "~/store/user";

const styles = ref(mapStyles);

const zoom = ref(9);

// will be changed to get value from store for user location
const store = useUserStore();
const center = ref(store.position);

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
