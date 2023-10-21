<script lang="ts" setup></script>
<template>
	<div>
		<van-config-provider :theme="$colorMode.preference">
        <UserActionSheet>
            <van-cell :title="$t('settings.login')" label="سجل دخولك لتقوم بتقييم تجاربك" />
        </UserActionSheet>
    </van-config-provider>
		
	</div>
</template>
