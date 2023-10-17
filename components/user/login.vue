<template>
  <div>
    <NavsSideLink
      
      title="تسجيل الدخول"
      description="سجل دخولك لتقوم بتقييم تجاربك"
      icon="i-heroicons-user-solid"
      data-drawer-target="drawer-login" 
      data-drawer-toggle="drawer-login" 
      data-drawer-placement="bottom" 
      aria-controls="drawer-login"
      data-drawer-backdrop="false"
    />

    <Drawer contentClass="space-y-2" id="drawer-login" icon="i-heroicons-user" title="سجل دخولك معنا">
        
        <div class="email_auth">
          <MyButton title="سجل دخولك بالبريد الإلكتروني" icon="i-heroicons-envelope"
            data-drawer-target="drawer-email-login"
            data-drawer-toggle="drawer-email-login" 
            data-drawer-placement="bottom" 
            aria-controls="drawer-email-login"
            data-drawer-backdrop="false" 
          />
  
          <Drawer id="drawer-email-login" icon="i-heroicons-envelope" title="تسجيل الدخول بالبريد الإلكتروني">
            <UForm
              :schema="schema"
              :state="state"
              @submit="submit"
              class="text-xl space-y-2 flex flex-col justify-between h-full">
              <div>
                <UFormGroup size="xl" label="البريد الإلكتروني" name="email">
                  <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup size="xl" label="كلمة المرور" name="password">
                  <UInput v-model="state.password" />
                </UFormGroup>
              </div>

              <UButton type="submit" class="w-full text-center !text-lg">إرسال</UButton>
            </UForm>
          </Drawer>
        </div>

        <div class="google_auth">
          <MyButton @click="loginWithAuthProvider('google')" title="سجل دخولك بقوقل" icon="i-mdi-google" />
        </div>

        <div class="twitter_auth">
          <MyButton @click="loginWithAuthProvider('twitter')" title="سجل دخولك بتويتر" icon="i-mdi-twitter" />
        </div>

        <div class="facebook_auth">
          <MyButton @click="loginWithAuthProvider('facebook')" title="سجل دخولك بفيسبوك" icon="i-mdi-facebook" />
        </div>
      </Drawer>

    <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full flex flex-col ',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow space-y-2 standalone:pt-8',
          },
        }"
      >
   
      </UCard>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
import { useUserStore } from "~/store/user";
const { loginWithAuthProvider } = useAuth();

const isOpen = ref(false);

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function submit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);

  const { registerOrLogin, error } = useAuth();

  const user = await registerOrLogin(event.data.email, event.data.password);

  const store = useUserStore();

  store.setUser(user);

  console.log(user, error);
}
</script>