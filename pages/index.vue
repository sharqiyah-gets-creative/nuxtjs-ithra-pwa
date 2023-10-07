<template>
    <NuxtLayout>
        <NavigationHeader />
        <section>
            <div class="container mx-auto">
                <div class="h-12 bg-[url(~/assets/images/wave-pattern.png)] bg-contain bg-right -ms-12 bg-no-repeat"></div>
            </div>
            
        </section>
        <section id="x" class="py-4">
            <div class="container mx-auto">
                <h2 class="text-4xl font-black">استكشف<p class="block font-3xl font-light">فعاليات المنطقة الشرقية</p></h2>
            </div>
            
        </section>
        <section>
        </section>

        <section id="map">
            <Maps />
        </section>
    </NuxtLayout>
</template>
