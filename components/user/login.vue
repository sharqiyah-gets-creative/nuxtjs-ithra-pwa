<script lang="ts" setup>
	const { loginWithAuthProvider } = useAuth();
	const showLogin = ref(false);
</script>
<template>
	<div>
        <van-config-provider :theme="$colorMode.preference">
        </van-config-provider>

        <van-cell @click="showLogin = true" :title="$t('settings.login')" label="سجل دخولك لتقوم بتقييم تجاربك" />
        
        <van-action-sheet class="!bg-slate-900" theme="dark" v-model:show="showLogin" title="تسجيل الدخول">
            <div class="p-4 space-y-2 max-w-md mx-auto">
                <div class="email_auth">
                    <UserEmailLogin />
                </div>

                <div class="google_auth">
                    <MyButton @click="loginWithAuthProvider('google')" title="سجل دخولك بقوقل" icon="i-mdi-google" />
                </div>

                <div class="twitter_auth">
                    <MyButton @click="loginWithAuthProvider('twitter')" title="سجل دخولك بتويتر" icon="i-mdi-twitter" />
                </div>

                <div class="facebook_auth hidden">
                    <MyButton @click="loginWithAuthProvider('facebook')" title="سجل دخولك بفيسبوك" icon="i-mdi-facebook" />
                </div>
            </div>
        </van-action-sheet>
	
	</div>
</template>


