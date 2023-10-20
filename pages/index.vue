<script setup lang="ts">
    import { isIphone } from '@/utils/helpers'

	const { events, searchKeywords, getEventsByDistance, getCounters, getEventsGroupedByLocation } = useEventsStore();
	const { position } = useUserStore();

    const events_grouped_by_location = getEventsGroupedByLocation(events)

    let positions_by_distance = events;

    if (position) {
		positions_by_distance = getEventsByDistance(position);
	}

	console.log('pages/index.vue', 'loaded');
	onMounted(() => {
		console.log('pages/index.vue', 'mounted');
	});
</script>

<template>
	<div class="flex flex-col h-full text-white ">
		<NavsTop :title="$t('explore')" :description="$t('explore_subtitle')" additional_classes="bg-slate-100 dark:bg-violet-primary-950">
		</NavsTop>

        <div class="flex-[1] overflow-auto">
            <MapsSection :events_grouped_by_location="events_grouped_by_location" :counters="getCounters" />

		    <EventsSection :events="positions_by_distance" />
        </div>

		
        <AlertsAddToHome v-if="isIphone" />

        <!-- Bottom Navigation-->
        <NavsBottom />

		<AlertsPosition />
	</div>
</template>