<script lang="ts" setup>
	import { getPosition } from '@/utils/helpers';

	const { position, position_alert_dismissed, setAlertDismissed, setPosition } = useUserStore();
    console.log('alerts/position.vue', 'userDismissedModal', position_alert_dismissed);

	const isOpen = ref(true);

	const dismiss = () => {
		setAlertDismissed(true);
		isOpen.value = false;
	};

	const getLocation = async () => {
		const position: GeolocationCoordinates = await getPosition({ enableHighAccuracy: true });
		setPosition({ lat: position.latitude, lng: position.longitude } as MapPosition);
		console.log('alerts/position.vue', 'position', position);
		isOpen.value = false;
	};
</script>

<template>
	<div>
		<UModal v-if="!position_alert_dismissed && !position" v-model="isOpen">
			<UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
				<template #header> {{  $t('position.alert.title') }} </template>
				{{ $t('position.alert.message') }}}
				<template #footer>
					<div class="flex justify-start space-x-2">
						<UButton size="xl" label="{{ $t('position.alert.actions.activate') }}" @click="getLocation" />
						<UButton size="xl" label="{{ $t('position.alert.actions.dismiss') }}" variant="ghost" @click="dismiss" />
					</div>
				</template>
			</UCard>
		</UModal>
	</div>
</template>
