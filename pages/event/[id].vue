<script lang="ts" setup>
import { showSuccessToast, showFailToast } from 'vant';

	import { GoogleMap, MarkerCluster, Marker } from 'vue3-google-map';
	import mapStyles from '@/assets/maps/styles.json';
	import { formatDate } from '@/utils/helpers';

	const { getEventById } = useEventsStore();
	const { user } = useUserStore();

	const zoom = ref(11);
	const event_rating = ref(3);
	const event_review = ref('');

	const eventInfo = ref<IEvent | any>({} as IEvent);
	const { public: { GOOGLE_API_KEY } } = useRuntimeConfig();
	
    const { params: { id= 'no_id' }  }  = useRoute();

	if (!id) {
		throw new Error('Wrong Page');
	}

	eventInfo.value = getEventById(id.toString());
	console.log(eventInfo.value);

	const center = {
		lat: parseFloat(eventInfo.value.ll?.split(',')[0]),
		lng: parseFloat(eventInfo.value.ll.split(',')[1]),
	};

	const onRateChange = (value: number) => {
		console.log('rating changed to ', value);
	};

    const submitReview = async () => {
        console.log('submitReview', event_rating.value, event_review.value);
        if(event_review.value.length < 10){
            showFailToast({message: 'التقييم أقل من 10 أحرف', wordBreak: 'break-word'});

            return;
        }
        await reviewEvent(eventInfo.value.id, user.uid, event_rating.value, event_review.value);
        showSuccessToast('تم إرسال تقييمك بنجاح');

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
    })
</script>

<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="eventInfo.title" :description="`بواسطة ${eventInfo.entity}`" />

		<div class="space-y-2 flex-[1] overflow-auto py-4">
            <section id="details" class="mb-2">
                <UContainer>
                    <table class="w-full rounded overflow-hidden text-sm text-right text-gray-500 dark:text-gray-400">
                        <tbody class="bg-white bg-opacity-60 dark:bg-opacity-60 dark:bg-gray-800 dark:border-gray-700">
                            <!-- loop through eventInfo data, key is teh first td, value is the second -->
                            <tr class="border-b border-opacity-40 border-violet-primary-400">
                                <td scope="row" class="w-1/6 min-w-min  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">تصنيف الفعالية</td>
                                <td class="px-6 py-4">{{ eventInfo.category }}</td>
                            </tr>

                            <tr class="border-b border-opacity-40 border-violet-primary-400">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">وقت البداية</td>
                                <td class="px-6 py-4">{{ formatDate(eventInfo.start_time) }}</td>
                            </tr>

                            <tr class="border-b border-opacity-40 border-violet-primary-400">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">وقت النهاية</td>
                                <td class="px-6 py-4">{{ formatDate(eventInfo.end_time) }}</td>
                            </tr>

                            <tr class="border-b border-opacity-40 border-violet-primary-400">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">اللغات</td>
                                <td class="px-6 py-4">
                                    <UBadge v-for="(language, index) of eventInfo.language" :key="index" size="xs" :label="language" />
                                </td>
                            </tr>

                            <tr class="border-b-0 border-opacity-40 border-violet-primary-400">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">الموقع</td>
                                <td class="px-6 py-4">{{ eventInfo.city }} - {{ eventInfo.area }}</td>
                            </tr>
                        </tbody>
                    </table>
                </UContainer>
            </section>

            <section id="getThere" class="pb-4">
                <UContainer>
                    <NuxtLink :to="`https://google.com/maps/dir//${eventInfo.ll}`" class="block text-center text-white bg-green-primary-700 rounded py-2 px-4">توجه إلى هناك</NuxtLink>
                </UContainer>
            </section>
            
            <section id="map" class="mb-2">
			<UContainer>
				<ClientOnly>
					<GoogleMap
						:api-key="GOOGLE_API_KEY"
						class="w-full h-[25vh] md:h-[35vh] relative rounded-md overflow-hidden"
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

            <section id="rating" class="py-2 ">
                <UContainer>
                    <div class="p-3 bg-white bg-opacity-20 rounded">
                        <h4 class="mb-2">قيم المبادرة إذا قمت بتجربتها</h4>
                        <UAlert class="mb-2" v-if="!user" icon="i-heroicons-command-line"  title="" description="قم بتسجيل الدخول لتقييم المبادرة" />
                        <div class="text-center mb-2">
                            <van-rate v-if="!user" v-model="event_rating" :size="25" void-icon="star" disabled />
                            <van-rate v-else="user" @change="onRateChange" v-model="event_rating" :size="25" color="#ffd21e" void-icon="star" void-color="#eeeeee" />
                            
                        </div>
                        <div class="mb-2">
                            <UTextarea placeholder="اكتب رأيك هنا بكلمات بسيطة.." size="xl" v-model="event_review" />
                        </div>
                        <div id="rateButton" class="mb-2">
                            <MyButton @click="submitReview" color="yellow-primary" title="قيم"></MyButton>
                        </div>
                    </div>
                </UContainer>
            </section>

            
        </div>

        <!-- Bottom Navigation-->
        <NavsBottom />

	</div>
</template>