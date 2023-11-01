<script setup lang="ts">

	const isOpen = ref(false);
</script>

<template>
	<UserAvatar @click="isOpen = true" />

	<USlideover :overlay="false" dir="ltr" v-model="isOpen" side="left" class="h-full">
		<div dir="rtl" class="flex flex-col h-full text-base">
			
            <div class="standalone-top-padding p-3 flex items-center justify-between flex-row-reverse mb-2">
				<h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">الإعدادات</h3>
				<UButton icon="i-heroicons-x-mark-20-solid" color="white" variant="ghost" class="-my-1" @click="isOpen = false" />
			</div>

			<div class="flex-1 mb-2 p-3">
                <ul class="flex flex-col text-xl">
                    <NavsSideSettingsNightModeToggle />
                    <NavsSideSettingsRefreshActivities />
                    <NavsSideSettingsLogin/>
                </ul>
			</div>

			<div class="p-3 standalone-bottom-padding">
				<span class="font-thin">تنفيذ <NuxtLink target="_blank" class="font-normal" to="https://www.6degrees.com.sa/">الدرجات الست لتقنية المعلومات</NuxtLink></span>
			</div>
		</div>
	</USlideover>
</template>
