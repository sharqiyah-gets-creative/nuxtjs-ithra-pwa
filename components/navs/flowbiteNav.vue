<template>
  <div
    class="sticky bottom-0 z-30 w-full bg-white border-t border-gray-200 dark:bg-primary-violet dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">

      <NavsBottomNavLink
        title="المبادرات"
        icon="i-mdi-home"
        link="/"
      />

      <NavsBottomNavLink
        title="الروزنامة"
        icon="i-mdi-calendar"
        link="/calendar"
      />

      <NavsBottomNavLink
        title="نبذة"
        icon="i-mdi-help-circle"
        link="/about"
      />
    </div>
  </div>
</template>
