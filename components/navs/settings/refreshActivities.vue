<script lang="ts" setup>

const isLoading = ref(false);
const { refreshEvents } = useEventsStore();

const refreshMyEvents = async () => {
    isLoading.value = true;
    const toast = useToast();
    await refreshEvents();
    toast.add({ title: 'تم تحديث الفعاليات بنجاح!' })
    isLoading.value = false;
};

</script>
<template>
	<NavsSettingsItem 
    @click="refreshMyEvents" 
    class="cursor-pointer" 
    :title="$t('settings.refreshActivities')"
    description="إضغط هنا لتجديد بيانات الفعاليات عند الحاجة"
    >
		<template #right-icon>
			<UIcon name="i-heroicons-arrow-path" />
		</template>

        <template #left-icon v-if="isLoading">
            <UIcon name="i-fa6-solid-spinner" class="animate-spin" />
        </template>
        
	</NavsSettingsItem>
</template>
