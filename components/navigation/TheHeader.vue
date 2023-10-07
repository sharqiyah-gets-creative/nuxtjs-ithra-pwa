<template>
    <header>
        <UContainer class="flex justify-between">
            <h1>
                <NuxtLink to="/" class="text-white">
                    <img src="~/assets/images/logo-white.png" height="150" class="h-12 md:h-20" alt="Alsharqiya Gets Creative" />
                    <span class="sr-only">{{ $t("home_title") }}</span>
                    {{ $t("home_title") }}
                </NuxtLink>
            </h1>

            <NavigationTheSideMenu />

            <!-- <NavigationLangSwitcher />-->
        </UContainer>
    </header>
</template>

<script setup></script>
