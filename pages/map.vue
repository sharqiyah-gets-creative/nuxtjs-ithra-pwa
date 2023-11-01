<script lang="ts" setup>
	//import { storeToRefs } from 'pinia';
	const { events, getEventsGroupedByLocation } = useEventsStore();
    const local_events = getEventsGroupedByLocation(events)
    const { t } = useI18n()

    useHead({
        title: t('map_page.title'),
    });

    
</script>
<template>
	<div class="flex flex-col h-full text-white ">
		<NavsTop :title="$t('map_page.title')" additional_classes="bg-valhalla-500" />

		<section id="fullMap" class="flex-[1] overflow-auto">
			<MapsMap :responsive="true" specialClass="relative w-full h-full overflow-auto" :events="local_events" />
		</section>

        <!-- Bottom Navigation-->
        <NavsBottom />
	</div>
</template>
