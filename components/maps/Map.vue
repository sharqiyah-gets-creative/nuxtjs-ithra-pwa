<script setup>
import { GoogleMap, MarkerCluster } from 'vue3-google-map';

const locations = ref({
    FCB: {
        id: 'FCB',
        headline: 'FC Bayern München',
        text: 'Bayern München is the most successful soccer club in Germany. In the german Bundesliga their current rank is #1. Add some more text for this item to make it look bigger',
        lat: 48.21888549557031,
        lng: 11.625109549171704
    },
    SCF: {
        id: 'SCF',
        headline: 'SC Freiburg',
        text: 'SC Freiburg is also a german soccer club from the 1. Bundesliga in Germany. In the german Bundesliga their current rank is #2. Add some more text for this item to make it look bigger',
        lat: 48.021196964093434,
        lng: 7.82996300258625
    },
    RBL: {
        id: 'RBL',
        headline: 'Red Bull Leipzig',
        text: 'Red Bull Leipzig is a very good soccer club as well. They are sponsered by Red Bull I guess. In the german Bundesliga their current rank is #3. Add some more text for this item to make it look bigger',
        lat: 51.34762220651972,
        lng: 12.35519705573161
    },
    FCUB: {
        id: 'FCUB',
        headline: 'Union Berlin',
        text: 'This is a soccer club from Berlin. I dont know anything about soccer but here is more text. In the german Bundesliga their current rank is #5. Add some more text for this item to make it look bigger',
        lat: 52.45755304910101,
        lng: 13.568600380052235
    },
    BVB: {
        id: 'BVB',
        headline: 'BVB Borussia Dortmund',
        text: 'BVB is also pretty good soccer club right? They are colored in yellow and black and I thats all I know. In the german Bundesliga their current rank is #6. Add some more text for this item to make it look bigger',
        lat: 51.492787217050754,
        lng: 7.452501674962833
    }
});

const styles = ref([
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "32"
            },
            {
                "lightness": "-3"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "1.18"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-70"
            },
            {
                "lightness": "14"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "-14"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": "12"
            }
        ]
    }
]);

const zoom = ref(9);

const center = ref({ lat: 26.3570737, lng: 50.1100591 })

function zoomEvent(item) {
    center.value = { lat: item.lat, lng: item.lng };
    zoom.value = 15;
}

const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]



</script>
<template>
    <ClientOnly>
        <GoogleMap 
        api-key="AIzaSyBec3924PjZNJnrOv4wW5mjS1hESAEXFYo" 
        class="rounded-xl text-xs overflow-hidden aspect-video w-full h-[25vh] md:h-[50vh] relative" 
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

        <!-- 
            <UAccordion :items="items" />

        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div v-for="marker in locations">
                <div @click="zoomEvent(marker)">
                    <Accordion :marker="marker" />
                </div>
            </div>
        </div>
        -->
    </ClientOnly>
</template>
