<script setup lang="ts">
	const { signOut } = useAuth();
	const { user, clearUser } = useUserStore();

	const isOpen = ref(true);

	const signUserOut = () => {
		signOut();
		clearUser();
	};

	if (user) {
		console.log('navs/side.vue', '👍👍👍 user is authenticated', user, user.photoURL!);
	} else {
		console.log('navs/side.vue', '👎👎👎 user is not authenticated');
	}

</script>

<template>
	<UAvatar v-if="user" :src="user.photoURL!" size="lg" class="cursor-pointer" alt="Avatar" @click="isOpen = true" />
	
    <button v-else class="text-2xl text-slate-700 dark:text-slate-100" @click="isOpen = true">
		<UIcon name="i-heroicons-ellipsis-vertical" />
	</button>

	<USlideover :overlay="false" dir="ltr" v-model="isOpen" side="left" class="standalone:pt-8 h-full">
		<div dir="rtl" class="flex flex-col h-full">
			<div class="p-3 flex items-center justify-between flex-row-reverse mb-2">
				<h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">الإعدادات</h3>
				<UButton icon="i-heroicons-x-mark-20-solid" color="white" variant="ghost" class="-my-1" @click="isOpen = false" />
			</div>

			<div class="mb-2 p-3 flex-1">
				<van-cell-group inset>
					<van-cell center :title="$t('settings.darkmode')">
						<template #right-icon>
							<van-switch active-color="ffd21e" v-model="$colorMode.preference" />
						</template>
					</van-cell>

					<van-cell v-if="user" title="تقييماتي" />

					<van-cell v-if="user" @click="signUserOut" :title="$t('settings.logout')" description="" />

					<UserLogin v-else />
				</van-cell-group>
			</div>

			<div class="p-3">
				<span class="font-thin">تنفيذ <ULink class="font-normal" to="https://www.6degrees.com.sa/">الدرجات الست لتقنية المعلومات</ULink></span>
			</div>
		</div>
	</USlideover>
</template>
