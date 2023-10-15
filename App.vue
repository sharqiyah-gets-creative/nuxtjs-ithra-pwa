<script setup lang="ts">
const showSplash = ref(true);

console.log('app vue loaded')
import { initFlowbite } from 'flowbite'
import { useEventsStore } from './store/events';
import { sleep } from './utils/helpers';

const store = useEventsStore();
await store.boot();

// wait 2 seconds then set to false and hide gradually fading out

onMounted(async () => {
  console.log('app vue mounted')
  
  initFlowbite();
  
  await sleep(1000);
  showSplash.value = false;

  const toast = useToast();
  
  const toastOptions = {
    id: "install_to_home_screen",
    title: "ركب التطبيق بجهازك",
    description: "عشان تشوف كل جديد بكل سهولة",
    icon: "i-octicon-desktop-download-24",
    timeout: 10000,
    ui:{
      "title": "text-lg",
      "description": "text-base",
      "actionButton":{
        "size": "xl"
      }
    },
    actions: [
      {
        label: "تركيب",
        click: () => {},
      },
    ],
  };

  // toast.add(toastOptions);



});

useHead({
  htmlAttrs: {
    dir: "rtl",
  },
});

</script>

<template>
  <main class="flex flex-col h-screen text-[#3d2674] dark:bg-[#0E091B] dark:text-white ">
    
    <NuxtLayout class="flex-1">
      <NuxtPage />
    </NuxtLayout>

    <!-- Bottom Navigation-->
    <NavsBottom  />
    
    <!-- Alerts and Notifications -->
    <UNotifications />

    <!-- Splash Screen-->
    <Transition name="fade">
      <Splash v-if="showSplash" />
    </Transition>
    
  </main>
</template>