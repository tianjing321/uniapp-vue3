<template>
		<view >
			<u-modal :show="show" :showConfirmButton="false">
				<view class="slot-content flex flex_col flex_center">
					<view class="margin_top20 margin_bot30">
						<u--image width="120px" height="120px" src="https://cdn.uviewui.com/uview/album/1.jpg"
							shape="circle">
						</u--image>
					</view>
					<rich-text class=" fontbold margin_top10 font36">浪宠需要您的授权哟~</rich-text>
					<rich-text class="color999 margin_top10 font30">获取您的公开信息（昵称、头像等）~</rich-text>
					<view class="margin_top30 w_h_100">
						<u-button type="warning" text="微信一键登录" :hairline="false" open-type="getUserInfo" @getuserinfo="getuserinfo()" />
					</view>
					<view class="margin_top30 w_h_100">
						<u-button :hairline="false"  text="手机号登录" @click="pushPhoneLogin()"  />
					</view>
				</view>
			</u-modal>
		</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance
	} from 'vue'
	const {proxy} = getCurrentInstance()
	 
	console.log(proxy,"proxy")
	const show = ref(true)
	const getuserinfo = (res) => {
		// console.log(res,"输出用户信息")
		// uni.getUserInfo({//用户匿名数据
		uni.getUserProfile ({//用户实名信息，每次都弹出授权请求
			provider: 'weixin',
			success: function(infoRes) {
				console.log(infoRes.userInfo, "用户信息");
				// 本地存储用户
				uni.setStorage({
					key: 'userInfo',
					data: infoRes.userInfo
				});
				//跳转至首页
				uni.switchTab({
					url: '/pages/index/index'
				});

			},
			fail: (error) => {
				console.log('getUserInfo fail', error);
				let content = error.errMsg;
				if (~content.indexOf('uni.login')) {
					content = '请在登录页面完成登录操作';
				}
				uni.showModal({
					title: '获取用户信息失败',
					content: '错误原因' + content,
					showCancel: false
				});
			}
		});
	}
	const pushPhoneLogin = (res) => {
		uni.navigateTo({url: '/pages/phoneLogin/phoneLogin'})
		console.log(res, "跳转去手机登录")
	}
</script>

<style lang="scss">

</style>