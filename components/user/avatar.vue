<script lang="ts" setup>
	const { user } = useUserStore();

</script>
<template>
  <button title="menu" v-if="user" class="cursor-pointer">
		<UAvatar size="lg" :src="user.photoURL" class="cursor-pointer" alt="Avatar" />
	</button>

	<button title="menu" v-else class="text-2xl text-slate-700 dark:text-slate-100 cursor-pointer">
		<UIcon name="i-heroicons-ellipsis-vertical" />
	</button>
</template>

