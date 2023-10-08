<template>
    <header class="py-2 sticky top-0 border-b border-slate-600 dark:bg-[#0E091B] z-10">
        <UContainer class="flex justify-between">
            <h1 class="text-lg">
                <NuxtLink to="/" class="text-white flex items-center">
                    <UAvatar src="icon.png" size="sm" class="me-2"  alt="Avatar" />
                    <span class="font-light">{{ $t("home_title") }}</span>
                </NuxtLink>
            </h1>

            <NavigationTheSideMenu />

            <!-- <NavigationLangSwitcher />-->
        </UContainer>
    </header>
</template>

<script setup></script>
