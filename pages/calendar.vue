<template>
  <div class="flex flex-col h-full text-white bg-violet-secondary-500  ">
    <NavsTop :title="$t('calendar')" :description="$t('calendar_page.description')" additional_classes="bg-violet-secondary-500" />

    <section id="calendar" class="flex-[1] overflow-auto py-6 flex h-full flex-col justify-center items-center">
      <UContainer class="">
        <div class=" space-y-8">
          <div>الشي الاول</div>
          <div>الشي الثاني</div>
          <div>الشي الثالث</div>
          <div>الشي الرابع</div>
        </div>
      </UContainer>
    </section>

    <!-- Bottom Navigation-->
    <NavsBottom />
  </div>
</template>
