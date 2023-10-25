<script setup lang="ts">
	const { user } = useUserStore();
	const isOpen = ref(false);

    const avatarUi = {
        "background": "bg-gray-100 dark:bg-white-800 brightness-75",
        "text": "font-medium leading-none text-gray-900 dark:text-gray-800 truncate",
        "size": {
            "lg": "h-12 w-12 text-xl",
        },
    };

    const slideOverUi = {
        "background": "bg-white dark:bg-indigo-950",
    }
</script>

<template>
	<button v-if="user" class="cursor-pointer" @click="isOpen = true">
		<UAvatar :ui="avatarUi" size="lg" :src="user.photoURL!" class="cursor-pointer" alt="Avatar" />
	</button>

	<button v-else class="text-2xl text-slate-700 dark:text-slate-100 cursor-pointer" @click="isOpen = true">
		<UIcon name="i-heroicons-ellipsis-vertical" />
	</button>

	<USlideover :ui="slideOverUi"  :overlay="false" dir="ltr" v-model="isOpen" side="left" class="h-full">
		<div dir="rtl" class="flex flex-col h-full text-base">
			
            <div class="standalone-top-padding p-3 flex items-center justify-between flex-row-reverse mb-2">
				<h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">الإعدادات</h3>
				<UButton icon="i-heroicons-x-mark-20-solid" color="white" variant="ghost" class="-my-1" @click="isOpen = false" />
			</div>

			<div class="flex-1 mb-2 p-3">
                <ul class="flex flex-col text-xl">
                    <NavsSettingsNightModeToggle />
                    <NavsSettingsRefreshActivities />
                    <NavsSettingsLogin />
                </ul>
			</div>

			<div class="p-3 standalone-bottom-padding">
				<span class="font-thin"
					>تنفيذ <ULink class="font-normal" to="https://www.6degrees.com.sa/">الدرجات الست لتقنية المعلومات</ULink></span
				>
			</div>
		</div>
	</USlideover>
</template>
