import { isProduction } from './utils/helpers'

export default defineAppConfig({
    baseURL: isProduction ? 'http://localhost:1523/' : 'https://ithra.6degrees.com.sa/',
    ui: {
        icons: "all",
        container: {
            constrained: "max-w-7xl"
        }
    },
})
