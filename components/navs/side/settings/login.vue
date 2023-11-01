<script lang="ts" setup>
    import { initFlowbite } from 'flowbite'
    onMounted(() => {
        initFlowbite();
    });
	const { user, clearUser } = useUserStore();

    const { loginWithAuthProvider, signOut } = useAuth();

	const signUserOut = () => {
		signOut();
		clearUser();
	};

	if (user) {
		console.log('navs/side.vue', '👍👍👍 user is authenticated', user);
		console.log('navs/side.vue', 'user image url', user.photoURL!);
	} else {
		console.log('navs/side.vue', '👎👎👎 user is not authenticated');
	}

    const showLogin = ref(false);


</script>
<template>
	<NavsSettingsItem v-if="user" @click="signUserOut" class="cursor-pointer" :title="$t('settings.logout')">
		<template #right-icon>
			<UIcon name="i-heroicons-user-solid" />
		</template>
	</NavsSettingsItem>

	<NavsSettingsItem
        data-drawer-target="login-drawer" 
        data-drawer-show="login-drawer" 
        data-drawer-placement="bottom"
        aria-controls="login-drawer"
        data-drawer-backdrop="false"
        
        v-else 
        class="cursor-pointer" 
        :title="$t('settings.login')"
        description="سجل دخولك لتقوم بتقييم تجاربك"
    >
        <template #right-icon>
            <UIcon name="i-heroicons-user-solid" />
        </template>

        <UiDrawer @click.stop :title="$t('settings.login')" id="login-drawer" >
            <div class="p-4 space-y-2 max-w-md mx-auto">
                <div class="email_auth">
                    <UserLoginWithEmail  />
                </div>

                <div class="google_auth">
                    <UButton size="xl" block @click="loginWithAuthProvider('google')" variant="outline" label="سجل دخولك بقوقل" icon="i-mdi-google" />
                </div>

                <div class="twitter_auth">
                    <UButton size="xl" block @click="loginWithAuthProvider('twitter')" variant="outline" label="سجل دخولك بتويتر" icon="i-mdi-twitter" />
                </div>

                <div class="facebook_auth hidden">
                    <UButton size="xl" block @click="loginWithAuthProvider('facebook')" variant="outline" label="سجل دخولك بفيسبوك" icon="i-mdi-facebook" />
                </div>
            </div>
        </UiDrawer>
	</NavsSettingsItem>
</template>
