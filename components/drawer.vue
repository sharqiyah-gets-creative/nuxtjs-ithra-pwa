<script lang="ts" setup>
import { Drawer, initFlowbite } from 'flowbite';
const { $bus }: any = useNuxtApp()

const props = defineProps(['id', 'title', 'icon', 'contentClass']);
const $drawerElement: HTMLElement | any = document.getElementById(props.id);
const drawer = new Drawer($drawerElement);


onMounted(async () => {
  console.log('Drawer vue mounted')
  initFlowbite();
});

$bus.$on('swipe', (direction: string) => {
    const $targetEl: HTMLElement = document.getElementById(props.id) as HTMLElement;
    const element: any = $targetEl;

    switch (direction) {
        case 'left': 
        console.log('swiped left')
            // swiped left, do things
            break;
        case 'right':
          console.log('swiped right')
            // swiped right, do things
            break;
        case 'up':
          console.log('swiped up')
          drawer.hide();
            // swiped up, do things
            break;
        case 'down':
          console.log('swiped down')
          //element.hide();
            // swiped down, do things
            break;
        default:
            break;
    }
})





</script>
<template>
  <!-- drawer component -->
  <Swipe>
    <div :id="id" class="fixed shadow bottom-0 left-0 right-0 z-50 w-full max-h-screen min-h-[50%] rounded-lg max-w-xl mx-auto
    overflow-y-auto transition-transform translate-y-full bg-white dark:bg-gray-800 flex flex-col" tabindex="-1" :ariaLabelledby="`${id}-label`">
        
    <div class="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 relative" :data-drawer-toggle="id">
      <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
          <h5 :id="`${id}-label`" class="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium">
            <UIcon class="me-2" :name="icon" />
            <span v-if="title">{{ title }}</span>
        </h5>
      </div>
        
      <div class="content flex-1 p-4" :class="contentClass">
        <slot />
      </div>

      
        
    </div>
  </Swipe>
</template>