// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from 'nuxt/config'
const isProd = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },

  app: {
    baseURL: isProd ? '/nuxtjs-ithraa-pwa/' : '/',
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@kevinmarrec/nuxt-pwa',
  ],

  css: ['~/assets/css/main.css'],
  
  i18n: {
    langDir: "locales/",
    lazy: true,
    strategy: 'prefix_except_default',
    defaultLocale: "en",
    locales: [
        {
          code: "en",
          iso: "en-US",
          name: "English",
          file: "en-US.json",
        },
        {
          code: "ar",
          iso: "ar-SA",
          name: "عربي",
          file: "ar-SA.json",
        },
      ],
  },

  pwa: {
    workbox: {
      enabled: true
    }
  }
  
  

})
