<script lang="ts" setup>
	// Importing things
	import { showSuccessToast, showFailToast } from 'vant';
	import { GoogleMap, MarkerCluster, Marker } from 'vue3-google-map';
	import mapStyles from '@/assets/maps/styles.json';
	import { formatDate, formatTime } from '@/utils/helpers';
import { getAverageReviews, getTopReviewsComments } from '~/composables/useEvents';
	const { getEventById, refreshEvents } = useEventsStore();
	const { user } = useUserStore();

	// Variables
	const zoom = ref(11);
    const showLogin = ref(false);
	const eventInfo = ref<IEvent | any>({} as IEvent);
	const event_rating = ref(3);
	const event_review = ref<string>('');
    const current_user_review = ref<IReview | null>(null);
	const average_reviews = ref(0);
	const top_reviews = ref<IReview[]>([]);
	const {
		public: { GOOGLE_API_KEY },
	} = useRuntimeConfig();
	const {
		params: { id = 'no_id' },
	} = useRoute();

	if (!id) {
		throw new Error('Wrong Page');
	}

	// Starting with getting Event
	eventInfo.value = getEventById(id.toString());
	console.log('event/id.vue', 'event info', eventInfo.value);

	// Setting the center of the map
	const center = {
		lat: parseFloat(eventInfo.value.ll?.split(',')[0]),
		lng: parseFloat(eventInfo.value.ll.split(',')[1]),
	};

	// Getting Reviews
	average_reviews.value = getAverageReviews(eventInfo.value.reviews);

	top_reviews.value = getTopReviewsComments(eventInfo.value.reviews, 5);

    // check if eventInfo.value has reviews
    // if yes, check if current user has a review, it should be like (eventInfo.value.reviews[user.uid]) then set it to current_user_review
    if(eventInfo.value.reviews) {
        if(user){
            if(eventInfo.value.reviews[user.uid]) {
                current_user_review.value = eventInfo.value.reviews[user.uid];
            }
        }
        
    }
    
    if(current_user_review.value) {
        event_rating.value = current_user_review.value.rating;
        event_review.value = current_user_review.value.review || '';
    }

	// Functions
	const onRateChange = (value: number) => {
		console.log('rating changed to ', value);
	};

	const submitReview = async () => {
		try {
			console.log('submitReview', event_rating.value, event_review.value);
            if(event_review.value.length == 0) {
                showFailToast({ message: 'الرجاء كتابة تقييمك', wordBreak: 'break-word' });
            }

			if (event_review.value.length < 10) {
				showFailToast({ message: 'التقييم أقل من 10 أحرف', wordBreak: 'break-word' });
				return;
			}

			showLoadingToast({
				message: 'جاري إرسال تقييمك...',
				forbidClick: true,
			});
			await reviewEvent(eventInfo.value.id, user.uid, event_rating.value, event_review.value);
			await refreshEvents();
			showSuccessToast('تم إرسال تقييمك بنجاح');
		} catch (error) {
			console.log('submitReview', error);
			showFailToast({ message: 'حدث خطأ أثناء إرسال تقييمك', wordBreak: 'break-word' });
		}
	};

	useHead({
		title: eventInfo.value.title,
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: eventInfo.value.description,
			},
		],
	});
</script>

