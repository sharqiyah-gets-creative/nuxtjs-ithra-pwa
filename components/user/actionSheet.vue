<script lang="ts" setup>
	const { loginWithAuthProvider } = useAuth();
	const showLogin = ref(false);
	const toggleLogin = () => {
		console.log('toggling login', showLogin.value, 'to', !showLogin.value);
		showLogin.value = !showLogin.value;
	};
</script>
<template>
	<div>
		<div class="cursor-pointer" @click="toggleLogin">
			<slot />
		</div>
		<van-action-sheet class="!bg-white !dark:bg-slate-900" :theme="$colorMode.preference" v-model:show="showLogin" title="تسجيل الدخول">
			<div class="p-4 space-y-2 max-w-md mx-auto">
				<div class="email_auth">
					<UserEmailLogin />
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
		</van-action-sheet>
	</div>
</template>
