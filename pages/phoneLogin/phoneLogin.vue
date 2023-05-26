<template>
	<view class="contanier">
		<view class="logo-block margin_bot30 margin_top30">
			<u--image :showLoading="true" src="https://cdn.uviewui.com/uview/common/logo.png" width="140px"
				height="140px"></u--image>
		</view>
		<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
			<u-form-item prop="userInfo.mobile" ref="item1">
				<u--input v-model="model1.userInfo.mobile" border="bottom" placeholder="请输入手机号" @change="phoneChange"
					clearable></u--input>
			</u-form-item>
			<u-form-item prop="userInfo.number" ref="item1" borderBottom>
				<u--input v-model="model1.userInfo.number" min="6" max="6" border="bottom" placeholder="请输入验证码" @change="changeCode"
					clearable></u--input>
				<template #right>
					<view class="u-code-block margin_left15">
						<u-code ref="uCode2" @change="codeChange2" keep-running start-text="点我获取验证码"></u-code>
						<u-button @tap="getCode2" :text="tips2" :disabled="codeDisable" plain type="warning">{{tips2}}</u-button>
					</view>
				</template>
			</u-form-item>
			<u-form-item>
				<u-button :hairline="false" type="warning" :disabled="submitDisabled" text="登录" @click="submit(uForm)" />
			</u-form-item>
		</u--form>

	</view>
</template>

<script setup>
	import {
		onMounted,
		reactive,
		ref,

	} from 'vue'

	onMounted(() => {
		console.log(uCode2, "uCode2")
	})
	const value = ref()
	const model1 = reactive({
		userInfo: {
			mobile: '',
			number: ''
		},
	})
	const rules = reactive({
		'userInfo.mobile': [{
				required: true,
				message: '请输入手机号',
				trigger: ['change', 'blur'],
			},
			{
				// 自定义验证函数，见上说明
				validator: (rule, value, callback) => {
					// 上面有说，返回true表示校验通过，返回false表示不通过
					// uni.$u.test.mobile()就是返回true或者false的
					return uni.$u.test.mobile(value);
				},
				message: '手机号码不正确',
				// 触发器可以同时用blur和change
				trigger: ['change', 'blur'],
			}
		],
		'userInfo.number': {
			type: 'string',
			min: 6,
			max: 6,
			required: true,
			message: '请输入验证码',
			trigger: ['blur', 'change']
		}
	})
	const uForm = ref()
	const submit = (form) => {
		console.log(model1, "表单")
		form.validate().then(res => {
			console.log(res)
			uni.$u.toast('校验通过')
			uni.switchTab({
				url:"/pages/index/index"
			})
		}).catch(errors => {
			uni.$u.toast('校验失败')
		})
	}
	//按钮
	let submitDisabled = ref(true)
	//验证码
	const tips2 = ref('')
	const seconds = ref(10)
	const uCode2 = ref()
	const codeChange2 = (text) => {
		tips2.value = text;
	}
	const changeCode = (value) => {
		submitDisabled.value = false
	}
	let codeDisable = ref(true)
	const phoneChange = (value) => {
		let flag = uni.$u.test.mobile(value)
		if (!flag) return
		codeDisable.value = false
	}
	const getCode2 = (codeForm) => {
		console.log(uCode2)
		let phoneNumber = model1.userInfo.mobile
		if (!(phoneNumber && uni.$u.test.mobile(phoneNumber))) {
			uni.$u.toast('请输入正确的手机号！');
			return
		}
		if (uCode2.value.canGetCode) {
			// 模拟向后端请求验证码
			uni.showLoading({
				title: '正在获取验证码'
			})
			setTimeout(() => {
				uni.hideLoading();
				// 这里此提示会被this.start()方法中的提示覆盖
				uni.$u.toast('验证码已发送');
				// 通知验证码组件内部开始倒计时
				uCode2.value.start();
			}, 2000);
		} else {
			uni.$u.toast('倒计时结束后再发送');
		}
	}
	const end = () => {
		uni.$u.toast('倒计时结束');
	}
	const start = () => {
		uni.$u.toast('倒计时开始');
	}
</script>

<style lang="scss">
	.wrap {
		width: 240rpx;
		height: auto;
		// height: 24rpx;
	}

	.u-code-block {
		color: $uni-color-warning;
	}

	.logo-block {

		display: flex;
		justify-content: space-around;
	}
</style>