export default defineNuxtConfig({
	pages: true,
	ssr: false, // default behavior
	devtools: { enabled: false },
	experimental: { viewTransition: true },
	typescript: { shim: false },
	imports: { dirs: ['stores'] },
    css: ['~/assets/css/main.scss'],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
    },    
    
    // env configs
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
		},
	},

    // app settings
	app: {
        baseURL: '/',
		head: {
			viewport: 'initial-scale=1,user-scalable=no, viewport-fit=cover, width=device-width',
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	modules: [
		'@nuxt/ui',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/i18n',
		'@kevinmarrec/nuxt-pwa',
		'nuxt-gtag',
		'@emanuele-em/nuxt-swipe',
		'@vant/nuxt',
	],

    // ui.nuxt.com
    ui: {
        global: true,
        icons: "all",
    },

    // pinia
	pinia: {},
	devServer: {
		port: 1523,
	},

    // pinia persisted state
	piniaPersistedstate: {
		storage: 'localStorage',
		debug: true,
	},

    // nuxt i18n
	i18n: {
		vueI18n: './i18n.config.ts',
	},

    // tailwindcss
	tailwindcss: {
		viewer: false,
	},

    // pwa
	pwa: {
		meta: {
			name: 'الشرقية تبدع',
			author: process.env.npm_package_author_name!,
			title: true,
			description: process.env.npm_package_description! || 'Ithra - Sharqiya Gets Creative 2023',
			favicon: true,

			mobileApp: true,
			mobileAppIOS: true,
			appleStatusBarStyle: 'black-translucent',
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
			lang: 'ar',
		},
		manifest: {
			name: process.env.npm_package_name! || 'الشرقية تبدع',
			short_name: 'الشرقية تبدع',
			description: process.env.npm_package_description! || 'Ithra - Sharqiya Gets Creative 2023',
			lang: 'ar',
			start_url: `/?standalone=true`,
			background_color: '#2A1B51',
			theme_color: '#2A1B51',
			display: 'standalone',
		},
		workbox: {
			enabled: false,
		},
		icon: {
			maskablePadding: 0,
			splash: {
				backgroundColor: '#7AC9BE',
				targetDir: 'splash',
				devices: [],
			},
		},
	},
});
