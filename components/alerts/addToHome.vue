<script lang="ts" setup>

const {setAddToHomeScreenDismissed, add_to_home_screen_dismissed } = useUserStore();

const closed = () => {
    console.log('closed');
    setAddToHomeScreenDismissed(true);
}

</script>
<template>
    <UAlert 
        icon="i-heroicons-bell"
        :ui="{rounded: 'rounded-none'}"
        :close-button="{ icon: 'i-heroicons-x-mark-20-solid', padded: false }"
        color="primary"
        title="لتجربة أفضل، إضغط زر المشاركة ومن ثم إضافة للرئيسية لتركيب التطبيق!" 
        v-if="!add_to_home_screen_dismissed"
        @close="closed()"
    />
</template>
