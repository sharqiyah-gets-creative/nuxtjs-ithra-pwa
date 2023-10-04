// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtConfig } from 'nuxt/config'
const isProd = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: isProd ? '/nuxtjs-ithraa-pwa/' : '/',
  },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/i18n',],
  css: ['~/assets/css/main.css'],
  i18n: {
    legacy: false,
    locale: 'en',
    lazy: true,
    langDir: "locales/",
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
    registerWebManifestInRouteRules: true,
    base: isProd ? '/nuxtjs-ithraa-pwa/' : '/',
    manifest: {
      name: "Alsharqiya Gets Creative",
      short_name: "Alsharqiya Gets Creative",
      description: "Alsharqiya Gets Creative Events Calendar",
      theme_color: "#00ff00",
      
      icons: [
        {
          "src": "assets/images/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "assets/images/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "assets/images/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "assets/images/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "assets/images/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "assets/images/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "assets/images/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },

      ],
    },
    workbox:{
      navigateFallback: '/',
      globPatterns: ["**/*.{js,ts,css,html}"],
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }

})
