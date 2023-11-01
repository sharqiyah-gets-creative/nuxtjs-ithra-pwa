<script lang="ts" setup>
	const isLoading = ref(false);
	const { refreshEvents } = useEventsStore();

	const refreshMyEvents = async () => {
		isLoading.value = true;
		const toast = useToast();
		await refreshEvents();
		toast.add({ title: 'تم تحديث الفعاليات بنجاح!' });
		isLoading.value = false;
	};
</script>
<template>
	<NavsSideSettingsItem
		@click="refreshMyEvents"
		class="cursor-pointer"
		:title="$t('settings.refreshActivities')"
		description="إضغط هنا لتجديد بيانات الفعاليات عند الحاجة">


		<template #right-icon>
			<UIcon name="i-heroicons-arrow-path" :class="isLoading ? 'animate-spin': ''" />
		</template>

	</NavsSideSettingsItem>
</template>
