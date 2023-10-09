<template>
  <main
  style="-webkit-tap-highlight-color: transparent;" 
  
  class="text-[#3d2674] dark:bg-[#0E091B] dark:text-white h-full w-[calc(100%+1px)]">
    <!--
    <NavigationTheHeader />
    -->

    <section class="page">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </section>
    <!--<NavigationTheFooter />-->

    <NavigationFlowbiteNav />
    <UNotifications />
  </main>
</template>

<script setup lang="ts">

const toast = useToast();

useHead({
  htmlAttrs: {
    // TODO - check automating this
    dir: "rtl",
  },
});

onMounted(() => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIphone = /iPhone/i.test(navigator.userAgent);
  const hasAcknowledged = localStorage.getItem("hasAcknowledgedPrompt");

  toast.add({
    id: "install_to_home_screen",
    title: "ركب التطبيق بجهازك",
    description: "عشان تشوف كل جديد بكل سهولة",
    icon: "i-octicon-desktop-download-24",
    timeout: 10000,

    actions: [
      {
        label: "تركيب",
        click: () => {},
      },
    ],
  });
});
</script>
