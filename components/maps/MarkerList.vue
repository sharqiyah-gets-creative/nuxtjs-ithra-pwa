<script setup>
import {  Marker } from 'vue3-google-map';

const props = defineProps({
    marker: {
        type: Object,
        required: true,
    }
});

</script>

<template>
    <Marker
        :options="{ position: { lat: marker.lat, lng:  marker.lng }, anchorPoint: 'CENTER' }">
    </Marker>
</template>
