<template>
	<view id='commodity'>
		<navigator id='box' url='/pages/index/detail/detail'>
			<image id='box_img' src='../../../static/456.jpg'></image>
			<view id='box_title'>泰国直邮天然乳胶垫榻榻米垫单双人床垫定制可贴牌 乳胶床垫</view>
			<view id='original_price'>原价<del>23880.00</del></view>
			<view id='money'>
				<view id='preaent_price'>￥7960</view>
				<button size='mini'>购买</button>
			</view>
		</navigator>
		<navigator id='box' url='/pages/index/detail/detail'>
			<image id='box_img' src='../../../static/456.jpg'></image>
			<view id='box_title'>泰国直邮天然乳胶垫榻榻米垫单双人床垫定制可贴牌 乳胶床垫</view>
			<view id="original_price">原价<del>23880.00</del></view>
			<view id='money'>
				<view id='preaent_price'>￥7960</view>
				<button size='mini'>购买</button>
			</view>
		</navigator>
	</view>
</template>

<script>
</script>

<style>
	#commodity{
		display: flex;
		flex-wrap: wrap;
	}
	#box{
		margin-left: 50rpx;
	}
	#box_img{
		width: 300rpx;
		height: 300rpx;
	}
	#box_title{
		font-size: 20rpx;
		width: 300rpx;
	}
	#original_price{
		font-size: 16rpx;
	}
	#money{
		display: flex;
		justify-content: space-between;
	}
	#preaent_price{
		font-size: 20rpx;
		color: red;
	}
</style>
