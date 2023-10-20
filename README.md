# Nuxt 3 Alsharqiya Gets Creative 2023

This is a Nuxt 3 PWA project for Alsharqiya Gets Creative 2023 (Ithraa).

## Develop & Build

```bash
# Start the development server on `http://localhost:3000`
pnpm dev

# Build the application for production:
pnpm build

# Locally preview production build
pnpm preview

# Clean caches and types
pnpm clean
```

## Features

- [x] PWA
- [ ] Offline Mode
- [ ] Push Notifications
- [ ] Add to Home Screen
- [ ] Splash Screen
- [x] Dark Mode

## Technology

- Nuxt 3.7 - Client Side Rendering
- Typescript
- @kevinmarrec/nuxt-pwa - PWA Module
- Nuxt UI - TailwindCSS / Headless UI
- Firebase (Auth, Firestore, Storage)
- Google Analytics
- GitHub - Actions / Pages
- Pinia - State Management
- Changesets - Versioning and Changelog
- i18n - Internationalization

## Using

- pwa-module - <https://pwa.nuxtjs.org/workbox>
- tailwindcss - <https://tailwindcss.com/>
- Nuxt UI - <https://ui.nuxt.com/>
- headless ui - <https://headlessui.dev/>
- volta - <https://volta.net/>
- Enabled Takeover mode - <https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode>
- Custom Tailwind Colors - <https://uicolors.app/create>

## TODO

- [ ] <https://web.dev/learn/pwa>
- [ ] <https://www.youtube.com/watch?v=TfKDkErJUtk&t=1031>
- [ ] Consider animate.css - <https://animate.style/>
- [x] 8 Tips to Make Your Website Feel Like an iOS App - <https://www.youtube.com/watch?v=KzvK809rl3Q>
- [x] boot method of store - <https://stackoverflow.com/questions/72497896/how-to-implement-nuxtserverinit-action-to-load-data-from-server-side-on-the-init>
- [x] Override UI Settings - <https://github.com/nuxt/ui/blob/dev/src/runtime/ui.config.ts>
- [x] V8 to V9 Firestore Migration - <https://fireship.io/lessons/firebase-v9-migration/>
- [x] custom tailwind variant `hocus` - <https://stackoverflow.com/questions/74350677/hover-or-focus-in-tailwind-css>
- [x] Transition API
- [x] Consider fontaine
- [x] Move fonts to Public folder - <https://nuxt.com/docs/getting-started/styling#working-with-fonts>
- [x] Flowbite - <https://flowbite.com/docs/getting-started/introduction>
- [x] [canceled] Try the icon generator on <https://vite-pwa-org.netlify.app/assets-generator/> to generate icons for your PWA.
- [x] [canceled] Passwordless Auth - <https://firebase.google.com/docs/auth/web/email-link-auth?hl=en&authuser=0>
- [x] <https://chat.openai.com/c/e903c3c9-1b31-4fd8-b107-18f616cbdee9>
- [x] <https://stackoverflow.com/questions/51160348/pwa-how-to-programmatically-trigger-add-to-homescreen-on-ios-safari/51160938#51160938>

```js
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
  ```
  