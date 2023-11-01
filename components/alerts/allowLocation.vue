<script lang="ts" setup>
	import { getPosition } from '~/utils/helpers';

	const { setAlertDismissed, setPosition } = useUserStore();

	const closed = () => {
		console.log('closed');
		setAlertDismissed(true);
	};

	const promptLocation = async () => {
		try {
			const position: GeolocationCoordinates = await getPosition({ enableHighAccuracy: true });
			setPosition({ lat: position.latitude, lng: position.longitude } as MapPosition);
			setAlertDismissed(true);
			console.log('alerts/allowLocation.vue', 'position', position);
			window.location.reload();
		} catch (error) {
			console.log('alerts/allowLocation.vue', error);
		}
	};
</script>
<template>
	<UAlert
		icon="i-heroicons-map-pin"
		:close-button="{ icon: 'i-heroicons-x-mark-20-solid', padded: false }"
		color="primary"
		title="لتجربة أفضل، قم بمشاركة موقعك!"
		@click="promptLocation()"
		@close="closed()" />
</template>
