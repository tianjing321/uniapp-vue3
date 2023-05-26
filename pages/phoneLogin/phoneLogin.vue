<template>
	<view class="contanier">
		<view class="wrap">
			<u-code :seconds="seconds" @end="end"  @start="start" ref="uCode" @change="codeChange()"></u-code>
			<u-button  @click="getCode(uCode)">{{tips}}</u-button>
			<!-- <u-button :hairline="false" type="warning" text="登录" @click="submit(uForm)" /> -->
		</view>
		<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
			<u-form-item prop="userInfo.mobile" ref="item1" borderBottom>
				<u--input v-model="model1.userInfo.mobile" placeholder="请输入手机号" clearable></u--input>
				<template #right>
				
				</template>
			</u-form-item>
			<u-form-item prop="userInfo.number" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.number" placeholder="请输入验证码" clearable></u--input>
				<!-- <u-code-input v-model="model1.userInfo.number"></u-code-input> -->
			</u-form-item>

			<u-form-item>
				<u-button :hairline="false" type="warning" text="登录" @click="submit(uForm)" />
			</u-form-item>
		</u--form>

	</view>
</template>

<script setup>
	import {
		onMounted,
		reactive,
		ref
	} from 'vue'
	onMounted(()=>{
		console.log(uCode,"uCode")
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
		}).catch(errors => {
			uni.$u.toast('校验失败')
		})
	}

	//验证码
	const tips = ref('')
	const seconds = ref(10)
	const uCode = ref()
	const codeChange = (text) => {
		console.log(text,"输出文字")
		tips = text;
	}
	const getCode = (codeForm) => {
		console.log(uCode)
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
				uCode.start();
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

<style lang="scss">
.wrap {
		width: 240rpx;
		// height: 24rpx;
	}
</style>