
import { NavigationLangSwitcher } from '#build/components';
<template>
    <header class="container mx-auto">
        <div class="flex justify-between">
            <h1 class="bg-green-400 py-1 px-2 rounded-lg">{{ $t('home_title') }}</h1>
            <NavigationLangSwitcher />
        </div>
    </header>
</template>