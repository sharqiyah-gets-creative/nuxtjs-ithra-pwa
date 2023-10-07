// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  pages: true,
  
  devtools: {
    enabled: false
  },


  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-gtag',
    'nuxt-vuefire'
  ],

  vuefire: {
    config: {
      apiKey: process.env.GOOGLE_API_KEY,
      authDomain: process.env.GOOGLE_AUTH_DOMAIN,
      projectId: process.env.GOOGLE_PROJECT_ID,
      storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
      messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
      appId: process.env.GOOGLE_APP_ID,
      measurementId: process.env.GOOGLE_MEASUREMENT_ID
    },

    auth: {
      enabled: false
    },
  },

  css: ['~/assets/css/main.css'],

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },

  tailwindcss: {
    viewer: false
  },

  pwa: {
    meta:{
      name: "Ithraa",
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "black-translucent",
      lang: "ar",
      author: "6 Degrees Technologies"
    },
    manifest:{
      name: "الشرقية تبدع",
      short_name: "الشرقية تبدع",
      description: "Ithra - Sharqiya Gets Creative 2023",
      lang: "ar",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "standalone",
      start_url: "/",
    },
    workbox: {
      enabled: false,

    },
    icon: {
      
    }
  }
})
