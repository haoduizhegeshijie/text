<template>
	<view class="content">
		<image id='topimage' src='../../static/image/index/topimage.png' ></image>
		<view id='top'>
			<navigator id='service'>
				<image id='service_img' src='../../static/image/index/location.png'></image>
			</navigator>
			<navigator id="jump" url="/pages/index/search/search">
				<input id="input" placeholder="       搜索商品名称"></input>
				<image id="search" src="../../static/image/index/search.png"></image>
			</navigator>
			<navigator id='information'>
				<image id='information_img' src='../../static/image/index/information.png'></image>
			</navigator>
		</view>
<!--		<view id='title'>-->
<!--			<navigator url="/pages/index/upgrade/upgrade">-->
<!--				<image id='box_img' src='../../static/index/upgrade.png' ></image>-->
<!--				<view id='box_text'>升级礼包</view>-->
<!--			</navigator>-->
<!--			<navigator url="/pages/index/exchange/exchange">-->
<!--				<image id='box_img' src='../../static/index/exchange.png' ></image>-->
<!--				<view id='box_text'>金豆兑换</view>-->
<!--			</navigator>-->
<!--			<navigator url="/pages/index/shoppingMall/shoppingMall">-->
<!--				<image id='box_img' src='../../static/index/shoppingMall.png' ></image>-->
<!--				<view id='box_text'>会员商城</view>-->
<!--			</navigator>-->
<!--			<navigator url="/pages/index/signIn/signIn">-->
<!--				<image id='box_img' src='../../static/index/signIn.png' ></image>-->
<!--				<view id='box_text'>会员签到</view>-->
<!--			</navigator>-->
<!--		</view>-->
		<view>
			<navigator url="/pages/index/signIn/signIn">
				<image id='every_img' src='../../static/image/index/everyday.png'></image>
			</navigator>
		</view>
		<view id='image'>
			<navigator url="/pages/index/quality/quality">
				<image id='image_img' src='../../static/image/index/quality.png'></image>
			</navigator>
			<navigator url="/pages/index/newlyElected/newlyElected">
				<image id='image_img' src='../../static/image/index/newlyElected.png'></image>
			</navigator>
		</view>
		<view id='header'>
			<image id='header_img' src='../../static/image/index/titleone.png'></image>
		</view>
		<van-tabs>
		    <view id='useless'>
				<van-tab v-for="(name,index) in titles" :key="index" :title="name">
					<navigator url='detail/detail'>
						<view id='product'>
							<image id='product_img' src='../../static/image/789.jpg'></image>
							<view id='view'></view>
							<view id='product_box'>
								<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
								<view>
									<view id='product_box_presentPrice'>￥<b>3980</b></view>
								</view>
							</view>
						</view>
					</navigator>
				</van-tab>
			</view>
		</van-tabs>
		<view id='header'>
			<image id='header_img' src='../../static/image/index/titletwo.png'></image>
		</view>
		<van-tabs>
			<view id='useless'>
				<van-tab @click="refresh" v-for="(name,index) in titles" :key="index" :title="name">
					<view id='product'>
						<image id='product_img' src='../../static/image/789.jpg'></image>
						<view id='view'></view>
						<view id='product_box'>
							<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
							<view>
								<view id='product_box_presentPrice'>￥<b>3980</b></view>
							</view>
						</view>
					</view>
				</van-tab>
			</view>
		</van-tabs>
	</view>
</template>

<script>
	import Vue from 'vue';
	import { Search, Swipe, SwipeItem, Tab, Tabs } from 'vant';
	Vue.use(Search, Swipe, SwipeItem, Tab, Tabs);
	export default {
		data() {
			return {
				images: [
				    '../../static/image/123.jpg',
				    '../../static/image/123.jpg',
				],
				value: '',
				titles: [ name="综合",name='销量',name='特卖',name='新品',name='更多'],
				name: ''
			}
		},
		onLoad() {

		},
		onPullDownRefresh() {
			this.refresh()
		},
		methods: {
			choose(){
				uni.chooseLocation({
					success:(data)=> {
						return this.name=data.address.substr(6,3)
					}
				})
			},
			//下拉刷新
			refresh(){
				setTimeout(()=>{
					this.list = demo
					//停止下拉刷新
					uni.stopPullDownRefresh();
				},2000)
			}
		}
	}
</script>

<style>
	#top{
		display: flex;
		justify-content: space-around;
	}
	#service{
		position: absolute;
		width: 64rpx;
		height: 61rpx;
		top: 25rpx;
		left: 10rpx;
	}
	#service_img{
		width: 64rpx;
		height: 61rpx;
	}
	#information{
		position: absolute;
		width: 61rpx;
		height: 54rpx;
		top: 25rpx;
		right: 10rpx;
	}
	#information_img{
		width: 61rpx;
		height: 54rpx;
	}
	#content{
		position: relative;
	}
	#address{
		position: absolute;
		top: 25rpx;
		left: 10rpx;
	}
	#jump{
		position: absolute;
		width: 800rpx;
		height: 83rpx;
		font-size: 10rpx;
		top: 25rpx;
		left: 100rpx;
		border-radius: 40rpx;
	}
	#input{
		position: absolute;
		height: 61rpx;
		width: 550rpx;
		top: 0;
		font-size: 30rpx;
		border-radius: 1000rpx;
		background-color: white;
	}
	#search{
		margin-top: 10rpx;
		margin-left: 12rpx;
		width: 40rpx;
		height: 40rpx;
	}
	#topimage{
		width: 750rpx;
	}
	#title {
		display: flex;
		justify-content: space-around;
		padding-top: 1rpx;
	}
	#box_img{
		width: 100rpx;
		height: 100rpx;
	}
	#box_text{
		font-size: 20rpx;
	}
	#image{
		display: flex;
		justify-content: space-around;
	}
	#every_img{
		width: 750rpx;
		height: 200rpx;
	}
	#image_img{
		width: 350rpx;
		height: 200rpx;
	}
	#header{
		top: 10rpx;
		display: flex;
		justify-content: center;
		background-color: #f0f0f0;
	}
	#header_img{
		width: 750rpx;
		height: 50rpx;
	}
	#header_text{
		font-size: 20rpx;
		color: #FF8C00;
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
