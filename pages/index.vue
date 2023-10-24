<script setup lang="ts">
    import { isIphone, isStandAlone } from '@/utils/helpers';
    const { events, getEventsByDistance, getCounters, getEventsGroupedByLocation, getEventsCities } = useEventsStore();
	const { position, position_alert_dismissed, location_enabled } = useUserStore();
	
	const events_grouped_by_location = getEventsGroupedByLocation(events);
	const events_by_distance = ref<IEvent[]>(events);
    const events_cities: string[] = getEventsCities(events) as string[];
    const city = ref<string | undefined>(events_cities[0]);
    const isEventsLoading = ref(false);

    console.log('pages/index.vue', 'loaded');
	console.log('pages/index.vue', 'isIphone', isIphone);
    console.log('pages/index.vue', 'events_cities', events_cities);

	const resetEventsByDistance = () => {
		events_by_distance.value = getEventsByDistance(position);
	};

    const dateUpdated = (date: string | [Date, Date]) => {
        isEventsLoading.value = true;
        console.log('dateUpdated', date);

        if(typeof date === 'string' && date !== '') {
            // filter events by date
            const dateValue = new Date(date);

            events_by_distance.value = events_by_distance.value.filter((event) => {
                const eventStartDate = new Date(event.start_date.seconds * 1000);
                const eventEndDate = new Date(event.end_date.seconds * 1000);
                return eventStartDate <= dateValue && dateValue <= eventEndDate;
            });
        } else {
            // reset events
            resetEventsByDistance();
        }
        isEventsLoading.value = true;
    };

	if (position.lat !== undefined && position.lng !== undefined) {
		resetEventsByDistance();
	}

	// if selected city is not of index 0, filter events by city
	watch(city, (newCity) => {
        isEventsLoading.value = true;
		resetEventsByDistance();
        // if new city is not part of event_cities, then return all events
        if(events_cities.includes(newCity as string)) {
            events_by_distance.value = events_by_distance.value.filter((event) => event.city === newCity);
        }
        isEventsLoading.value = false;
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
							<UiSelect placeholder="الكل" label="المدينة" v-model:dateValue="city" :options="events_cities" />    
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
