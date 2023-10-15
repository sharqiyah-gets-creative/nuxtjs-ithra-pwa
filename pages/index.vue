<script setup lang="ts">
console.log('index vue loaded')
onMounted(()=>{
  console.log('index vue mounted')
})
</script>

<template>
  <div class="flex-1 relative">
    <NavsTop title="استكشف" description="فعاليات المنطقة الشرقية" />
    
    <mapsSection />
    <Spacer />  
    <eventsSection />

  </div>
</template>
