<template>
  <main
    style="-webkit-tap-highlight-color: transparent;" 
    class="text-[#3d2674] dark:bg-[#0E091B] dark:text-white max-h-screen overflow-hidden w-full">
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Bottom Navigation-->
    <NavsFlowbiteNav />
    
    <!-- Alerts and Notifications -->
    <UNotifications />

    <!-- Splash Screen-->
    <Transition name="fade">
      <Splash v-if="showSplash" />
    </Transition>
    
  </main>
</template>

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
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIphone = /iPhone/i.test(navigator.userAgent);
  const hasAcknowledged = localStorage.getItem("hasAcknowledgedPrompt");
  initFlowbite();
  
  await sleep(2000);
  showSplash.value = false;
  const toast = useToast();
  
  toast.add({
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
  });


});

useHead({
  htmlAttrs: {
    dir: "rtl",
  },
});

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
  animation-duration: 200ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
