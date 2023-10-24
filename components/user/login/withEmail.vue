<script lang="ts" setup>
	import { z } from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
    import { showLoadingToast } from 'vant';


    const showEmailModal = ref(false);
	const { setUser } = useUserStore();
	const { registerOrLogin, error } = useAuth();

	const schema = z.object({
		email: z.string().email('Invalid email'),
		password: z.string(),
	});

	const state = reactive({
		email: undefined,
		password: undefined,
	});

	async function submit(event: FormSubmitEvent<Schema>) {
        try {
            showLoadingToast({
                message: 'جاري التسجيل...',
                forbidClick: true,
            });


            // Do something with data
            console.log('user/emailLogin.vue', 'event data', event.data);

            const user = await registerOrLogin(event.data.email, event.data.password);
            await setUser(user);

            console.log('user/emailLogin.vue', 'user', user, 'error', error);
            closeToast();
        } catch (error) {
            closeToast();
            console.log('user/emailLogin.vue', 'error', error);
            console.log(error)
            if(error == "Error: auth/email-already-in-use"){
                console.log('user/emailLogin.vue', error);
                showFailToast({ message: 'معلومات تسجيل الدخول خاطئة', wordBreak: 'break-word' });
            }
            else{
                showFailToast({ message: 'حدث خطأ أثناء تسجيلك', wordBreak: 'break-word' });
            }  
        }

	}
</script>
<template>
	<UForm :schema="schema" :state="state" @submit="submit" class="text-xl space-y-2 flex flex-col justify-between h-full">
            <UFormGroup size="xl" label="البريد الإلكتروني" name="email">
                <UInput type="email" v-model="state.email" />
            </UFormGroup>

            <UFormGroup size="xl" label="كلمة المرور" name="password">
                <UInput type="password" v-model="state.password" />
            </UFormGroup>
        <UButton type="submit" class="w-full text-center !text-lg">إرسال</UButton>
    </UForm>
</template>
