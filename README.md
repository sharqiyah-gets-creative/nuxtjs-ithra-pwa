# Nuxt 3 Alsharqiya Gets Creative 2023

This is a Nuxt 3 PWA project for Alsharqiya Gets Creative 2023 (Ithraa).

## Develop & Build

```bash
# Start the development server on `http://localhost:3000`
pnpm run dev
# Build the application for production:
pnpm run build
# Locally preview production build
pnpm run preview
```

## Considerations

- Try the icon generator on <https://vite-pwa-org.netlify.app/assets-generator/> to generate icons for your PWA.
- <https://web.dev/learn/pwa>

## Using

- pwa-module - <https://pwa.nuxtjs.org/workbox>
- tailwindcss - <https://tailwindcss.com/>
- Nuxt UI - <https://ui.nuxt.com/>
- headless ui - <https://headlessui.dev/>
- volta - <https://volta.net/>

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