<script lang="ts" setup>
import { GoogleMap, MarkerCluster, Marker } from "vue3-google-map";
import mapStyles from "@/assets/maps/styles.json";
import { useEventsStore } from '../../store/events';



const eventId = useRoute().params?.id;

if(!eventId) {
  throw new Error('Event ID is required')
}

const config = useRuntimeConfig();

const eventInfo = ref<IEvent>({} as IEvent)

const store = useEventsStore();

eventInfo.value = store.getEventById(eventId.toString());
console.log(eventInfo.value);

const center = { 
  lat: parseFloat(eventInfo.value.ll?.split(",")[0]), 
  lng: parseFloat(eventInfo.value.ll.split(",")[1]) 
};

const zoom = ref(11);


</script>

<template>
<div class="flex-1">
     <NavsTop :title="eventInfo.title" :description="`بواسطة ${eventInfo.entity}`" />

    <section id="map">
      <UContainer>
          <ClientOnly>
            <GoogleMap
              :api-key="config.public.GOOGLE_API_KEY" class="w-full h-[25vh] md:h-[50vh] relative rounded-md overflow-hidden"
              :center="center" :zoom="zoom" :styles="mapStyles" :control-size="20"
              :street-view-control="false" :map-type-control="false" :gesture-handling="'cooperative'">
              <MarkerCluster>
                <Marker :options="{ position: center }" />
              </MarkerCluster>
            </GoogleMap>
          </ClientOnly>
      </UContainer>
    </section>

    <section id="details" class="py-4">
      <UContainer>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">-</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          <!-- loop through eventInfo data, key is teh first td, value is the second -->
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">إسم الفعالية</td>
            <td class="px-6 py-4">{{ eventInfo.title }} - {{ eventInfo.category }}</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">وقت البداية</td>
            <td class="px-6 py-4">{{ formatDate(eventInfo.start_time) }}</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">وقت النهاية</td>
            <td class="px-6 py-4">{{ formatDate(eventInfo.end_time) }}</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">اللغات</td>
            <td class="px-6 py-4">
              <UBadge variant="solid" color="black" v-for="(language, index) of eventInfo.language"
          :key="index" size="xs" :label="language" />
            </td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">الموقع</td>
            <td class="px-6 py-4">{{ eventInfo.city }} - {{ eventInfo.area }}</td>
          </tr>

        </tbody>
      </table>
      </UContainer>
    </section>

  </div>
</template>

