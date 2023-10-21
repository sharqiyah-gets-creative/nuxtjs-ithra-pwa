<script setup lang="ts">
	console.log('pages/index.vue', 'loaded');

	import { isIphone } from '@/utils/helpers';

	console.log('pages/index.vue', 'isIphone', isIphone);

	const { events, getEventsByDistance, getCounters, getEventsGroupedByLocation, getEventsCities } = useEventsStore();
	const { position, position_alert_dismissed } = useUserStore();

	const events_grouped_by_location = getEventsGroupedByLocation(events);

	let events_by_distance = ref<IEvent[]>(events);

	const resetEventsByDistance = () => {
		events_by_distance.value = getEventsByDistance(position);
	};

	if (position.lat !== undefined && position.lng !== undefined) {
		resetEventsByDistance();
	}

	const events_cities: string[] = getEventsCities(events) as string[];
	const enhancedEventsCities = computed(() => ['الكل', ...events_cities]);
	const city = ref<string | undefined>(enhancedEventsCities.value[0]);

	// if selected city is not of index 0, filter events by city
	watch(city, (newCity) => {
		resetEventsByDistance();
		if (newCity !== enhancedEventsCities.value[0]) {
			events_by_distance.value = events_by_distance.value.filter((event) => event.city === newCity);
		}
	});

	console.log('pages/index.vue', 'events_cities', events_cities);

	onMounted(() => {
		console.log('pages/index.vue', 'mounted');
	});

	useHead({
		title: 'الرئيسية',
	});

	const date = ref('');
	const showDateRange = ref(false);

	const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;
	
    const onConfirm = (values: any) => {
		const [start, end] = values;
		showDateRange.value = false;
		date.value = `${formatDate(start)} - ${formatDate(end)}`;
	};
</script>

<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="$t('explore')" :description="$t('explore_subtitle')" additional_classes="bg-slate-100 dark:bg-violet-primary-950"> </NavsTop>

		<div class="flex-[1] overflow-auto">
			<AlertsAllowLocation v-if="!position_alert_dismissed" />

			<MapsSection :responsive="false" :events_grouped_by_location="events_grouped_by_location" :counters="getCounters" />

			<section id="city-filters" class="py-4">
				<UContainer>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<h2>المدينة</h2>
							<USelect v-model="city" :options="enhancedEventsCities" />
						</div>
						<div>
							<h2>الفترة</h2>
							<van-cell :theme="$colorMode.preference" title="Select Date Range" :value="date" @click="showDateRange = true" />
							<van-calendar class="!bg-white !dark:bg-slate-900 max-w-md mx-auto" v-model:show="showDateRange" type="range" @confirm="onConfirm" />
						</div>
					</div>
				</UContainer>
			</section>

			<EventsSection :events="events_by_distance" />
		</div>

		<AlertsAddToHome v-if="isIphone" />

		<!-- Bottom Navigation-->
		<NavsBottom />
	</div>
</template>
