<script setup lang="ts">
	import { isIphone, isStandAlone } from '@/utils/helpers';
	const { events, getEventsByDistance, getCounters, getEventsGroupedByLocation, getEventsCities } = useEventsStore();
	const { position, position_alert_dismissed, location_enabled } = useUserStore();

	const events_grouped_by_location = getEventsGroupedByLocation(events);
    const selected_date = ref<any>('');
    const selected_city = ref<any>('');

	const events_by_distance = ref<IEvent[]>(events);
	const events_cities: string[] = getEventsCities(events) as string[];
    // Add "الكل" to the beginning of the array
    events_cities.unshift('الكل');

	const city = ref<string | undefined>(events_cities[0]);
	const isEventsLoading = ref(false);

	console.log('pages/index.vue', 'loaded');
	console.log('pages/index.vue', 'isIphone', isIphone);
	console.log('pages/index.vue', 'events_cities', events_cities);

	const resetEventsByDistance = () => {
		events_by_distance.value = getEventsByDistance(position);
	};

	const dateUpdated = (date: string | [Date, Date]) => {
        console.log('dateUpdated', date);
        selected_date.value = date;
        filterEvents();
	};

	if (position.lat !== undefined && position.lng !== undefined) {
		resetEventsByDistance();
	}

    const filterEvents = () => {
        console.log('Filtering events');
        isEventsLoading.value = true;
        
        resetEventsByDistance();
        
        // Filter by city
        console.log('checking if city is selected');
        if (selected_city.value && events_cities.includes(selected_city.value)) {
            console.log('city is selected', selected_city.value);
            events_by_distance.value = events_by_distance.value.filter((event) => event.city === selected_city.value);
        }

        // Filter by date
        console.log('checking if date is selected');
        if (selected_date.value) { 
            console.log('date is selected', selected_date.value);
            const dateValue = new Date(selected_date.value);
            events_by_distance.value = events_by_distance.value.filter((event) => {
                const eventStartDate = new Date(event.start_date.seconds * 1000);
                const eventEndDate = new Date(event.end_date.seconds * 1000);
                return eventStartDate <= dateValue && dateValue <= eventEndDate;
            });
        }

        console.log('Events filtered');
        isEventsLoading.value = false;
    }

	// if selected city is not of index 0, filter events by city
	watch(city, (newCity) => {
        if(newCity !== 'الكل'){
            selected_city.value = newCity;
        }
        filterEvents();
	});

	onMounted(() => {
		console.log('pages/index.vue', 'mounted');
	});

	useHead({
		title: 'الرئيسية',
	});

</script>

<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="$t('explore')" :description="$t('explore_subtitle')" additional_classes="bg-slate-100 dark:bg-valhalla-950"> </NavsTop>

		<div class="flex-[1] overflow-auto">
			<AlertsAllowLocation v-if="!position_alert_dismissed && !location_enabled" />

			<MapsSection class="py-2" :responsive="false" :events_grouped_by_location="events_grouped_by_location" :counters="getCounters" />

			<section id="filters" class="py-2">
				<UContainer>
					<div class="grid grid-cols-2 gap-4">
						<div>
                            <label for="city-selector" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">المدينة</label>
                            <USelect id="city-selector" size="xl" v-model="city" :options="events_cities" />
						</div>
						<div>
							<UiDatePicker label="التاريخ" @update:dateValue="dateUpdated" />
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
