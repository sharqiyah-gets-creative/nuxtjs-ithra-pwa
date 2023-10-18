<script setup lang="ts">
import { useEventsStore } from "~/store/events";
import { storeToRefs } from "pinia";

const eventsStore = useEventsStore();
const { events } = storeToRefs(eventsStore);

const counters = {
    entitiesCount: eventsStore.getEventsEntitiesCount(),
    eventsCount: eventsStore.getEventsCount(),
    citiesCount: eventsStore.getEventsCitiesCount(),
}


</script>

<template>
  <section id="map" class="py-4">
    <UContainer>
      <UCard :ui="{ header: { padding: 'p-0 sm:p-0' } }">
        <template #header>
          <MapsMap :locations="events" />
        </template>
        <div class="grid grid-cols-3 divide-x divide-x-reverse">
          <div class="flex flex-col justify-center items-center">
            <div class="text-3xl font-bold">{{ counters.eventsCount }}</div>
            <div class="text-lg">فعالية</div>
          </div>

          <div class="flex flex-col justify-center items-center">
            <div class="text-3xl font-bold">{{ counters.entitiesCount }}</div>
            <div class="text-lg">جهة</div>
          </div>

          <div class="flex flex-col justify-center items-center">
            <div class="text-3xl font-bold">{{ counters.citiesCount }}</div>
            <div class="text-lg">مدينة</div>
          </div>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>
