<template>
	<div class="flex flex-col h-full">
		<NavsTop :title="$t('about')" :description="$t('about_page.know_more')" additional_classes="dark:bg-violet-primary-950" />

		<section id="info" class="flex-[1] overflow-auto py-6">
			<UContainer>
				<div class="grid grid-cols-2 gap-6">
					<div class="bg-pink-primary-700 rounded-lg border-0 p-6 col-span-2 text-lg text-white">
						{{  $t('about_page.description') }}
					</div>
					<div class="bg-violet-secondary-500 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center">
						<span>540</span>
						<span>{{ $t('activity', 0) }}</span> 
					</div>
					<div class="bg-pink-secondary-500 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center">
						<span>300</span>
						<span>{{ $t('entity', 0) }}</span>
					</div>

					<div class="col-span-2 bg-yellow-primary-400 rounded-lg border-0 p-6 text-3xl text-white flex flex-col items-center">
						<span>20</span>
						<span>{{ $t('strategic_partner') }}</span>
					</div>

                    <div class="col-span-2 px-6 py-4 rounded-lg text-center bg-green-primary-700 text-white">
                        <NuxtLink class="" target="_blank" to="https://www.ithra.com/ar/special-programs/alsharqiya-gets-creative">معلومات أكثر بموقع الشرقية تبدع (إثراء)</NuxtLink>
                    </div>
				</div>
			</UContainer>
		</section>

        <!-- Bottom Navigation-->
        <NavsBottom />
	</div>
</template>
