<script setup lang="ts">
	defineProps(['title', 'description', 'additional_classes']);
</script>

<template>
	<header id="title" class="min-h-min py-2" :class="additional_classes">
		<UContainer class="space-y-2">
			<div class="flex justify-between">
				<h1 class="text-2xl font-black">
					{{ title }}
					<p class="block text-lg font-normal">{{ description }}</p>
				</h1>
				<NavsSide />
			</div>

			<div class="flex-none">
				<slot />
			</div>
		</UContainer>
	</header>
</template>
