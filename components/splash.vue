<template>
  <div class="h-screen fade-in-enter-active flex flex-col justify-center items-center space-y-4 absolute w-full top-0 left-0 right-0 z-50 bg-black animate-bg">
    <div>
      <img src="@/assets/images/logo-white.png" alt="logo" class="h-32" />
    </div>
    <div>
      <UIcon class="animate-spin" name="i-heroicons-light-bulb" />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style>
@keyframes change-bg-color {
  0% { background-color: #FBBF24; }
  25% { background-color: #3B82F6; }
  50% { background-color: #10B981; }
  75% { background-color: #EC4899; }
  100% { background-color: #FBBF24; }
}

.animate-bg {
  animation: change-bg-color 5s infinite;
}

</style>


