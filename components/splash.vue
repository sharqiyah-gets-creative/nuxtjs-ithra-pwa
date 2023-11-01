<script setup lang="ts">
import { storeToRefs } from 'pinia';


const { events } = storeToRefs(useEventsStore());

</script>

<template>
	<div
		class="
        w-full
        h-screen absolute top-0 left-0 right-0 z-50
        fade-in-enter-active 
        flex flex-col 
        justify-center items-center space-y-3    bg-black animate-bg">
		<div class="text-7xl p-5 dark:text-white">
			<UIcon color="white" class="animate-spin text-white" name="i-heroicons-light-bulb" />
		</div>

		<div class="">
			<img src="@/assets/images/logo-white.png" alt="logo" class="h-32" />
		</div>

        <div class="text-white text-center">
            <span>جاري تحميل الفعاليات</span>
            <span class="block">وجدنا {{ events.length }} فعاليه حتى الان</span>
        </div>

		<div class="w-full">
			<img  src="@/assets/images/patterns/palms.svg" class="absolute mx-auto left-1/2 translate-x-1/2 h-40 bottom-0 opacity-50" />
			<img  src="@/assets/images/patterns/ithra.svg" class="absolute mx-auto h-40 bottom-0 opacity-40" />
		</div>
	</div>
</template>
