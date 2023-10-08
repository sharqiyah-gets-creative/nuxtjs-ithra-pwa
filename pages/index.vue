
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


<script setup lang="ts">
import { useNuxtApp } from '#imports'
import { Firestore, collection, getDocs } from 'firebase/firestore/lite';

const { $db } = useNuxtApp();

const db = $db;


const getEvents = async () => {
    const eventsCollection = collection(db, 'events');
    const eventsSnapshot = await getDocs(eventsCollection);
    return eventsSnapshot.docs.map(doc => doc.data());
}

const events = await getEvents();
console.log(events);

</script>
