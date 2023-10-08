
import { defineNuxtPlugin } from "nuxt/app"
import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore/lite';

export default defineNuxtPlugin(async nuxtApp => {
    const firebaseConfig = {
      apiKey: process.env.GOOGLE_API_KEY,
      authDomain: process.env.GOOGLE_AUTH_DOMAIN,
      projectId: process.env.GOOGLE_PROJECT_ID,
      storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
      messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
      appId: process.env.GOOGLE_APP_ID,
      measurementId: process.env.GOOGLE_MEASUREMENT_ID
    };
  
    const app = initializeApp(firebaseConfig);
    console.log(app);
    const db: Firestore = getFirestore(app);
    console.log(db);
  
    // Inject db into the Nuxt context so you can access it in your pages
    nuxtApp.provide('db', db);
  });
  


