<script setup lang="ts">
    import { sleep } from './utils';

	const { $colorMode } = useNuxtApp();
    const { t } = useI18n()

	const SPLASH_SCREEN_DURATION = 1000;

    $colorMode.preference = $colorMode.preference === 'dark' ? 'dark' : 'light';

	// initial splash screen value
	const showSplash = ref(true);

    const store = useEventsStore();
    
    store.boot().then(async () => {
        console.log('store.boot() done');
        await sleep(SPLASH_SCREEN_DURATION);  // wait 2 seconds then set to false and hide gradually fading out
        showSplash.value = false;
    });
   
	useHead({
		htmlAttrs: { dir: 'rtl' },
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - ${t('site.title')}` : t('site.title');
		},
	});
</script>

<template>
    <Head>
        <title>{{ $t('site.title') }}</title>
    </Head>
	<Swipe>
        <main class="standalone-top-padding h-screen !font-sans text-valhalla-900 bg-slate-100 dark:bg-valhalla-950 dark:text-white">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
            <UNotifications />

            <!-- Splash Screen-->
            <Transition :duration="300" name="fade">
                <Splash v-show="showSplash" />
            </Transition>
        </main>
	</Swipe>
</template>
