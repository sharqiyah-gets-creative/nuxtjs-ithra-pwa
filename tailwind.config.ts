import type { Config } from 'tailwindcss'
export default <Partial<Config>> {
  content: [
    './docs/content/**/*.md',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
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
        "primary-violet": "#2A1B51",
        "primary-yellow": "#FDB72B",
        "primary-pink": "#D68FBE",
        "secondary-green": "#7AC9BE",
        "secondary-violet": "5956A5",
        "secondary-pink": "#BE4255",

      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}