
import { NavigationLangSwitcher } from '#build/components';
<template>
    <header>
        <div class="flex justify-between">
            <h1 class="bg-yellow-500 p-4">{{ $t('home_title') }}</h1>
            <NavigationLangSwitcher />
            
        </div>
    </header>
</template>