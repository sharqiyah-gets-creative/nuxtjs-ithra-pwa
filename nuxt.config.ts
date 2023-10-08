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
    'nuxt-gtag'
  ],

  plugins: [
    { src: '~/plugins/install-prompt.ts', mode: 'client' },
    { src: '~/plugins/firebase.ts'}
  ],

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
      appleStatusBarStyle: false,
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
      start_url: `https://ithra-def.6degrees.com.sa/?standalone=true`,
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
