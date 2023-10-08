<template>
    <main class="text-[#3d2674] dark:bg-[#0E091B] dark:text-white min-h-screen">
        <NavigationTheHeader />
        <section class="page">
            <slot />
        </section>
        <NavigationTheFooter />
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
  const hasAcknowledged = localStorage.getItem('hasAcknowledgedPrompt');


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
