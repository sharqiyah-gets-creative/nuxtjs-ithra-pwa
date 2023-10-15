<script setup lang="ts">

console.log('index vue loaded')
onMounted(()=>{
  console.log('index vue mounted')
})
</script>

<template>
  <div class="flex-1 relative">
    <NavsTop title="استكشف" description="فعاليات المنطقة الشرقية" additional_classes="dark:bg-[#0E091B]" />
    
    <MapsSection />

    <Spacer /> 
     
    <EventsSection />

  </div>
</template>
