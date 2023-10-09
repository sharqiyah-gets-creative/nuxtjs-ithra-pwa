<script setup lang="ts">

let eventsArray: any = ref([]);

onMounted(async () => {
    const nuxtApp = useNuxtApp();
    const config = nuxtApp.$config;
    const { events } = await getEvents(config);
    
    events.forEach((event) => {
        eventsArray.value.push(event);
    });
    
    console.log(eventsArray)
});

</script>

<template>
    <section id="events" class="py-4">
        <UContainer class="space-y-8">
            <eventsEvent 
            v-if="eventsArray.length > 0"
            v-for="event in eventsArray"
            :key="event.id" 
            :name="event.title" 
            :location="event.location"
            :timing="event.timing" 
            />

            <div v-else class="text-center">
                <UCard loading :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }">
                    <h2 class="text-3xl font-black">جاري جلب الفعاليات</h2>
                </UCard> 
            </div>
        </UContainer>
    </section>
</template>