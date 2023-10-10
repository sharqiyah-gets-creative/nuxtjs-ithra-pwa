import { isProduction } from './utils/helpers'

export default defineAppConfig({
    baseURL: isProduction ? 'http://localhost:3000/' : 'https://ithra-dev.6degrees.com.sa/',
    ui: {
        primary: 'violet',
        modal: {
        },
        gray: 'cool',
        container: {
            constrained: "max-w-7xl"
        }
    },
})
