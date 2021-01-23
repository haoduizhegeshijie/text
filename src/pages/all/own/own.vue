<template>
	<view>
		<view id="header">
			<view id='header_box'>综合</view>
			<view id='header_box'>销量</view>
			<view id='header_box'>价格</view>
		</view>
		<view id='useless'>
			<view id='product'>
				<image id='product_img' src='../../../static/image/123.jpg'></image>
				<view id='view'></view>
				<view id='product_box'>
					<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
					<view>
						<view id='product_box_presentPrice'>￥<b>3980</b></view>
					</view>
				</view>
			</view>
			<view id='product'>
				<image id='product_img' src='../../../static/image/123.jpg'></image>
				<view id='view'></view>
				<view id='product_box'>
					<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
					<view>
						<view id='product_box_presentPrice'>￥<b>3980</b></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	#header{
		display: flex;
	}
	#header_box{
		padding-left: 100rpx;
		width: 250rpx;
		border: 1px solid #000000;
	}
	#useless{
		display: flex;
		flex-wrap: wrap;
		background-color: #f0f0f0;
	}
	#product{
		position: relative;
		margin-top: 25rpx;
		margin-left: 17rpx;
		margin-bottom: 2rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
		width: 350rpx;
		height: 450rpx;
		border-radius: 20rpx;
	}
	#product_img{
		width: 350rpx;
		height: 350rpx;
		border-radius: 20rpx;
	}
	#view{
		position: absolute;
		top: 340rpx;
		width: 350rpx;
		height: 50rpx;
		background-color: white;
	}
	#product_box{
		width: 300rpx;
	}
	#product_box_text{
		position: absolute;
		top: 340rpx;
		font-size: 20rpx;
		margin-left: 6rpx;
	}
	#product_box_presentPrice{
		position: absolute;
		bottom: 0;
		left: 10rpx;
		font-size: 28rpx;
		color: red;
	}
</style>
