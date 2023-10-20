<script setup lang="ts">
	import { InfoWindow, Marker } from 'vue3-google-map';

	const props = defineProps(['marker']);

    const local_marker  = props.marker;

    const markerOptions = {
        position: {
            lat: parseFloat(local_marker[0].ll?.split(',')[0]),
            lng: parseFloat(local_marker[0].ll.split(',')[1]),
        },
        
        anchorPoint: 'CENTER',
    };
    
</script>

<template>
	<Marker :options="markerOptions">
		<InfoWindow  :options="{}">
            <div class="p-1 space-y-1 text-slate-900">
                <span>بواسطة: <b class="font-bold block">{{ local_marker[0].entity }}</b></span>
                <h2 class="font-bold">الفعاليات: </h2>
                <b v-for="activity of local_marker" class="block">{{ activity.category }} <NuxtLink :to="`/event/${activity.id}`">(تفاصيل)</NuxtLink></b>
            </div>
			
		</InfoWindow>
	</Marker>
</template>