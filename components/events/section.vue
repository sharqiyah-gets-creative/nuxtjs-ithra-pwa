<script setup lang="ts">

    const props = defineProps(['events'])

    // TODO: Add search functionality    

</script>

<template>
	<section id="events" class="py-4">
		<UContainer class="space-y-2">
			<EventsCard v-if="events.length > 0" v-for="event in events" :key="event.id" :event="event" />

			<div v-else class="text-center">
				<UCard loading :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }">
					<h2 class="text-3xl font-black">{{ $t('events.loading') }}</h2>
				</UCard>
			</div>
		</UContainer>
	</section>
</template>
