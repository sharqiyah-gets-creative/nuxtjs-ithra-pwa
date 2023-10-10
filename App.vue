<template>
  <main
    style="-webkit-tap-highlight-color: transparent;" 
    class="text-[#3d2674] dark:bg-[#0E091B] dark:text-white h-screen w-full">
    
    <section class="page">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </section>

    <NavsFlowbiteNav />
    <UNotifications />
  </main>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite'

onMounted(() => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIphone = /iPhone/i.test(navigator.userAgent);
  const hasAcknowledged = localStorage.getItem("hasAcknowledgedPrompt");
  initFlowbite();

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
