import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

export default <Partial<Config>> {
  mode: 'jit',

  content: [
    './docs/content/**/*.md',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],

  safelist: [
    {      pattern: /bg-(primary|secondary)-(violet|green|pink|yellow)/  }
  ],

  theme:{
    "fontFamily": {
      "sans": ["ithra", "Roboto", "sans-serif"],
      "serif": ["ithra", "Roboto Slab", "serif"],
      "mono": ["ithra", "Roboto Mono", "monospace"],
      "display": ["ithra", "Roboto", "sans-serif"],
      "body": ["ithra", "Roboto", "sans-serif"] 
    },
    extend: {
      colors:{
        "primary-violet":   "#2A1B51",
        "secondary-violet": "#5956A5",

        "primary-yellow":   "#FDB72B",
        "secondary-yellow": "#FDDC7F",

        "primary-pink":     "#D68FBE",
        "secondary-pink":   "#BE4255",

        "primary-green":    "#3E9C8E",  
        "secondary-green":  "#7AC9BE",
      },
      screens:{
        standalone: { raw: "(display-mode: standalone)" }
      }
    },
    variants: {
      space: ['responsive', 'direction'],
    },
    
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),

    plugin(function({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ],
}