<script setup lang="ts">
	import { storeToRefs } from 'pinia';

	const eventsStore = useEventsStore();
	const { getEventsByDistance, getCounters, getEventsGroupedByLocation, getEventsCities } = eventsStore;
	const { events } = storeToRefs(eventsStore);

	const { position, position_alert_dismissed, location_enabled } = storeToRefs(useUserStore());

	const events_grouped_by_location = getEventsGroupedByLocation(events.value);
	const selected_date = ref<any>('');
	const selected_city = ref<any>('');

	const events_by_distance = ref<IEvent[]>(events.value);

	// Prepare cities filter
	const events_cities: string[] = getEventsCities(events.value) as string[];
	events_cities.unshift('الكل');
	const city = ref<string | undefined>(events_cities[0]);

	const isEventsLoading = ref(false);

	const resetEventsByDistance = () => {
		events_by_distance.value = getEventsByDistance(position.value);
	};

	const dateUpdated = (date: string | [Date, Date]) => {
		console.log('dateUpdated', date);
		selected_date.value = date;
		filterEvents();
	};

	if (position.value.lat !== undefined && position.value.lng !== undefined) {
		// resetting by distance
		resetEventsByDistance();
	}

	const filterEvents = () => {
		console.log('Filtering events');
		isEventsLoading.value = true;

		resetEventsByDistance();

		// Filter by city
		if (selected_city.value && events_cities.includes(selected_city.value)) {
			console.log('city is selected', selected_city.value);
			events_by_distance.value = events_by_distance.value.filter((event) => event.city === selected_city.value);
		}

		// Filter by date
		if (selected_date.value) {
			console.log('date is selected', selected_date.value);
			const dateValue = new Date(selected_date.value);
			events_by_distance.value = events_by_distance.value.filter((event) => {
				const eventStartDate = new Date(event.start_date.seconds * 1000);
				const eventEndDate = new Date(event.end_date.seconds * 1000);
				return eventStartDate <= dateValue && dateValue <= eventEndDate;
			});
		}

		isEventsLoading.value = false;
	};

	// if selected city is not of index 0, filter events by city
	watch(city, (newCity) => {
		if (newCity !== 'الكل') {
			selected_city.value = newCity;
		}
		filterEvents();
	});

	watch(
		() => events.value,
		(newVal) => {
            filterEvents();
			console.log('Index.vue - Events updated: ');
		}
	);

	useHead({
		title: 'الرئيسية',
	});
</script>

<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="$t('explore')" :description="$t('explore_subtitle')" additional_classes="bg-slate-100 dark:bg-valhalla-950"> </NavsTop>
		<AlertsAllowLocation v-if="!position_alert_dismissed && !location_enabled" />

		<div class="flex-[1] overflow-auto">
			<MapsSection class="py-2" :responsive="false" :events_grouped_by_location="events_grouped_by_location" :counters="getCounters" />

			<section id="filters" class="py-2">
				<UContainer>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label for="city-selector" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">المدينة</label>
							<USelect id="city-selector" size="xl" v-model="city" :options="events_cities" />
						</div>
						<div>
							<UiDatePicker name="date_filter" label="التاريخ" @update:dateValue="dateUpdated" />
						</div>
					</div>
				</UContainer>
			</section>

			<EventsSection :loading="isEventsLoading" class="py-2" :events="events_by_distance" />
		</div>

		<AlertsAddToHome v-if="isIphone && !isStandAlone" />

		<!-- Bottom Navigation-->
		<NavsBottom />
	</div>
</template>
