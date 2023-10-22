<script setup lang="ts">

	console.log('pages/index.vue', 'loaded');

	import { formatDate, isIphone } from '@/utils/helpers';

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
	const city = ref<string | undefined>(events_cities[0]);

	// if selected city is not of index 0, filter events by city
	watch(city, (newCity) => {
		resetEventsByDistance();
        // if new city is not part of event_cities, then return all events
        if(events_cities.includes(newCity as string)) {
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
    
    // handle dateUpdated by filtering events by start_Date end_Date, events where the emitted date is between should be returned, if no emitted value then return all events
    const dateUpdated = (date: string | [Date, Date]) => {
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
    };

</script>

<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="$t('explore')" :description="$t('explore_subtitle')" additional_classes="bg-slate-100 dark:bg-violet-primary-950"> </NavsTop>

		<div class="flex-[1] overflow-auto">
			<AlertsAllowLocation v-if="!position_alert_dismissed" />

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

			<EventsSection class="py-2" :events="events_by_distance" />
		</div>

		<AlertsAddToHome v-if="isIphone" />

		<!-- Bottom Navigation-->
		<NavsBottom />
	</div>
</template>
