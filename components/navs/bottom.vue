<template>
	<div class="bg-white border-t border-gray-200 dark:bg-valhalla-500 dark:border-gray-600">
		<div class="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
			<NavsBottomNavLink :title="$t('activity', 0)" icon="i-mdi-home" link="/" />

			<!--<NavsBottomNavLink :title="$t('calendar')" icon="i-mdi-calendar" link="/calendar" />-->

			<NavsBottomNavLink :title="$t('about')" icon="i-mdi-help-circle" link="/about" />
		</div>
	</div>
</template>
