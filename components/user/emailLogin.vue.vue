<script lang="ts" setup>
	import { z } from 'zod';
	import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
	import { useUserStore } from '~/store/user';
	const store = useUserStore();
	const { registerOrLogin, error } = useAuth();

	const schema = z.object({
		email: z.string().email('Invalid email'),
		password: z.string(),
	});
	type Schema = z.output<typeof schema>;
	const state = reactive({
		email: undefined,
		password: undefined,
	});

  async function submit(event: FormSubmitEvent<Schema>) {
		// Do something with data
		console.log('event data', event.data);

		const user = await registerOrLogin(event.data.email, event.data.password);

		store.setUser(user);

		console.log('user', user,'error', error);
	}
</script>
<template>
	<div>
		<MyButton title="سجل دخولك بالبريد الإلكتروني" icon="i-heroicons-envelope" data-drawer-target="drawer-email-login" data-drawer-toggle="drawer-email-login" data-drawer-placement="bottom" aria-controls="drawer-email-login" data-drawer-backdrop="false" />

		<Drawer id="drawer-email-login" icon="i-heroicons-envelope" title="تسجيل الدخول بالبريد الإلكتروني">
			<UForm :schema="schema" :state="state" @submit="submit" class="text-xl space-y-2 flex flex-col justify-between h-full">
				<div>
					<UFormGroup size="xl" label="البريد الإلكتروني" name="email">
						<UInput type="email" v-model="state.email" />
					</UFormGroup>

					<UFormGroup size="xl" label="كلمة المرور" name="password">
						<UInput v-model="state.password" />
					</UFormGroup>
				</div>

				<UButton type="submit" class="w-full text-center !text-lg">إرسال</UButton>
			</UForm>
		</Drawer>
	</div>
</template>
