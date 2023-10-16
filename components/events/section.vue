<script setup lang="ts">
import { useEventsStore } from '~/store/events';
import { useUserStore } from '~/store/user';
import { storeToRefs } from 'pinia'

const eventsStore = useEventsStore();
const userStore = useUserStore();

let { events } = storeToRefs(eventsStore)

if(userStore.position){
    events = eventsStore.fetchEventsByPosition(userStore.position)
}

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