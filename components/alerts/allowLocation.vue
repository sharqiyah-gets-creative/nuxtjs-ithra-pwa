<script lang="ts" setup>
import { getPosition } from '~/utils/helpers';


const { setAlertDismissed, setPosition } = useUserStore();

const closed = () => {
    console.log('closed');
    setAlertDismissed(true);
}

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
}

</script>
<template>
	<van-notice-bar @click="promptLocation()" @close="closed()" 
		ref="noticeBarRef"
		mode="closeable"
		text="لتجربة أفضل، قم بمشاركة موقعك."
		color="#ffffff"
		background="#0f766e"
		left-icon="info-o" />
</template>
