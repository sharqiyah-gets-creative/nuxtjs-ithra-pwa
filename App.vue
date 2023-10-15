<script setup lang="ts">
import { initFlowbite } from 'flowbite'
import { useEventsStore } from './store/events';

// initial splash screen value
const showSplash = ref(true);

const store = useEventsStore();
await store.boot();

// wait 2 seconds then set to false and hide gradually fading out

onMounted(async () => {
  console.log('app vue mounted')
  
  initFlowbite();
  
  await sleep(1000);
  showSplash.value = false;

});

useHead({
  htmlAttrs: {
    dir: "rtl",
  },
});

</script>

<template>
  <main class="flex flex-col h-full min-h-screen text-[#3d2674] dark:bg-[#0E091B] dark:text-white ">
    
    <NuxtLayout class="flex-1">
      <NuxtPage />
    </NuxtLayout>

    <!-- Bottom Navigation-->
    <NavsBottom  />
    
    <!-- Splash Screen-->
    <Transition :duration="300" name="fade">
      <Splash v-show="showSplash" />
    </Transition>
    
  </main>
</template>