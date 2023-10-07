<template>
    <main class="bg-[#0E091B] min-h-screen h-screen text-white space-y-4">
        
        <slot />
        <NavigationFooter />
    </main>
</template>
<script setup lang="ts">
useHead({
  title: 'Alsharqiya Gets Creative',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  htmlAttrs: {
    dir: 'rtl',
  },
})

</script>
