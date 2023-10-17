<script setup lang="ts">
import { useEventsStore } from '~/store/events';
import { useUserStore } from '~/store/user';
import { storeToRefs } from 'pinia'
import { getPosition } from '~/utils/helpers';

const eventsStore = useEventsStore();
const userStore = useUserStore();

let { events, searchKeywords } = storeToRefs(eventsStore);

const getLocationPermission = await window.navigator.permissions.query({ name: 'geolocation' })
const { state } = await getLocationPermission;

const isLocationAllowed = () =>{
    if (state === 'granted') {
        return true
    } else if (state === 'prompt') {
        return true
    } else {
        return false
    }
}

if(isLocationAllowed()){
    const position: any = await getPosition({enableHighAccuracy: true});
    console.log('updating user position')
    userStore.setPosition({lat: position.coords.latitude, lng: position.coords.longitude})
}
else{
    console.log('location is not allowed')
    if(userStore.position){
        console.log('Last known position is', userStore.position)
    }
}

if(userStore.position){
    events = eventsStore.getEventsByPosition(userStore.position)
}

watch(searchKeywords, (value) => {
    console.log(value)
    // filter events array with events containing the search keywords as a title
    if (events.value) {
        events.value = events.value.filter((event: IEvent) => {
      return event.title.includes(value)
    })
  }
  
    
})

</script>

<template>
    <section id="events" class="py-4">
        <UContainer class="space-y-8">
            <EventsCard v-if="events.length > 0" v-for="event in events" :key="event.id" :event="event" />

            <div v-else class="text-center">
                <UCard loading :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }">
                    <h2 class="text-3xl font-black">جاري جلب الفعاليات</h2>
                </UCard> 
            </div>
        </UContainer>
    </section>
</template>