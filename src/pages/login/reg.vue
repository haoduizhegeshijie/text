<template>
	<view class="content">
		<view class="header">
			<image src="../../static/my/default.png"></image>
		</view>

		<view class="list">
			<view class="list-call">
				<input class="sl-input" v-model="submitForm.openid" type="username" @blur="verify(submitForm.openid)" minlength="6" placeholder="用户名" />
			</view>
			<view class="list-call">
				<input class="sl-input" v-model="submitForm.phone" type="number" @blur="doInput(submitForm.phone)" maxlength="11" placeholder="手机号" />
			</view>
			<view class="list-call">
				<input class="sl-input" v-model="pwd" type="text" maxlength="32" placeholder="登录密码" :password="!showPassword" />
				<image class="img" src="" :src="showPassword?'../../static/login/op.png':'../../static/login/cl.png'" @tap="display"></image>
			</view>
			<view class="list-call">
				<input class="sl-input" v-model="pwd_new" type="text" maxlength="32" placeholder="确认密码" :password="!showPassword" />
				<image class="img" src="" :src="showPassword?'../../static/login/op.png':'../../static/login/cl.png'" @tap="display"></image>
			</view>
			<view class="list-call">
				<input class="sl-input" v-model="pid" type="text" maxlength="12" placeholder="邀请ID" disabled/>
			</view>
		</view>

		<view class="button-login" hover-class="button-hover" @tap="bindLogin">
			<text>注册</text>
		</view>

		<view class="agreement">
			<image @tap="agreementSuccess" :src="agreement==true?'../../static/login/ty1.png':'../../static/login/ty0.png'"></image>
			<text @tap="agreementSuccess">已阅读并同意</text>
			<navigator url="agreement?id=1" open-type="navigate">《软件用户协议》</navigator>
			<text>和</text>
			<navigator >万业联盟隐私指引</navigator>
		</view>
	</view>
</template>

<script>
	var _this, js;
	export default {
		onLoad() {
			_this = this;
		},
		onUnload() {
			clearInterval(js)
			this.second = 0;
			this.clear()
		},
		data() {
			return {
				pwd: '',
				pwd_new: '',
				pid: '1',
				code: '',
				invitation: '',
				agreement: false,
				showPassword: false,
				submitForm: {
					openid: "",
					phone: ''
				}
				// second: 0
			};
		},
		methods: {
			clear(){
				clearInterval(js)
				js = null
				this.second = 0
			},
			display() {
				this.showPassword = !this.showPassword
			},
			agreementSuccess() {
				this.agreement = !this.agreement;
			},
			verify(val){
				let regopenid = (/^[a-zA-Z]\w{5,17}$/)
				if(!regopenid.test(val)){
					uni.showToast({
						title: '请输入字母和数字不少于六位，且第一位为字母'
					})
				}
			},
			doInput(val){
				let regopenid = (/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|14[0|1|2|3|5|6|7|8|9]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)
				if(!regopenid.test(val)){
					uni.showToast({
						icon: 'none',
						title: '手机号格式不正确'
					})
				}
			},
			getcode() {
				if (this.submitForm.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
				this.second = 60;
				//请求业务
				js = setInterval(function() {
					_this.second--;
					if (_this.second == 0) {
						_this.clear()
					}
				}, 1000)
			},
			bindLogin() {
				console.log(this.pwd.length)
				if (this.agreement == false) {
					uni.showToast({
						icon: 'none',
						title: '请先阅读《软件用户协议》'
					});
					return;
				}
				if (this.submitForm.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
				if (this.pwd.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '请输入大于六位数'
					});
					return;
				}
				if (this.pwd != this.pwd_new) {
					uni.showToast({
						icon: 'none',
						title: '两次密码输入不一致'
					});
					return;
				}
				uni.request({
					url: 'http://tuh.dingf916.cn/member_register',
					data: {
						openid: this.submitForm.openid,
						phone: this.submitForm.phone,
						pid: this.pid,
						pwd: this.pwd,
						pwd_new: this.pwd_new,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: res.data.msg
							});
							setTimeout(function() {
								uni.navigateBack();
							}, 1500)
						}
						console.log(res)
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		width: 161rpx;
		height: 161rpx;
		background: rgba(63, 205, 235, 1);
		box-shadow: 0rpx 12rpx 13rpx 0rpx rgba(63, 205, 235, 0.47);
		border-radius: 50%;
		margin-top: 30rpx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161rpx;
		height: 161rpx;
		border-radius: 50%;
	}

	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50rpx;
		padding-left: 70rpx;
		padding-right: 70rpx;
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		color: #333333;
		border-bottom: 0.5px solid #e2e2e2;
	}

	.list-call .img {
		width: 40rpx;
		height: 40rpx;
	}

	.list-call .sl-input {
		flex: 1;
		text-align: left;
		font-size: 32rpx;
		margin-left: 16rpx;
	}

	.yzm {
		color: #FF7D13;
		font-size: 24rpx;
		line-height: 64rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		width: auto;
		height: 64rpx;
		border: 1rpx solid #FFA800;
		border-radius: 50rpx;
	}

	.yzms {
		color: #999999 !important;
		border: 1rpx solid #999999;
	}

	.button-login {
		color: #FFFFFF;
		font-size: 34rpx;
		width: 470rpx;
		height: 100rpx;
		line-height: 100rpx;
		background: #1b85e9;
		box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
		border-radius: 50rpx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100rpx;
	}

	.button-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
	}

	.agreement {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		margin-top: 80rpx;
		color: #FFA800;
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
	}

	.agreement image {
		width: 40rpx;
		height: 40rpx;
	}
</style>
