import { useEventsStore } from "~/store/events";

export default defineNuxtPlugin(async (nuxtApp) => {
    console.log('🟥 server-init.server.ts')
    if (!process.server){
        console.log('🟦 server-init.server.ts')
        //return;
    }
    console.log('🟩 server-init.server.ts')
    

    const store = useEventsStore();
    await store.boot();

    
})