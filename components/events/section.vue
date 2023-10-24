<script setup lang="ts">

    const props = defineProps(['events', 'loading'])

    const isLoading = ref(false);

    if(props.loading) {
        isLoading.value = true;
    }


    // TODO: Add search functionality

</script>

<template>
	<section id="events">
		<UContainer class="space-y-3">
			<EventsCard v-if="events.length > 0" v-for="event in events" :key="event.id" :event="event" />
            
            <div v-else-if="isLoading" class="text-center">
				<UCard :loading="isLoading" :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }">
					<h2 class="text-3xl font-black mb-2">{{ $t('events.loading') }}</h2>
                    <UIcon class="animate-spin" name="i-heroicons-light-bulb" />
				</UCard>
			</div>

			<div v-else class="text-center">
				<UCard>
					<h2 class="text-3xl font-black">{{ $t('events.none') }}</h2>
				</UCard>
			</div>
		</UContainer>
	</section>
</template>
