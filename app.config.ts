const isProd = process.env.NODE_ENV === 'production';
export default defineAppConfig({
    baseURL: isProd ? 'http://localhost:3000/' : 'https://ithra-dev.6degrees.com.sa/',
    ui: {
        primary: 'violet',
        gray: 'cool',
        container: {
            constrained: "max-w-7xl"
        }
    }
})
