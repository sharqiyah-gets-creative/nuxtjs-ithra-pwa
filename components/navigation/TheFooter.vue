<template>
    <footer class="bg-black sticky bottom-0 py-4 font-light">
        <UContainer class="grid grid-cols-3">
            <ULink to="/" class="p-1 flex flex-col gap-2 rounded-xl items-center hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <UIcon name="i-heroicons-exclamation-circle-solid" class="text-3xl" />
                <span>نبذة</span>
            </ULink>

            <ULink to="/" class="p-1 flex flex-col gap-2 rounded-xl items-center opacity-50 hover:opacity-100 transition-all duration-300">
                <UIcon name="i-heroicons-calendar-solid" class="text-3xl" />
                <span>الروزنامة</span>
            </ULink>

            <ULink to="/" class="p-1 flex flex-col gap-2 rounded-xl items-center opacity-50 hover:opacity-100 transition-all duration-300">
                <UIcon name="i-heroicons-home-solid" class="text-3xl" />
                <span>المبادرات</span>
            </ULink>
        </UContainer>
    </footer>
</template>
