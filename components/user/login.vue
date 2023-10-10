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
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow',
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

        <UForm :schema="schema" :state="state" @submit="submit" class="text-xl">
          <UFormGroup size="xl" label="Email" name="email" class="mb-2">
            <UInput v-model="state.email" />
          </UFormGroup>
          <UButton type="submit" class="w-full text-center" size="xl"> Submit </UButton>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

const schema = z.object({
  email: z.string().email("Invalid email"),
});

type Schema = z.output<typeof schema>;

  const state = reactive({
  email: undefined,
});

async function submit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>
