<script setup lang="ts">
    defineProps(['events_grouped_by_location', 'counters'])
    
	const goToMapPage = () => {
		navigateTo('/map');
	};
</script>

<template>
	<section id="map" class="py-4">
		<UContainer>
			<UCard :ui="{ header: { padding: 'p-0 sm:p-0' } }">
				<template #header>
					<div @click="goToMapPage()">
						<MapsMap responsive_map="none" specialClass="w-full h-[25vh] md:h-[40vh] relative" :events="events_grouped_by_location" />
					</div>
				</template>
				<div class="grid grid-cols-3 divide-x divide-x-reverse">
					<div class="flex flex-col justify-center items-center">
						<div class="text-xl font-bold">{{ counters.events }}</div>
						<div class="text-base font-light">{{ $t('activity') }}</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<div class="text-xl font-bold">{{ counters.entities }}</div>
						<div class="text-base font-light">{{ $t('entity') }}</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<div class="text-xl font-bold">{{ counters.cities }}</div>
						<div class="text-base font-light">{{ $t('city') }}</div>
					</div>
				</div>
			</UCard>
		</UContainer>
	</section>
</template>
