<template>
    <main class="bg-indigo-950 min-h-screen text-white space-y-4">
        <div class="container mx-auto">
            <div class="bg-pink-500 bg-opacity-60 p-4 rounded-b-xl">
                <p>Notification or banner information</p>
            </div>
        </div>
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
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

</script>
