<script setup lang="ts">
	import { initFlowbite } from 'flowbite';
	import { sleep } from './utils/helpers';
	const { $bus }: any = useNuxtApp();
	const routes = ['/', '/calendar', '/about'];

	$bus.$on('swipe', (direction: string) => {
		let indexCurrentRoute = routes.indexOf(useRoute().path);
		console.log('swiped', direction);
        
        switch(direction){
            case 'left':
                indexCurrentRoute -= 1;
                if (indexCurrentRoute < 0) {
                    indexCurrentRoute = routes.length - 1;
                }
                return navigateTo(routes[indexCurrentRoute]);
            case 'right':
                indexCurrentRoute += 1;
                if (indexCurrentRoute < 0) {
                    indexCurrentRoute = routes.length - 1;
                }
                return navigateTo(routes[indexCurrentRoute]);
        }
	});

	// initial splash screen value
	const showSplash = ref(true);

	const store = useEventsStore();
	await store.boot();

	// wait 2 seconds then set to false and hide gradually fading out

	onMounted(async () => {
		console.log('app vue mounted');

		initFlowbite();

		await sleep(1000);
		showSplash.value = false;
	});

	useHead({
		htmlAttrs: {
			dir: 'rtl',
		},
	});
</script>

<template>
	<Swipe>
		<main class="h-screen !font-sans text-violet-primary-600 bg-slate-100 dark:bg-violet-primary-950 dark:text-white">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>

			<!-- Splash Screen-->
			<Transition :duration="300" name="fade">
				<Splash v-show="showSplash" />
			</Transition>
		</main>
	</Swipe>
</template>
