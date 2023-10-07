import en from '~/locales/en.json'
import ar from '~/locales/ar.json'

export default defineI18nConfig(() => ({
    legacy: false,
    
    //locale: "ar",
    langDir: "locales/",
    lazy: true,
    defaultDirection: "rtl",
    locale: "ar",
    
    strategy: 'prefix_except_default',
    defaultLocale: "ar", 
    messages: {
        ar, en
    },
    locales: [
        {
            code: "en",
            iso: "en-US",
            name: "English",
            file: "en.json",
        },
        {
            code: "ar",
            iso: "ar-SA",
            name: "عربي",
            file: "ar.json",
            dir: "rtl",
            direction: "rtl"
        },
    ],

}))