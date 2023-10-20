<script setup lang="ts">
	import { GoogleMap, MarkerCluster, Marker } from 'vue3-google-map';
	import mapStyles from '@/assets/maps/styles.json';

    const { public: { GOOGLE_API_KEY } } = useRuntimeConfig();

    const { getPosition, } = useUserStore();

    const mapRef = ref(null);

    const DEFAULT_ZOOM = ref(9);

	console.log('maps/map.vue', 'center to be set on map', toRaw(getPosition));

	const props = defineProps(['events', 'specialClass', 'responsive_map']);

    const local_events : IEvent[] = props.events;
    
    console.log('maps/map.vue', 'local_locations', local_events)

</script>
<template>
	<ClientOnly>
		<GoogleMap
			ref="mapRef"
			:api-key="GOOGLE_API_KEY"
			:class="specialClass"
			:center="getPosition"
			:zoom="DEFAULT_ZOOM"
			:styles="mapStyles"
			:control-size="20"
			:street-view-control="false"
			:map-type-control="false"
			:gesture-handling="responsive_map || 'cooperative'">

			<MarkerCluster>
				<MapsMarkerList v-for="(location, index) in local_events" :marker="location" :key="index" />
			</MarkerCluster>
		</GoogleMap>
	</ClientOnly>
</template>
