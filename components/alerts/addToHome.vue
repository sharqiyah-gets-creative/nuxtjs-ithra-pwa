<script lang="ts" setup>

const {setAddToHomeScreenDismissed, add_to_home_screen_dismissed } = useUserStore();

const closed = () => {
    console.log('closed');
    setAddToHomeScreenDismissed(true);
}

</script>
<template>
	<van-notice-bar @close="closed()" v-if="!add_to_home_screen_dismissed"
		ref="noticeBarRef"
		mode="closeable"
		text="لتجربة أفضل، إضغط زر المشاركة ومن ثم إضافة للرئيسية."
		color="#1989fa"
		background="#ecf9ff"
		left-icon="info-o" />
</template>
