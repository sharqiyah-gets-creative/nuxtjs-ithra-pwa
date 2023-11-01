<script setup lang="ts">
    useHead({
		title: 'عن المبادرة',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'تعرف أكثر على مبادرة الشرقية تبدع 2023',
			},
		],
	});
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

                    <div class="bg-my-sin-400 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center text-center">
						<span dir="ltr">4</span>
						<span>{{ $t('primary_partner') }}</span>
					</div>

                    <div class="bg-my-sin-400 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center text-center">
						<span dir="ltr">20</span>
						<span>{{ $t('strategic_partner') }}</span>
					</div>

					<div class="bg-my-sin-500 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center text-center">
						<span dir="ltr">+350</span>
						<span>{{ $t('activity', 1) }}</span>
					</div>

					<div class="bg-my-sin-300 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center text-center">
						<span dir="ltr">+550</span>
						<span>{{ $t('entity', 1) }}</span>
					</div>



					<div class="col-span-2 px-6 py-4 rounded-lg text-center bg-valhalla-700 text-white">
						<NuxtLink class="leading-none flex justify-center" target="_blank" to="https://www.ithra.com/ar/special-programs/alsharqiya-gets-creative">
                            <UIcon name="i-heroicons-arrow-top-right-on-square" class="me-2 scale-125" />
                            <span>{{ $t('about_page.visit_website')}}</span>
                        </NuxtLink>
					</div>

                    <div class="col-span-2 grid grid-cols-3 gap-6">
                        <div class="px-6 py-4 rounded-lg text-center bg-sky-600 text-white">
                            <NuxtLink class="leading-none flex justify-center" target="_blank" to="https://x.com/epgetscreative/status/1712906138012811379?s=46&t=9IsdSepgiBdHipMU2m-cmg">
                                <UIcon name="i-simple-icons-twitter" class="me-2 scale-125" />
                                <span class="sr-only">{{ $t('about_page.visit_twitter')}}</span>
                            </NuxtLink>
                        </div>

                        <div class="px-6 py-4 rounded-lg text-center bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white">
                            <NuxtLink class="leading-none flex justify-center" target="_blank" to="https://instagram.com/epgetscreative?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                                <UIcon name="i-simple-icons-instagram" class="me-2 scale-125" />
                                <span class="sr-only">{{ $t('about_page.visit_instagram')}}</span>
                            </NuxtLink>
                        </div>

                        <!-- tiktok link -->
                        <div class="px-6 py-4 rounded-lg text-center bg-black text-white">
                            <NuxtLink class="leading-none flex justify-center" target="_blank" to="https://www.tiktok.com/@epgetscreative?_t=8gc6wh7rete&_r=1">
                                <UIcon name="i-simple-icons-tiktok" class="me-2 scale-125" />
                                <span class="sr-only">{{ $t('about_page.visit_tiktok')}}</span>
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="col-span-2 p-6 text-lg text-center">
                        <NuxtLink to="https://www.6degrees.com.sa/" target="_blank">
                            {{ $t('done_by') }}
                        </NuxtLink>
                    </div>
				</div>
			</UContainer>
		</section>

		<!-- Bottom Navigation-->
		<NavsBottom />
	</div>
</template>
