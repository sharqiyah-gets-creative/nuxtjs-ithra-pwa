<script setup lang="ts">
	import { formatDistance, formatDate, getRandomColorClass, formatTime } from '@/utils/helpers';

	let color = '';
	color = getRandomColorClass(color);

	const average_reviews = ref(0);

	const props = defineProps({
		event: {
			type: Object as PropType<IEvent>,
			required: true,
		},
	});

	// Getting Reviews
	if (props.event.reviews) {
		average_reviews.value = getAverageReviews(props.event.reviews);
	}
</script>

<template>
	<div class="w-full text-slate-900 rounded-lg overflow-hidden shadow-md">
		<NuxtLink :to="`/event/${event.id}`" class="w-full">
			<div :class="`${color}`" class="p-1 px-2 lg:p-2 lg:px-4 text-lg font-bold flex justify-between">
				<span>{{ event.title }}</span>
				<div class="badges space-x-1 leading-none rtl:space-x-reverse text-left">
					<UBadge color="white" variant="solid" v-for="(language, index) of event.language" :key="index" size="xs" :label="language" />
				</div>
			</div>

			<div class="p-1 px-2 lg:p-2 lg:px-4 bg-white">
				<ul class="font-light text-base">
					<li v-if="average_reviews" class="flex justify-start items-center space-x-2 rtl:space-x-reverse">
						<NuxtRating ratingSize="18px" :readOnly="true" activeColor="#ffd21e" :ratingValue="average_reviews" />
					</li>

					<li class="flex justify-start items-center space-x-2 rtl:space-x-reverse">
						<UIcon name="i-heroicons-clock" />
						<time :datetime="event.start_time.toString()">{{ formatDate(event.start_date) }}</time>
						<b class="font-bold">إلى</b>
						<time :datetime="event.end_time.toString()">{{ formatDate(event.end_date) }}</time>
					</li>

					<li class="flex justify-start items-center space-x-2 rtl:space-x-reverse">
						<UIcon name="i-heroicons-clock" />
						<time :datetime="event.start_time.toString()">{{ formatTime(event.start_time) }}</time>
						<b class="font-bold">إلى</b>
						<time :datetime="event.end_time.toString()">{{ formatTime(event.end_time) }}</time>
					</li>

					<li class="flex justify-start items-center">
						<UIcon class="me-2" name="i-heroicons-map-pin-solid" />{{ event.city }} - {{ event.area }}
					</li>

					<li class="flex justify-start items-center space-x-2 rtl:space-x-reverse">
						<UIcon name="i-heroicons-user" />
						<span>{{ event.category }}</span>
						<span class="font-bold">{{ $t('events.event.card.by') }}</span>
						<span>{{ event.entity }}</span>
					</li>

					<li v-if="event.distance" class="flex justify-start items-center space-x-2 rtl:space-x-reverse">
						<UIcon name="i-mdi-car-hatchback" />
						<span>{{ $t('events.event.card.distance_from_you', { distance: formatDistance(event.distance) }) }}</span>
					</li>
				</ul>
			</div>
		</NuxtLink>
	</div>
</template>
