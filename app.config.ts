import { isProduction } from './utils/helpers'

export default defineAppConfig({
    baseURL: isProduction ? 'http://localhost:3000/' : 'https://ithra-dev.6degrees.com.sa/',
    ui: {
        icons: "all",
        primary: 'violet',
        modal: {
        },
        badge: {
            color:{
                black: {
                   solid: 'ring-0 text-gray-900 dark:text-white bg-white dark:bg-gray-900 dark:bg-opacity-20'
                }
              }
        },
        gray: 'cool',
        container: {
            constrained: "max-w-7xl"
        }
    },
})
