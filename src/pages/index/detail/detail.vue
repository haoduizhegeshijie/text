<template>
	<view id='all'>
		<view id='box'>
			<u-swiper id='swiper' :list="list"></u-swiper>
			<br />
			<view id='detail'>
				<view id='price'>
					<view id='new'>￥398</view>
					<view id='original'>价格<del>￥698.00</del>起</view>
				</view>
				<br />
				<view id='title'>
					<view id='title_name'>Yuwell鱼跃电子血压计家用智能上臂式测血压仪一键测量</view>
					<image id='title_share' src='../../../static/index/detail/share.jpg'></image>
				</view>
				<view id='theme'>
					<view>核心算法特有DFFA双滤波模糊算法&nbsp;提高测试准确性&nbsp;血压变化准确掌控</view>
				</view>
			</view>
			<br />
			<view id='caption'>
				<view id='shipments'>
					<view>发货：</view>
					<view>浙江省 嘉兴市</view>
				</view>
				<view id='shipments'>
					<view>快递：</view>
					<view>快递包邮</view>
				</view>
				<view id='shipments'>
					<view>月销</view>
					<view>500+</view>
				</view>
			</view>
			<br />
		</view>
		<br />
		<view id='img'>
			<image src='../../../static/789.jpg'></image>
			<image src='../../../static/123.jpg'></image>
			<image src='../../../static/456.jpg'></image>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {
				list: [{
						image: '../../../static/789.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/456.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: '../../../static/123.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		}
	}
</script>

<style>
	#all{
		background-color: #999999;
	}
	.wrap {
		padding: 40rpx;
	}
	#box{
		width: 750rpx;
		background-color: #fff;
	}
	#price{
		width: 400rpx;
		display: flex;
		align-items: center;
	}
	#new{
		font-size: 50rpx;
		color: #F48455;
	}
	#title{
		display: flex;
		align-items: center;
	}
	#title_name{
		font-size: 35rpx;
	}
	#title_share{
		width: 200rpx;
		height: 50rpx;
	}
	#theme{
		color: #DB5765;
	}
	#caption{
		display: flex;
		justify-content: space-between;
	}
	#shipments{
		display: flex;
	}
	#img{
		top: 10rpx;
	}
	#img image{
		width: 750rpx;
	}
</style>
