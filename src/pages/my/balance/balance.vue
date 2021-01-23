<template>
	<view id='balance' :style="{ 'height': windowHeight + 'px' }">
		<view id='always'>
			<image id='image' src="../../../static/image/my/balance/money.png" mode=""></image>
			<view id='always_text'>总余额</view>
			<br />
			<view id='always_num'>￥456789</view>
		</view>
		<view id='move'>
			<button size='mini' @click="deposit" type='primary'>提现</button>
			<br />
			<button size='mini' @click='accounts' type='primary'>转账</button>
		</view>
		<view @click="deposit" id='min'>明细</view>
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
			        console.log(res.windowHeight);
					this.windowHeight = res.windowHeight;
				}
			});
		},
		methods: {
			deposit() {
				uni.navigateTo({
					url: '/pages/my/balance/deposit/deposit'
				})
			},
			accounts() {
				uni.navigateTo({
					url: '/pages/my/balance/accounts/accounts'
				})
			}
		}
	}
</script>

<style>
	#balance{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	#always{
		text-align: center;
	}
	#image{
		width: 100rpx;
		height: 100rpx;
	}
	#always_text{
		font-size: 36rpx;
	}
	#always_num{
		font-size: 40rpx;
	}
	#move{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	#deposit{
		background-color: #1b85e9;
	}
	#min{
		font-size: 35rpx;
		font-weight: bold;
		position: fixed;
		top: 20rpx;
		right: 20rpx;
		z-index: 999;
	}
</style>
