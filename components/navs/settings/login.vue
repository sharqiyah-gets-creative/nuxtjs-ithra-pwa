<script lang="ts" setup>

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

    const toggleLogin = () => {
		console.log('toggling login', showLogin.value, 'to', !showLogin.value);
		showLogin.value = !showLogin.value;
	};

</script>
<template>
	<NavsSettingsItem v-if="user" @click="signUserOut" class="cursor-pointer" :title="$t('settings.logout')">
		<template #right-icon>
			<UIcon name="i-heroicons-user-solid" />
		</template>
	</NavsSettingsItem>

	<NavsSettingsItem
    data-drawer-target="login-drawer" data-drawer-show="login-drawer" aria-controls="login-drawer"
    v-else class="cursor-pointer" :title="$t('settings.login')" description="سجل دخولك لتقوم بتقييم تجاربك">
		<template #right-icon>
			<UIcon name="i-heroicons-user-solid" />
		</template>

        <UiDrawer id="login-drawer" title="login"  @click.stop >
            <div class="p-4 space-y-2 max-w-md mx-auto">
				<div class="email_auth">
					<UserLoginWithEmail />
				</div>

				<div class="google_auth">
					<MyButton outline="true" @click="loginWithAuthProvider('google')" title="سجل دخولك بقوقل" icon="i-mdi-google" />
				</div>

				<div class="twitter_auth">
					<MyButton outline="true" @click="loginWithAuthProvider('twitter')" title="سجل دخولك بتويتر" icon="i-mdi-twitter" />
				</div>

				<div class="facebook_auth hidden">
					<MyButton outline="true" @click="loginWithAuthProvider('facebook')" title="سجل دخولك بفيسبوك" icon="i-mdi-facebook" />
				</div>
			</div>
        </UiDrawer>

		<van-action-sheet   title="تسجيل الدخول">
			
		</van-action-sheet>
	</NavsSettingsItem>
</template>
