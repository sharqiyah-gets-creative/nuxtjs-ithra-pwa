<template>

    <UButton color="white" size="sm"  variant="ghost" @click="isOpen = true">
        <UAvatar icon="i-heroicons-arrow-right-on-rectangle" size="lg" class=""  alt="Avatar" @click="isOpen = true" />
    </UButton>

    <USlideover dir="ltr" v-model="isOpen" side="left" class="standalone:pt-8">
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
                    
                    <li @click="isDark = !isDark" class="flex justify-start items-center py-4">
                        <NavsSideLink :title="isDark ? 'تشغيل الوضع النهاري' :'تشغيل الوضع الليلي'" description="تقييماتك للمبادرات (يتطلب تسجيل دخول)" :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" />
                    </li>

                    <li v-if="!user" class="flex justify-start items-center py-4">
                        <UserLogin />
                    </li>
                    <li v-else @click="signUserOut" class="flex justify-start items-center py-4">
                        <span class="text-xl font-bold">أهلا {{ user.name }}</span>
                        <NavsSideLink title="تسجيل الخروج" description="" icon="i-heroicons-user-solid" />
                    </li>


                    <li class="flex justify-start items-center py-4">
                        <NavsSideLink title="تقييماتي" description="تقييماتك للمبادرات (يتطلب تسجيل دخول)" icon="i-heroicons-user-solid" />
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
console.countReset('👍👍👍 components/navs/side.vue');
console.count('👍👍👍 components/navs/side.vue');
console.count('👍👍👍 components/navs/side.vue');
import { useUserStore } from '~/store/user';
console.count('👍👍👍 components/navs/side.vue');
const userStore = useUserStore();
console.count('👍👍👍 components/navs/side.vue');
const user = userStore.user;
console.count('👍👍👍 components/navs/side.vue');

const { signOut } = useAuth();

console.count('👍👍👍 components/navs/side.vue');
const isOpen = ref(false);
const colorMode = useColorMode();
console.count('👍👍👍 components/navs/side.vue');
const signUserOut = () => {
    signOut();
    userStore.clearUser();
}

if(user){
    console.log('👍👍👍 user is authenticated')
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
