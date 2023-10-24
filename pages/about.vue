<script setup lang="ts">
	const { getCounters } = useEventsStore();
</script>
<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="$t('about')" :description="$t('about_page.know_more')" additional_classes="dark:bg-valhalla-950" />

		<section id="info" class="flex-[1] overflow-auto py-6">
			<UContainer>
				<div class="grid grid-cols-2 gap-6">
					<div class="bg-valhalla-700 rounded-lg border-0 p-6 col-span-2 text-lg text-white">
						{{ $t('about_page.description') }}
					</div>
                    
					<div class="bg-my-sin-500 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center">
						<span>{{ getCounters().events }}</span>
						<span>{{ $t('activity', 1) }}</span>
					</div>

					<div class="bg-my-sin-300 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center">
						<span>{{ getCounters().entities }}</span>
						<span>{{ $t('entity', 1) }}</span>
					</div>

					<div class="col-span-2 bg-my-sin-400 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center">
						<span>20</span>
						<span>{{ $t('strategic_partner') }}</span>
					</div>

					<div class="col-span-2 px-6 py-4 rounded-lg text-center bg-valhalla-700 text-white">
						<NuxtLink class="leading-none flex justify-center" target="_blank" to="https://www.ithra.com/ar/special-programs/alsharqiya-gets-creative">
                            <UIcon name="i-heroicons-arrow-top-right-on-square" class="me-2 scale-125" />
                            <span>معلومات أكثر بموقع الشرقية تبدع (إثراء)</span>
                            
                        </NuxtLink>
					</div>

                    <div class="col-span-2 grid lg:grid-cols-3 gap-6">
                        <div class="px-6 py-4 rounded-lg text-center bg-sky-600 text-white">
                            <NuxtLink class="leading-none flex justify-center" target="_blank" to="https://www.ithra.com/ar/special-programs/alsharqiya-gets-creative">
                                <UIcon name="i-simple-icons-twitter" class="me-2 scale-125" />
                                <span>زورونا في تويتر</span>
                            </NuxtLink>
                        </div>

                        <div class="px-6 py-4 rounded-lg text-center bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white">
                            <NuxtLink class="leading-none flex justify-center" target="_blank" to="https://www.ithra.com/ar/special-programs/alsharqiya-gets-creative">
                                <UIcon name="i-simple-icons-instagram" class="me-2 scale-125" />
                                <span>زورونا في إنستغرام</span>
                            </NuxtLink>
                        </div>

                        <!-- tiktok link -->
                        <div class="px-6 py-4 rounded-lg text-center bg-black text-white">
                            <NuxtLink class="leading-none flex justify-center" target="_blank" to="https://www.ithra.com/ar/special-programs/alsharqiya-gets-creative">
                                <UIcon name="i-simple-icons-tiktok" class="me-2 scale-125" />
                                <span>زورونا في تيك توك</span>
                            </NuxtLink>
                        </div>
                    </div>

                    
				</div>
			</UContainer>
		</section>

		<!-- Bottom Navigation-->
		<NavsBottom />
	</div>
</template>
