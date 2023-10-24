import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import colors from "tailwindcss/colors";


export default <Partial<Config>>{
	mode: 'jit',

	content: [
        './docs/content/**/*.md', 
        './components/**/*.{js,vue,ts}', 
        './layouts/**/*.vue', 
        './pages/**/*.vue', 
        './plugins/**/*.{js,ts}', 
        './app.vue', 
        './node_modules/flowbite/**/*.{js,ts}',
        "./node_modules/vue-tailwind-datepicker/**/*.js",
    ],

	safelist: [{ pattern: /^bg-/ }, { pattern: /^text-/}],

	theme: {
		fontFamily: {
			sans: ['ithra', 'sans-serif'],
			serif: ['ithra', 'serif'],
			mono: ['ithra', 'monospace'],
			display: ['ithra', 'sans-serif'],
			body: ['ithra', 'sans-serif'],
		},
		extend: {
			colors: {
                "vtd-primary": colors.sky, // Light mode Datepicker color
                "vtd-secondary": colors.gray, // Dark mode Datepicker color

                'valhalla': {
                    '50': '#edeeff',
                    '100': '#dfdfff',
                    '200': '#c5c5ff',
                    '300': '#a6a2ff',
                    '400': '#8c7dfc',
                    '500': '#7c5ff5',
                    '600': '#6f41ea',
                    '700': '#6133cf',
                    '800': '#4e2ca7',
                    '900': '#422b84',
                    '950': '#2a1b51',
                },

                'my-sin': {
                    '50': '#fffaeb',
                    '100': '#fef0c7',
                    '200': '#fee189',
                    '300': '#feca4b',
                    '400': '#fdb72b',
                    '500': '#f79209',
                    '600': '#db6b04',
                    '700': '#b64a07',
                    '800': '#93390d',
                    '900': '#792f0e',
                    '950': '#461602',
                },

			},
			screens: {
				standalone: { raw: '(display-mode: standalone)' },
			},
		},
		variants: {
			space: ['responsive', 'direction'],
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('flowbite/plugin'),
        require("@tailwindcss/forms"),
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		}),
	],
};
