<template>
	<view id='background' :style="{ height: windowHeight + 'px' }">
		<view id='img'>
			<image id='headPortrait' src='/static/login/headPortrait.png'></image>
		</view>
		<view id='box'>
			<view>
				<image id='username_img' src='/static/login/username.png'></image>
				<input id='username_input' type="text" placeholder="请输入用户名" />	
			</view>
			<view class="password">
				<image id='password_img' src='/static/login/password.png'></image>
				<input id="password_input" type="text" placeholder="请输入密码" />	
			</view>
			<button id="button" @click='login'>立即登录</button>
		</view>
		<view>
			<navigator id='forget'>
				<view>忘记密码</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: 0
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.windowHeight = res.windowHeight;
					console.log(this.windowHeight);
				},
			})
		},
		methods: {
			login() {
				uni.redirectTo({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style>
	#background{
		background-color: #0CA8FF;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	#img{
		margin-top: 30%;
		text-align: center;
	}
	#headPortrait{
		width: 30%;
		height: 200rpx;
	}
	#box{
		height: 400rpx;
		background-color: white;
		margin: 0 30rpx;
		border-radius: 20rpx;
	}
	#username_img{
		margin-top: 50rpx;
		left: 30rpx;
		width: 80rpx;
		height: 80rpx;
	}
	#username_input{
		margin-top: 50rpx;
		width: 500rpx;
		height: 80rpx;
		margin-left: 30rpx;
		display: inline-block;
		line-height: 80rpx;
	}
	#password_img{
		margin-top: 50rpx;
		left: 30rpx;
		width: 80rpx;
		height: 80rpx;
	}
	#password_input{
		margin-top: 50rpx;
		width: 500rpx;
		height: 80rpx;
		margin-left: 30rpx;
		display: inline-block;
		line-height: 80rpx;
	}
	button{
		width: 500rpx;
		margin: 0 auto;
		background-color: #007AFF;
		border-radius: 10%;
		color: white;
	}
	#forget{
		position: absolute;
		bottom: 5%;
		left: 45%;
		font-size: 5%;
	}
</style>
