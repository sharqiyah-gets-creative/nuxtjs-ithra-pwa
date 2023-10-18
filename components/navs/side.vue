<template>

    <UAvatar v-if="user" :src="user.photoURL" size="lg" class="cursor-pointer"  alt="Avatar" @click="isOpen = true" />
    <button v-else  class="text-2xl" @click="isOpen = true">
        <UIcon name="i-heroicons-ellipsis-vertical" />
    </button>

    <USlideover :overlay="false" dir="ltr" v-model="isOpen" side="left" class="standalone:pt-8">
        <UCard dir="rtl" class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-between flex-row-reverse">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">مرحباً بك</h3>
                    <UButton color="white" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                </div>
            </template>

            <!-- Content -->
            <ClientOnly>
                <ul class="divide-y divide-slate-600 divide">
                    <van-cell  center title="الوضع المسائي">
                        <template #right-icon>
                            <van-switch active-color="ffd21e" v-model="isDark" />
                        </template>
                    </van-cell>

                    <li @click="isDark = !isDark" class="flex justify-start items-center py-4 cursor-pointer">
                        <NavsSideLink :title="isDark ? 'تشغيل الوضع النهاري' :'تشغيل الوضع الليلي'" description="تقييماتك للمبادرات (يتطلب تسجيل دخول)" :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" />
                    </li>

                    <li v-if="user" class="flex justify-start items-center py-4 cursor-pointer">
                        <NavsSideLink title="تقييماتي" description="تقييماتك للمبادرات" icon="i-heroicons-user-solid" />
                    </li>

                    <li v-if="user" @click="signUserOut" class="flex justify-start items-center py-4 dark:text-red-400 cursor-pointer">
                        <NavsSideLink title="تسجيل الخروج" description="" icon="i-heroicons-user-solid" />
                    </li>

                    <li v-else class="flex justify-start items-center py-4 cursor-pointer">
                        <UserLogin />
                    </li>


                    


                </ul>
                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly>

            <template #footer>
                <span class="font-thin">تنفيذ <ULink to="https://www.6degrees.com.sa/">الدرجات الست لتقنية المعلومات</ULink></span>
            </template>
        </UCard>
    </USlideover>
</template>

<script setup lang="ts">
const userStore = useUserStore();
const user = ref(userStore.user);

const { signOut } = useAuth();

const isOpen = ref(false);
const colorMode = useColorMode();

const signUserOut = () => {
    signOut();
    userStore.clearUser();
}

if(user.value){
    console.log('👍👍👍 user is authenticated', user.value)
    console.log('user image url', toRaw(user.value).photoURL)
}
else{
    console.log('👎👎👎 user is not authenticated')
}

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>
