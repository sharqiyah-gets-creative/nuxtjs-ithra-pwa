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
                        <UIcon class="me-3" :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" />
                        <span>{{ isDark ? "تشغيل الوضع النهاري" : "تشغيل الوضع الليلي" }}</span>
                    </li>

                    <li @click="isDark = !isDark" class="flex justify-start items-center py-4">
                        <UIcon class="me-3" name="i-heroicons-user-solid" color="gray" aria-label="Theme" />
                        <span>
                            تسجيل الدخول
                            <small class="text-slate-400 sm block">سجل دخولك لتقوم بتقييم تجاربك</small>
                        </span>
                    </li>

                    <li @click="isDark = !isDark" class="flex justify-start items-center py-4">
                        <UIcon class="me-3" name="i-heroicons-user-solid" color="gray" />
                        <span>تقييماتي</span>
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

<script setup>
const isOpen = ref(false);

const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>
