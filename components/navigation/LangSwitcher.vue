
<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

</script>

<template>
    <!-- button for language switching -->
    
    <div>
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
            locale.name
        }}</NuxtLink>
    </div>
</template>