import { isProduction } from './utils/helpers'

export default defineNuxtConfig({
  pages: true,
  
  ssr: true, // default behavior
  
  devtools: {
    enabled: false
  },

  app:{
    head:{
      viewport: 'initial-scale=1, viewport-fit=cover, user-scalable=no, width=device-width',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  alias:{
    "#pwa": "./.nuxt/types/pwa"
  },

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-gtag'
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  runtimeConfig: {
    public: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      GOOGLE_AUTH_DOMAIN: process.env.GOOGLE_AUTH_DOMAIN,
      GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
      GOOGLE_STORAGE_BUCKET: process.env.GOOGLE_STORAGE_BUCKET,
      GOOGLE_MESSAGING_SENDER_ID: process.env.GOOGLE_MESSAGING_SENDER_ID,
      GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
      GOOGLE_MEASUREMENT_ID: process.env.GOOGLE_MEASUREMENT_ID,
      NUXT_PUBLIC_GTAG_ID: process.env.NUXT_PUBLIC_GTAG_ID,
    }
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
    meta: {
      name: "الشرقية تبدع",
      author: process.env.npm_package_author_name!,
      title: true,
      description: process.env.npm_package_description! || "Ithra - Sharqiya Gets Creative 2023",
      favicon: true,

      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "black-translucent",
      ogType: 'website',
      ogSiteName: true,
      ogTitle: true,
      ogDescription: true,
      ogImage: true,
      ogHost: undefined,
      ogUrl: true,
      twitterCard: 'summary',
      twitterSite: undefined,
      twitterCreator: undefined,

      lang: "ar",
    },
    manifest: {
      name: process.env.npm_package_name! || "الشرقية تبدع",
      short_name: process.env.npm_package_name! || "الشرقية تبدع",
      description: process.env.npm_package_description! || "Ithra - Sharqiya Gets Creative 2023",
      lang: "ar",
      start_url: `/?standalone=true`,
      background_color: "#ffffff",
      
      theme_color: "#ffffff",
      display: "standalone",
    },
    workbox: {
      enabled: false,

    },
    icon: {
      maskablePadding: 0,
      splash: {
        backgroundColor: "#ffffaa",
        targetDir: "splash",
        devices: []
      },
    }
  }
})
