<script setup lang="ts">
import { initFlowbite } from 'flowbite'
import { useEventsStore } from './store/events';
const { $bus }: any = useNuxtApp()
const routes = ['/', '/calendar','/about']

$bus.$on('swipe', (direction: string) => {
    let indexCurrentRoute = routes.indexOf(useRoute().path)
    console.log('swiped', direction)
    if (direction === 'right' ) {
      // change indexCurrentRoute to the next index inside the routes array, if reached 0, go back to the last index
        indexCurrentRoute += 1
    }
    if (direction === 'left') {
        indexCurrentRoute -= 1
    }
    if (indexCurrentRoute < 0) {
      indexCurrentRoute = routes.length - 1
    }
    return navigateTo(routes[indexCurrentRoute])
})

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
  <Swipe>
  <main class="flex flex-col h-full min-h-screen text-[#3d2674] bg-slate-100 dark:bg-[#0E091B] dark:text-white ">
    
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
</Swipe>
</template>