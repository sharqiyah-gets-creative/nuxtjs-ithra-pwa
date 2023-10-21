import ar from '@/locales/vant/ar-SA';
import { Locale } from 'vant';
	
export default defineNuxtPlugin(() => {
    Locale.use('ar-SA', ar);
})
