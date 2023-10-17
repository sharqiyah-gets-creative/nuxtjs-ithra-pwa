<script setup lang="ts">

console.log('index vue loaded')
onMounted(()=>{
  console.log('index vue mounted')
})
</script>

<template>
  <div class="flex-1 relative">
    <NavsTop title="استكشف" description="فعاليات المنطقة الشرقية" additional_classes="bg-slate-100 dark:bg-[#0E091B]">
      <NavsSearch />
    </NavsTop>
    
    <MapsSection />

    <Spacer /> 
     
    <EventsSection />

    <AlertsPosition />

  </div>
</template>
