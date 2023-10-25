<script lang="ts" setup>
	import { z } from 'zod';
    const toast = useToast()
	import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

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
            toast.add({id:'registering', title: 'جاري التسجيل!' })

            // Do something with data
            console.log('user/emailLogin.vue', 'event data', event.data);

            const user = await registerOrLogin(event.data.email, event.data.password);
            await setUser(user);

            console.log('user/emailLogin.vue', 'user', user, 'error', error);
            toast.remove('registering');
        } catch (error) {
            toast.remove('registering');
            console.log('user/emailLogin.vue', 'error', error);
            console.log(error)
            if(error == "Error: auth/email-already-in-use"){
                console.log('user/emailLogin.vue', error);
                toast.add({ color:'red', title:'خطأ!', description: 'معلومات تسجيل الدخول خاطئة!' })
            }
            else{
                toast.add({ color:'red', title:'خطأ!', description: 'حدث خطأ أثناء تسجيلك!' })
            }  
        }

	}

</script>
<template>
	<div class="text-3xl space-y-2 pb-4">
        <UForm :schema="schema" :state="state" @submit="submit" class="space-y-2" >
            <UFormGroup size="xl" label="البريد الإلكتروني" name="email">
                <UInput autocomplete="username" type="email" v-model="state.email" />
            </UFormGroup>
            <UFormGroup size="xl" label="كلمة المرور" name="password">
                <UInput type="password" autocomplete="current-password" v-model="state.password" />
            </UFormGroup>
            <UButton type="submit" class="w-full text-center !text-lg">إرسال</UButton>
        </UForm>
    </div>
</template>
