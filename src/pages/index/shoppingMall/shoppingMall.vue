<template>
	<view>
		<scroll-view scroll-x="true" class="tab-h" :scroll-into-view="scroll_into" :scroll-with-animation="true">
			<view v-for="(item, index) in tab_bar" class="tab-item" :class="current_tab==index ? 'tab-bar-active' : ''"	:key="index" :data-current="index" :id="item.id" @click="change_tab">{{item.tit}}</view>
		</scroll-view>
		<view class="hr"></view>
		<swiper class="swiper" :current="current_tab" duration="300" @change="change_swiper">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
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
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
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
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
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
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-red">D</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">E</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">F</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-red">G</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">H</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">I</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-red">J</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">K</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">L</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-red">M</view>
			</swiper-item>
		</swiper>
		<view @click='show'>分享</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				// 当前选中tab索引
				current_tab: 0,
				// 当前滚动条距离左边的位置
				scroll_left: 0,
				// 当前滚动条滚动到id位置
				scroll_into: '',
				// 屏幕宽度
				screen_width: 0,
				tab_bar: [{
						id: 'emotion',
						tit: '休闲零食'
					},
					{
						id: 'news',
						tit: '粮油副食'
					},
					{
						id: 'diagrams',
						tit: '酒水乳饮'
					},
					{
						id: 'house',
						tit: '个人护理'
					},
					{
						id: 'cars',
						tit: '美容护肤'
					},
					{
						id: 'healthy',
						tit: '家电数码'
					},
					{
						id: 'workplace',
						tit: '家居厨具'
					},
					{
						id: 'all',
						tit: '生鲜水果'
					},
					{
						id: 'other',
						tit: '方便速食'
					},
					{
						id: 'music',
						tit: '医药保健'
					},
					{
						id: 'movie',
						tit: '母婴玩具'
					},
					{
						id: 'sport',
						tit: '纸品家具'
					},
					{
						id: 'country',
						tit: '日用百货'
					}
				],
			}
		},
		onLoad() {
			// 首次获取屏幕宽度
			uni.getSystemInfo({
				success: (res) => {
					this.screen_width = res.screenWidth
				}
			});
		},
		methods: {
			// 点击tabbar事件
			change_tab(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.run_tab(index)
			},
			// swiper滑动事件
			change_swiper(e){
				// console.log('你啥时候执行啊', e)
				console.log(this.tab_bar)
				let index = e.target.current || e.detail.current;
				this.run_tab(index)
			},
			// 执行整个tab事件
			run_tab(index){
				// 记录当前滑动的位置
				this.current_tab = index
				// 如果点击了第4个以后的,滚动条向右移动屏幕的宽度
				this.scroll_into = this.tab_bar[index].id
			},
			show(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 1,
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			}
		}
	}
</script>

<style>
	.tab-h {
		height: 80rpx;
		width: 100%;
		line-height: 80rpx;
		background: #f7f7f7;
		font-size: 16px;
		white-space: nowrap;

	}

	.tab-item {
		padding: 0 36rpx;
		display: inline-block;
	}

	.tab-bar-active {
		font-weight: bold;
		color: #007AFF;
	}

	.hr {
		height: 1rpx;
		background-color: #eeeeee;
	}
	.swiper{
		height: 500rpx;
		text-align: center;
		
	}
	.swiper-item{
		height: 500rpx;
		/* line-height: 500rpx; */
	}
	#header{
		display: flex;
	}
	#header_box{
		width: 250rpx;
		border: 1rpx solid #000000;
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