<template>
	<view class="content">
		<view class="header">
			<image src="../../static/image/my/default.png"></image>
		</view>

		<view class="list">
			<view class="list-call">
				<image class="img" src="../../static/image/login/username.png"></image>
				<input class="sl-input" v-model="submitForm.phone" type="number" @blur="doInput(submitForm.phone)" maxlength="11" placeholder="手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="../../static/image/login/password.png"></image>
				<input class="sl-input" v-model="pwd" type="text" maxlength="32" placeholder="输入密码" password="true" />
			</view>
		</view>

		<view class="button-login" hover-class="button-hover" @tap="bindLogin()">
			<text>登录</text>
		</view>

		<view class="agreenment">
			<navigator url="forget" open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="reg" open-type="navigate">注册账户</navigator>
			<text>|</text>
			<view @click="bleak">返回首页</view>
		</view>
	</view>
</template>

<script>
	import Vue from "vue";

	export default {
		data() {
			return {
				pwd: '',
				submitForm: {
					phone: ''
				},

			};
		},
		methods: {
			doInput(val){
				let regopenid = (/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|14[0|1|2|3|5|6|7|8|9]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)
				if(!regopenid.test(val)){
					uni.showToast({
						icon: 'none',
						title: '手机号格式不正确'
					})
				}
			},
			bleak(){
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			bindLogin: function () {
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
						title: '密码不正确'
					});
					return;
				}
				uni.request({
					url: 'http://tuh.dingf916.cn/member_login',
					data: {
						phone: this.submitForm.phone,
						pwd: this.pwd
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
							let info = res.data.data
							uni.setStorageSync(
								'history',
								{
									token: info.token,
									openid: info.openid,
									system_token: info.system_token

								}
							)
							//成功后的逻辑
							uni.navigateBack();
						}
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

	.button-login {
		color: #FFFFFF;
		font-size: 34rpx;
		width: 470rpx;
		height: 100rpx;
		background-color: #369eff;
		box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
		border-radius: 50rpx;
		line-height: 100rpx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100rpx;
	}

	.button-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
	}

	.agreenment {
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

	.agreenment text {
		font-size: 24rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
	}
</style>
