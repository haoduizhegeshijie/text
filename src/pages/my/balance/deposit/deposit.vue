<template>
	<view id='page' :style="{ 'height': windowHeight + 'px' }">
		<view id='user'>
			<view id='user_balance'>我的余额</view>
			<view id='user_box'>
				<view id='user_icon'>￥</view>
				<view id='user_num'>2140.70</view>
			</view>
		</view>
		<br />
		<view id='withdraw'>
			<view id='withdraw_title'>提现金额</view>
			<view id='box'>
				<view id='withdraw_icon'>￥</view>
				<input id='withdraw_input' type="text" placeholder=" 最低提现金额20元">
				<view id="withdraw_text">全部提现</view>
			</view>
			<view id="withdraw_box">
				<view id="withdraw_box_title">手续费：3%</view>
				<view id='withdraw_box_title'>本次提现将扣除手续费0.6￥</view>
				<view id='withdraw_box_title'>本次提现实际金额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19.4￥</view>
			</view>
		</view>
		<br />
		<view id='deposit'>
			<view id='deposit_title'>提现方式</view>
			<br />
			<view id='deposit_box'>
				<view id='deposit_box_left'>
					<image id="deposit_box_left_image" src="../../../../static/my/balance/deposit/Alipay.png"></image>
					<view id='deposit_box_left_text'>支付宝</view>
				</view>
				<image id='deposit_box_image' src="../../../../static/my/balance/deposit/circle.png" mode=""></image>
			</view>
			<hr />
			<view id='deposit_box'>
				<view id='deposit_box_left'>
					<image id="deposit_box_left_image" src="../../../../static/my/balance/deposit/bankCard.png"></image>
					<view id='deposit_box_left_text'>银行卡</view>
				</view>
				<image id='deposit_box_image' src='../../../../static/my/balance/deposit/circle_active.png'></image>
			</view>
		</view>
		<br />
		<button style="background-color: #fb622a;">提现</button>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				windowHeight: 0
			}
		},
		mounted () {
			uni.getSystemInfo({
				success: (res) => {
					this.windowHeight = res.windowHeight;
					console.log(res.windowHeight);
				}
			});
		},
		methods: {
			goback() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	#page{
		background-color: #f5f6fa;
	}
	#user{
		margin-left: 30rpx;
		width: 690rpx;
		height: 350rpx;
		background-image: url(../../../../static/my/balance/deposit/rectangle.png);
		background-repeat:no-repeat;
		background-size:100% 100%;
		-moz-background-size:100% 100%;
		box-shadow: 0 10px 5px #888888;
	}
	#user_balance{
		padding-top: 100rpx;
		padding-left: 45rpx;
		width: 207rpx;
		height: 50rpx;
		font-size: 50rpx;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 50rpx;
		white-space:nowrap;
	}
	#user_box{
		display: flex;
		
	}
	#user_icon{
		padding-top: 100rpx;
		padding-left: 50rpx;
		width: 35rpx;
		height: 40rpx;
		font-size: 40rpx;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 40rpx;
	}
	#user_num{
		padding-top: 80rpx;
		padding-left: 35rpx;
		width: 324rpx;
		height: 71rpx;
		font-size: 60rpx;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 60rpx;
	}
	#withdraw{
		background-color: #ffffff;
		position: relative;
	}
	#withdraw_title{
		width: 171rpx;
		height: 41rpx;
		font-size: 41rpx;
		font-weight: 400;
		color: #333333;
		line-height: 41rpx;
		padding-top: 39rpx;
		margin-bottom: 92rpx;
		margin-left: 47rpx;
	}
	#box{
		display: flex;
		border-bottom: 1px solid #000000;
		margin-left: 40rpx;
		margin-right: 75rpx;
	}
	#withdraw_icon{
		width: 40rpx;
		height: 46rpx;
		font-size: 46rpx;
		font-weight: 400;
		color: #333333;
		line-height: 46rpx;
	}
	#withdraw_input{
		flex: 1;
		display: inline-block;
	}
	#withdraw_text{
		width: 140rpx;
		height: 34rpx;
		font-size: 34rpx;
		font-weight: 400;
		color: #F67E06;
		line-height: 34rpx;
	}
	#withdraw_box{
		margin-top: 42rpx;
		margin-left: 47rpx;
	}
	#withdraw_box_title{
		width: 450rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		line-height: 55rpx;
	}
	#deposit{
		background-color: #ffffff;
		height: 381rpx;
	}
	#deposit_title{
		width: 171rpx;
		height: 41rpx;
		font-size: 41rpx;
		font-weight: 400;
		color: #333333;
		line-height: 41rpx;
		padding-top: 45rpx;
		margin-bottom: 28rpx;
		margin-left: 49rpx;
	}
	#deposit_box{
		display: flex;
		justify-content: space-between;
		margin: 37rpx 33rpx 34rpx 49rpx;
	}
	#deposit_box_left{
		width: 220rpx;
		display: flex;
		justify-content: space-between;
	}
	#deposit_box_left_image{
		width: 74rpx;
		height: 52rpx;
	}
	#deposit_box_left_text{
		width: 103rpx;
		height: 33rpx;
		font-size: 33rpx;
		font-weight: 400;
		color: #333333;
		line-height: 33rpx;
	}
	#deposit_box_image{
		width: 53rpx;
		height: 53rpx;
	}
</style>
