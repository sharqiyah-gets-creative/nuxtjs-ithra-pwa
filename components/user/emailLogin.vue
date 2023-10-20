<script lang="ts" setup>
	import { z } from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

    const show = ref(false);
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
		// Do something with data
		console.log('user/emailLogin.vue', 'event data', event.data);

		const user = await registerOrLogin(event.data.email, event.data.password);
		setUser(user);

		console.log('user/emailLogin.vue', 'user', user, 'error', error);
	}
</script>
<template>
	<div>

        <MyButton title="سجل دخولك بالبريد الإلكتروني" icon="i-heroicons-envelope" @click="show = true" />

        <van-action-sheet class="!bg-slate-900" theme="dark" v-model:show="show" title="تسجيل الدخول بالبريد الإلكتروني">
            <div class="p-4 space-y-2 max-w-md mx-auto">
                <UForm :schema="schema" :state="state" @submit="submit" class="text-xl space-y-2 flex flex-col justify-between h-full">
				<div>
					<UFormGroup size="xl" label="البريد الإلكتروني" name="email">
						<UInput type="email" v-model="state.email" />
					</UFormGroup>

					<UFormGroup size="xl" label="كلمة المرور" name="password">
						<UInput type="password" v-model="state.password" />
					</UFormGroup>
				</div>

				<UButton type="submit" class="w-full text-center !text-lg">إرسال</UButton>
			</UForm>
            </div>
        </van-action-sheet>

	</div>
</template>
