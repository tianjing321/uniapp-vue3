<template>

	<view>
		<u-button type="warning" text="退出登录" @click="loginOut()" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const loginOut = (res) => {
		uni.removeStorage({
			key: 'userInfo'
		})
		console.log("注销登录!")
		uni.redirectTo({
			url: '/pages/login/login'
		});
	}
</script>

<style>

</style>