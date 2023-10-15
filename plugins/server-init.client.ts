export default defineNuxtPlugin(async (nuxtApp) => {
    console.log('🟥 server-init.server.ts')
    if (!process.server){
        console.log('🟦 server-init.server.ts')
    }
    console.log('🟩 server-init.server.ts')
    
})