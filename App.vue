<script setup lang="ts">
	import { initFlowbite } from 'flowbite';
	import { sleep } from './utils/helpers';
	const { $bus }: any = useNuxtApp();
	const { $colorMode } = useNuxtApp();
	const routes = ['/', '/about'];

	const SPLASH_SCREEN_DURATION = 1000;

    $colorMode.preference = $colorMode.preference === 'dark' ? 'dark' : 'light';

    const colorMode = computed(() => {
        return $colorMode.preference === 'dark' ? 'dark' : 'light';
    });

	// * Very Sensitive on mobile
	// $bus.$on('swipe', (direction: string) => {
	// 	let indexCurrentRoute = routes.indexOf(useRoute().path);

	// 	console.log('swiped', direction);

	//     indexCurrentRoute += direction === 'right' ? 1 : -1;
	//     indexCurrentRoute = (indexCurrentRoute + routes.length) % routes.length;  // Loop over

	//     navigateTo(routes[indexCurrentRoute]);
	// });

	// initial splash screen value
	const showSplash = ref(true);
	const store = useEventsStore();
	await store.boot();

	// wait 2 seconds then set to false and hide gradually fading out

	onMounted(async () => {
		console.log('app vue mounted');

		initFlowbite();

		await sleep(SPLASH_SCREEN_DURATION);
		showSplash.value = false;
	});

	useHead({
		htmlAttrs: { dir: 'rtl' },
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - الشرقية تبدع` : 'الشرقية تبدع';
		},
	});
</script>

<template>
	<Swipe>
        <main class="standalone-top-padding h-screen !font-sans text-valhalla-900 bg-slate-100 dark:bg-valhalla-950 dark:text-white">
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