<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="eventInfo.title" :description="`بواسطة ${eventInfo.entity}`" />

		<div class="space-y-2 flex-[1] overflow-auto py-4">
			<section id="details" class="mb-2">
				<UContainer>
					<table class="w-full rounded overflow-hidden text-base text-right text-gray-500 dark:text-gray-400">
						<tbody class="bg-white bg-opacity-60 dark:bg-opacity-60 dark:bg-gray-800 dark:border-gray-700">
							<!-- loop through eventInfo data, key is teh first td, value is the second -->
							<UiEventTr title="تصنيف الفعالية">
								{{ eventInfo.category }}
							</UiEventTr>

							<UiEventTr title="التاريخ">
								{{ formatDate(eventInfo.start_date) }} إلى {{ formatDate(eventInfo.start_date) }}
							</UiEventTr>

							<UiEventTr title="الوقت">
								{{ formatTime(eventInfo.start_time) }} إلى {{ formatTime(eventInfo.end_time) }}
							</UiEventTr>

							<UiEventTr title="اللغات">
								<UBadge class="me-1 last:me-0" v-for="(language, index) of eventInfo.language" :key="index" size="xs" :label="language" />
							</UiEventTr>

							<UiEventTr title="الموقع"> {{ eventInfo.city }} - {{ eventInfo.area }} </UiEventTr>

							<UiEventTr v-if="average_reviews" title="التقييم العام">
								<van-rate v-model="average_reviews" color="#ffd21e" :size="25" void-icon="star" readonly />
							</UiEventTr>

							<UiEventTr v-if="top_reviews.length > 0" title="أعلى الآراء">
								<span v-for="(review, index) of top_reviews" :key="index" class="block">{{ review.review }}</span>
							</UiEventTr>
						</tbody>
					</table>
				</UContainer>
			</section>

			<section id="getThere" class="pb-4">
				<UContainer>
					<NuxtLink
                        target="_blank"
						:to="`https://google.com/maps/dir//${eventInfo.ll}`"
						class="block text-center text-white bg-green-primary-700 rounded py-2 px-4"
						>توجه إلى هناك</NuxtLink
					>
				</UContainer>
			</section>

			<section id="map" class="mb-2">
				<UContainer>
					<ClientOnly>
						<GoogleMap
							:api-key="GOOGLE_API_KEY"
							class="w-full h-[25vh] lg:h-[35vh] relative rounded-md overflow-hidden"
							:center="center"
							:zoom="zoom"
							:styles="mapStyles"
							:control-size="20"
							:street-view-control="false"
							:map-type-control="false"
							:gesture-handling="'cooperative'">
							<MarkerCluster>
								<Marker :options="{ position: center }" />
							</MarkerCluster>
						</GoogleMap>
					</ClientOnly>
				</UContainer>
			</section>

			<section id="rating" class="py-2">
				<UContainer>
					<div class="p-3 bg-white dark:bg-opacity-20 rounded">
						<h4 class="mb-2">قيم المبادرة إذا قمت بتجربتها</h4>

                        <UserActionSheet>
                            <UAlert color="orange" variant="solid" @click="showLogin = true" class="mb-2" v-if="!user" icon="i-heroicons-command-line" title="" description="قم بتسجيل الدخول لتقييم المبادرة" />
                        </UserActionSheet>

						

                        <UAlert color="teal" variant="solid" class="mb-2" v-if="current_user_review" icon="i-heroicons-command-line" title="" description="لقد قمت بتقييم الفعالية من قبل، إذا كنت تريد التعديل، إضغط قيم مرة أخرى" />

						<div class="text-center mb-2">
							<van-rate v-if="!user" v-model="event_rating" :size="25" void-icon="star" disabled />
							<van-rate
								v-else="user"
								@change="onRateChange"
								v-model="event_rating"
								:size="25"
								color="#ffd21e"
								void-icon="star"
								void-color="#eeeeee" />
						</div>
						<div class="mb-2">
							<UTextarea :disabled="!user" placeholder="اكتب رأيك هنا بكلمات بسيطة.." size="xl" v-model="event_review" />
						</div>
						<div id="rateButton" class="mb-2">
							<NuxtLink
                                :class="!user ? 'pointer-events-none !bg-slate-400 !text-white' : ''"
								@click="submitReview"
								class="cursor-pointer block text-center text-slate-900 bg-[#ffd21e] rounded py-2 px-4"
								>قيم</NuxtLink
							>
						</div>
					</div>
				</UContainer>
			</section>
		</div>

		<!-- Bottom Navigation-->
		<NavsBottom />
	</div>
</template>
