<script setup lang="ts">

</script>

<template>
  <div>
    <section id="x" class="md:px-0 py-4 standalone:pt-6">
      <UContainer class="flex justify-between">
        <h2 class="text-3xl font-black">
          استكشف
          <p class="block text-lg font-light">فعاليات المنطقة الشرقية</p>
        </h2>
        <NavigationTheSideMenu />
      </UContainer>
    </section>

    <section id="map" class="py-4">
      <UContainer>
        <MapsMap />
      </UContainer>
    </section>

    <Spacer />



    <eventsSection />
  </div>
</template>
