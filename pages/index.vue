<template>
    <div>
        <NavigationTheHeader />
        <section class="py-6">
            <UContainer>
                <div class="h-12 bg-[url(~/assets/images/wave-pattern.png)] bg-contain bg-right -ms-12 bg-no-repeat"></div>
            </UContainer>   
        </section>
        <section id="x" class="md:px-0 py-4">
            <UContainer>
                <h2 class="text-3xl font-black">استكشف<p class="block font-2xl font-light">فعاليات المنطقة الشرقية</p></h2>
            </UContainer>
            
        </section>
        <section class="py-4">
        </section>

        <section id="map" class="py-4">
            <UContainer>
                <MapsMap />
            </UContainer>
            
        </section>

        <section id="events" class="py-4">
            <UContainer class="space-y-8">
                <Event />
                <Event />
                <Event />
            </UContainer>
        </section>
    </div>
</template>
