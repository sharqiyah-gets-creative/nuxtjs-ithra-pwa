<script lang="ts" setup>
	const { loginWithAuthProvider } = useAuth();
	const show = ref(false);
</script>
<template>
	<div>
		<van-cell theme="dark" is-link title="Basic Usage" @click="show = true" />

		<van-action-sheet theme="dark" v-model:show="show" title="Title">
			<div class="email_auth">
				<UserEmailLogin />
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
		</van-action-sheet>

		<NavsSideLink title="تسجيل الدخول" description="سجل دخولك لتقوم بتقييم تجاربك" icon="i-heroicons-user-solid" data-drawer-target="drawer-login" data-drawer-toggle="drawer-login" data-drawer-placement="bottom" aria-controls="drawer-login" data-drawer-backdrop="false" />

		


		<Drawer contentClass="space-y-2" id="drawer-login" icon="i-heroicons-user" title="سجل دخولك معنا">
			<div class="email_auth">
				
				<UserEmailLogin />
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
	</div>
</template>


