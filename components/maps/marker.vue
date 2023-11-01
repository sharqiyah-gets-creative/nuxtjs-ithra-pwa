<script setup lang="ts">
    import { InfoWindow, Marker } from 'vue3-google-map';
	const props = defineProps(['marker', 'responsive']);
    const isResponsive = ref(props.responsive || false);

    const local_marker  = props.marker;

    const markerOptions: google.maps.MarkerOptions = {
        clickable: isResponsive.value,
        position: {
            lat: parseFloat(local_marker[0].ll?.split(',')[0]),
            lng: parseFloat(local_marker[0].ll.split(',')[1]),
        },
        
    };

    let openedMarkerID: any = null;
    
    const openInfoWindow = (event: any) => {
        console.log('markerList.vue', 'openInfoWindow', event);
        if (openedMarkerID) {
            openedMarkerID.domEvent.view.close();
        }
        openedMarkerID = event;
    };
    
</script>

<template>
	<Marker @click="openInfoWindow" :options="markerOptions">
		<InfoWindow :options="{}">
            <div class="p-2 w-full space-y-1 text-slate-900">
                <span>بواسطة: <b class="font-bold block">{{ local_marker[0].entity }}</b></span>
                <h2 class="font-bold">الفعاليات: </h2>
                <b v-for="(activity, index) of local_marker" :key="index" class="flex justify-between"><span>{{ activity.category }}</span> <NuxtLink class="text-blue-600 underline" :to="`/event/${activity.id}`">(تفاصيل)</NuxtLink></b>
            </div>
		</InfoWindow>
	</Marker>
</template>