<script setup lang="ts">
	const props = defineProps(['events_grouped_by_location', 'counters']);
	console.log('components/maps/section.vue', 'counters', props.counters());

	const goToMapPage = () => {
		navigateTo('/map');
	};

	const mapCardUi = {
        "base": "overflow-hidden text-white dark:text-gray-800",
        "divide": "",
        "background": "bg-valhalla-500 dark:bg-white",
        "rounded": "rounded-md",
		"header": { 
            "padding": 'p-0 sm:p-0' 
        },
        "body": {
            "padding": "p-3 sm:p-3"
        },
	};
</script>

<template>
	<section id="map">
		<UContainer>
			<UCard :ui="mapCardUi">
				<template #header>
					<div @click="goToMapPage()">
						<MapsMap :responsive="false" specialClass="w-full h-[20vh] lg:h-[30vh] relative" :events="events_grouped_by_location" />
					</div>
				</template>

				<div class="text-center p-2">
					<!--<MapsCounter :title="$t('activity')" :value="counters().events" />
					<MapsCounter :title="$t('entity')" :value="counters().entities" />
					<MapsCounter :title="$t('city')" :value="counters().cities" />-->
                    <h2 class="text-center text-2xl font-bold">إستكشف الشرقية تبدع</h2>
				</div>
			</UCard>
		</UContainer>
	</section>
</template>
