<script setup lang="ts">
console.log('index vue loaded')
onMounted(()=>{
  console.log('index vue mounted')
})
</script>

<template>
  <div class="relative scroll-y overscroll-auto">
    <NavsTop title="استكشف" description="فعاليات المنطقة الشرقية" />
    
    <mapsSection />

    <Spacer />
    
    <eventsSection />

    
  </div>
</template>
