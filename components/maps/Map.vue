<script setup>
import { GoogleMap, MarkerCluster } from 'vue3-google-map';
import mapStyles from '@/assets/maps/styles.json'
const locations = ref({});

const styles = ref(mapStyles);

const zoom = ref(9);

const center = ref({ lat: 26.3570737, lng: 50.1100591 })

const config = useRuntimeConfig();

</script>
<template>
    <ClientOnly>
        <GoogleMap 
        :api-key="config.public.GOOGLE_API_KEY" 
        class="aspect-video w-full h-[25vh] md:h-[50vh] relative" 
        :center="center" 
        :zoom="zoom" 
        :styles="styles"
        :control-size=20
        >
            <MarkerCluster :options="{ position: center }">
                <div v-for="marker in locations">
                    <MapsMarkerList :marker="marker" />
                </div>
            </MarkerCluster>
        </GoogleMap>

    </ClientOnly>
</template>
