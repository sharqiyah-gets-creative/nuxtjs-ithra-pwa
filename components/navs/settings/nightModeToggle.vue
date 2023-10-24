<script lang="ts" setup>
	const { $colorMode } = useNuxtApp();

	console.log('side.vue 🌙', $colorMode.preference);

	const isDark = computed({
		get() {
			return $colorMode.value === 'dark';
		},
		set() {
			$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark';
		},
	});

	console.log('navs/side.vue', '👍👍👍 isDark', isDark);

	const toggleIsDark = () => {
		console.log('navs/side.vue', '👍👍👍 toggleIsDark', isDark);
		isDark.value = !isDark.value;
	};
</script>
<template>
	<NavsSettingsItem @click="toggleIsDark" :title="$t('settings.darkmode')" class="cursor-pointer">
		<template #left-icon>
			<UToggle @click.stop color="my-sin" v-model="isDark" />
		</template>
		<template #right-icon>
			<UIcon name="i-heroicons-moon-20-solid" />
		</template>
	</NavsSettingsItem>
</template>
