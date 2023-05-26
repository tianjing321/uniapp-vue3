<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let userInfo = uni.getStorageSync('userInfo');
			console.log(userInfo, "有用户信息吗？")
			// if (!userInfo) {
			// 	//如果没有登录跳转到登录页面
			// 	uni.redirectTo({
			// 		url: '/pages/login/login'
			// 	});
			// } else {
			// 	// 如果登录了跳转到首页
			// 	uni.switchTab({
			// 		url: '/pages/index/index'
			// 	});
			// }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import url("./iconfont/iconfont.css");
	/*每个页面公共css */
	@import "uview-plus/index.scss";
</style>