<script lang="ts" setup>
import { getPosition } from '@/utils/helpers';

const store = useUserStore()

const isOpen = ref(true)

const userDismissedModal = store.position_alert_dismissed;
const userPosition = store.position;
console.log('userDismissedModal', userDismissedModal)

const dismiss = () => {
  store.setAlertDismissed(true);
  isOpen.value = false
}

const getLocation = async () => {
  const position: any = await getPosition({enableHighAccuracy: true});
  store.setPosition({lat: position.coords.latitude, lng: position.coords.longitude})
  console.log(position);
  isOpen.value = false
}

</script>

<template>
  <div>
    <UModal v-if="!userDismissedModal && !userPosition" v-model="isOpen">
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          تفعيل الموقع
        </template>
        قم بتفعيل الموقع لتتمكن من الحصول على معلومات أدق عن المبادرات حولك
        <template #footer>
          <div class="flex justify-start space-x-2">
            <UButton size="xl" label="تفعيل" @click="getLocation" />
            <UButton size="xl" label="إخفاء" variant="ghost" @click="dismiss" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>



