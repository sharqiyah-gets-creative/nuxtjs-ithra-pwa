<template>
  <section id="map" class="py-4">
      <UContainer>
        <UCard :ui="{header:{padding:'p-0'}}">
          <template #header>
            <MapsMap />
          </template>
          <div class="grid grid-cols-2 divide-x divide-x-reverse">
            <div class="flex flex-col justify-center items-center">
              <div class="text-3xl font-bold">540</div>
              <div class="text-lg">فعالية</div>
            </div>

            <div class="flex flex-col justify-center items-center">
              <div class="text-3xl font-bold">300</div>
              <div class="text-lg">جهة</div>
          </div>
          </div>
          
        </UCard>
      </UContainer>
  </section>
</template>
