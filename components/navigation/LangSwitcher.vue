
import { localeCodes } from '#build/i18n.options.mjs';
<script setup lang="ts">
const { locale, locales } = useI18n()
</script>

<template>
    <!-- button for language switching -->
    <div>
        <button
        v-for="lang in $i18n.locales"
        :key="lang.code"
        @click="$i18n.locale = lang.code"
        class="bg-blue-500 text-white p-2">{{ lang.name }}</button>
    </div>
</template>