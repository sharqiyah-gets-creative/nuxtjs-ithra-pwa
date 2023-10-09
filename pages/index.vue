
<script setup lang="ts">
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";


onMounted(()=>{
    //const { $hello } = useNuxtApp()
    const nuxtApp = useNuxtApp()
    const config = nuxtApp.$config;

    const { firestore } = useFirebase(config);


})
</script>

<template>
    <div>
        <section id="x" class="md:px-0 py-4">
            <UContainer>
                <h2 class="text-3xl font-black">استكشف<p class="block font-2xl font-light">فعاليات المنطقة الشرقية</p></h2>
            </UContainer>
        </section>

        <section id="map" class="py-4">
            <UContainer>
                <MapsMap />
            </UContainer>
        </section>

        <Spacer />

        <section id="events" class="py-4">
            <UContainer class="space-y-8">
                <Event name="أسبوع التقنية" header_class="bg-primary-violet text-white" location="الخبر قليو" timing="10:00 AM إلى 10:00 PM" />
                <Event name="موضوع ثاني" header_class="bg-primary-yellow text-white" location="الخبر قليو" timing="10:00 AM إلى 10:00 PM" />
                <Event name="أسبوع التقنية" header_class="bg-secondary-pink text-white" location="الخبر قليو" timing="10:00 AM إلى 10:00 PM" />
                <Event name="موضوع ثاني" header_class="bg-primary-pink text-white" location="الخبر قليو" timing="10:00 AM إلى 10:00 PM" />
                <Event name="أسبوع التقنية" header_class="bg-secondary-green text-white" location="الخبر قليو" timing="10:00 AM إلى 10:00 PM" />
                <Event name="موضوع ثاني" header_class="bg-secondary-violet text-white" location="الخبر قليو" timing="10:00 AM إلى 10:00 PM" />
            </UContainer>
        </section>
    </div>
</template>


