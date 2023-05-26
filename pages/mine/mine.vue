<template>
	<view class="wrap">
		<u-toast ref="uToast"></u-toast>
		<u-code :seconds="10" @end="end" @start="start" ref="uCode" start-text="你好" @change="codeChange"></u-code>
		<u-button @click="getCode">{{tips}}</u-button>
	</view>
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
	let tips = ''
	// refCode: null,
	const seconds = 10
	const codeChange = (text) => {
		console.log("触发一次~")
		tips = text;
	}
	const uCode = ref()
	const getCode = () => {
		console.log(uCode, "------1")
		// if (uCode.canGetCode) {
		// 模拟向后端请求验证码
		uni.showLoading({
			title: '正在获取验证码'
		})
		setTimeout(() => {
			uni.hideLoading();
			// 这里此提示会被this.start()方法中的提示覆盖
			uni.$u.toast('验证码已发送');
			// 通知验证码组件内部开始倒计时
			// uCode.start();
		}, 2000);
		// } else {
		// 	uni.$u.toast('倒计时结束后再发送');
		// }
	}
	const end = () => {
		uni.$u.toast('倒计时结束');
	}
	const start = () => {
		uni.$u.toast('倒计时开始');
	}
</script>

<style>

</style>