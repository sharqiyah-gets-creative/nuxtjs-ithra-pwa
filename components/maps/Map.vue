<script setup lang="ts">
	import { GoogleMap, MarkerCluster, Marker } from 'vue3-google-map';
	import mapStyles from '@/assets/maps/styles.json';
	import { DEFAULT_CENTER_POINT } from '~/utils/helpers';

	const {
		public: { GOOGLE_API_KEY },
	} = useRuntimeConfig();

	const { getPosition } = useUserStore();

	const center = ref({ lat: DEFAULT_CENTER_POINT.lat, lng: DEFAULT_CENTER_POINT.lng });

	if (getPosition?.lat !== undefined && getPosition?.lng !== undefined) {
		center.value = { lat: getPosition.lat, lng: getPosition.lng };
	}

	const mapRef = ref(null);

	const DEFAULT_ZOOM = ref(9);

	console.log('maps/map.vue', 'center to be set on map', toRaw(center));

	const props = defineProps(['events', 'specialClass', 'responsive']);
    const isResponsive = ref(props.responsive || false);

	const local_events: IEvent[] = props.events;
    const boundsChanged = () => {
        console.log('maps/map.vue', 'boundsChanged');
    }

	console.log('maps/map.vue', 'local_locations', local_events);
</script>
<template>
	<ClientOnly>
		<GoogleMap
            :boundsChanged="boundsChanged"
			ref="mapRef"
			:api-key="GOOGLE_API_KEY"
			:class="specialClass"
			:center="center"
			:zoom="DEFAULT_ZOOM"
			:styles="mapStyles"
			:control-size="20"
			:street-view-control="false"
			:map-type-control="false"
			:gesture-handling="isResponsive ? 'cooperative': 'none'">
			<MarkerCluster >
				<MapsMarkerList :responsive="isResponsive" v-for="(location, index) in local_events" :marker="location" :key="index" />
			</MarkerCluster>
		</GoogleMap>
	</ClientOnly>
</template>
