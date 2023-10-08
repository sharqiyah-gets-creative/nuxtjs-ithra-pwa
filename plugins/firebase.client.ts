import { initializeApp, FirebaseOptions, FirebaseApp } from 'firebase/app'
//import { getAuth } from "firebase/auth"
import { getFirestore, Firestore } from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(() => {
  
    const config = useRuntimeConfig();

    const firebaseConfig: FirebaseOptions = {
      apiKey:           config.public.GOOGLE_API_KEY,
      authDomain:       config.public.GOOGLE_AUTH_DOMAIN,
      projectId:        config.public.GOOGLE_PROJECT_ID,
      storageBucket:    config.public.GOOGLE_STORAGE_BUCKET,
      messagingSenderId: config.public.GOOGLE_MESSAGING_SENDER_ID,
      appId:            config.public.GOOGLE_APP_ID,
      measurementId:    config.public.GOOGLE_MEASUREMENT_ID
    };

    const app: FirebaseApp = initializeApp(firebaseConfig)

    const firestore: Firestore = getFirestore(app)

    return {
      provide: {
        firestore: firestore,
        hello: (msg: string) => `Hello ${msg}!`
        //auth: auth
      },
      vueApp: {
        provide: {
          firestore: firestore,
          //auth: auth
        }
      }
    }
})