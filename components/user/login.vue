<template>
  <div>
    <NavsSideLink
      @click="isOpen = true"
      title="تسجيل الدخول"
      description="سجل دخولك لتقوم بتقييم تجاربك"
      icon="i-heroicons-user-solid"
    />

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
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Modal
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <UForm
          :schema="schema"
          :state="state"
          @submit="submit"
          class="text-xl space-y-2"
        >
          <UFormGroup size="xl" label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>

          <UFormGroup size="xl" label="Password" name="password">
            <UInput v-model="state.password" />
          </UFormGroup>

          <UButton type="submit" class="w-full text-center !text-lg">
            Submit
          </UButton>
        </UForm>

        <div class="google_auth">
          <UButton @click="loginWithGoogle"
            icon="i-mdi-google"
            size="lg"
            variant="soft"
            label="Sign in with Google"
            class="w-full text-center !text-lg"
          />
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
const { loginWithGoogle } = useAuth();
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
import { useUserStore } from "~/store/user";

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