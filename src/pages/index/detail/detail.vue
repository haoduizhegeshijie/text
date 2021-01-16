<template>

	<view class="">
		<view v-for="(item,index) in goo" :key="item.to1">
			<view class="top">
				<image style="width: 100%;height: 350px;" src="../../../static/123.jpg"></image>
				<!-- <u-swiper id='swiper' :list='list'></u-swiper> -->
			</view>
			<unisection title="商品介绍" type="line"></unisection>
			<view style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"名称："+item.name}}</view>
			<view v-if="wxstatus=='已通过'" style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"原价：￥"+item.price}}</view>
			<view v-if="wxstatus=='已通过'" style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"现价：￥"+item.discount}}</view>
			<!-- <view style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"存库："+item.quantity}}</view> -->
			<rich-text :nodes="content"></rich-text>
			<unisection title="商品规格" type="line"></unisection>
			<view style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"状态："+item.status}}</view>
			<view style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"规格："+item.type}}</view>
			<view v-if="pos!='用户'" style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"库存："+item.quantity}}</view>
			<view style="margin-left: 20rpx;">
			<uni-number-box  :min="1" :max="999" :value="quan" @change="myquan($event)"></uni-number-box>
			</view>
			<unisection title="商品详情" type="line"></unisection>
			<view style="color: #999999;margin: 20rpx;font-size: 30rpx;">{{"内容："+item.content}}</view>
		</view>
		
		<unisection title="商品详情图" type="line"></unisection>
		<image style="width: 100%;margin-top: 20rpx;height: 350px;" src="../../../static/123.jpg"></image>

		<view class="isbottom">
		</view>
		<view>
		<uniGoodsNav class="isbutto" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
	</view>
	</view>
</template>

<script>
	//引入
	import uniNumberBox from "../../../components/uni-number-box/uni-number-box.vue"
	import uniGoodsNav from '../../../components/uni-goods-nav/uni-goods-nav.vue'
	import unisection from '../../../components/goo-section/goo-section.vue'
	import {
		uniList,
		uniListItem,
		uniListChat
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				goo: [{
					name:' 巧克力',
					price:'20',
					discount:'15',
					status:'上架',
					type:'250kg',
					quantity:'200',
					content:'好吃的巧克力'
				}], //商品信息
				wxstatus: '已通过',
				quan: 1, //初始数量
				quan1: 0, //最终数量
				options: [{
					icon: 'headphones',
					text: '收藏'
				}, {
					icon: 'cart',
					text: '购物车',
					//info: 2
				}],
				buttonGroup: [{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}],
			}
		},
		components: {
			uniGoodsNav,
			uniNumberBox,
			unisection
		},
		onLoad() {
		},
		methods: {
			//存取數量
			myquan(e) {
				console.log(e)
				this.quan1 = e
			},
			//左侧
			onClick(e) {
				switch (e.index) {
					case 0:
						//客服
						break
					case 1:
						//购物车
						break
				}
			},
			//右侧
			buttonClick(e) {
				switch (e.index) {
					case 0:
						this.mycat();
						break
					case 1:
						this.orno();
						break
				}
			},
			//确认下单
			orno() {
				var thit = this
				uni.showModal({
					title: '提示',
					content: '确认下单',
					success: function(res) {
						if (res.confirm) {
							thit.getwxid();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//下单
			getwxid() {
				uni.showToast({
					title: '下单成功',
					duration: 2000
				});
			},
			mycat(){
				uni.showToast({
					title: '加入购物车成功',
					duration: 2000
				});
			}
		
		}
	}
</script>

<style lang="scss">
	.top {
		image {
			width: 100%;
			height: 100%;
		}
	}

	.body_list {
		border-bottom: 1rpx none #3B4144;
		margin-bottom: 40rpx;
		margin-top: 40rpx;
	}

	.body_list_1 {
		margin-left: 40rpx;
		margin-bottom: 40rpx;
		font-size: 35rpx;
	}

	.hot_goods {
		background: #eee;
		overflow: hidden;

		.tit {
			height: 50px;
			line-height: 50px;
			color: #b50e03;
			text-align: center;
			letter-spacing: 20px;
			background: #fff;
			margin: 10rpx 0;
		}
	}

	.datetime {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10rpx;

		.datetime1 {
			border: 1rpx solid #3B4144;
			width: 30%;
			height: 130rpx;
			margin: 10rpx;
			text-align: center;
			border-radius: 15rpx;
			background-color: #FFFFFF;

			.datetime11 {
				text-align: center;
				font-size: 25rpx;
				position: relative;

			}
		}

		.ismycolor {
			border: 3rpx solid #AAAAAA;
			width: 30%;
			height: 130rpx;
			margin: 10rpx;
			text-align: center;
			border-radius: 15rpx;
			background-color: #E5E5E5;

			.datetime11 {
				font-size: 25rpx;
				position: relative;
				text-align: center;

				color: #AAAAAA;
			}
		}

		.mycolor {
			border: 3rpx solid #E64340;
			width: 30%;
			height: 130rpx;
			margin: 10rpx;
			text-align: center;
			border-radius: 15rpx;
			background-color: #FFFFFF;

			.datetime11 {
				font-size: 25rpx;
				position: relative;
				text-align: center;

				color: #E64340;
			}
		}
	}

	.time {
		border-top: 1rpx none #3B4144;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 10rpx;

		.timenoon {
			border: 1rpx solid #3B4144;
			width: 45%;
			height: 200rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
			border-radius: 15px;
			background-color: #FFFFFF;

			.timenoon1 {
				text-align: center;
				position: relative;
				top: 50rpx;
				margin-bottom: 20rpx;
				font-size: 40rpx;
			}
		}

		.mycolor {
			border: 1rpx solid #E64340;
			width: 45%;
			height: 200rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
			border-radius: 15px;
			background-color: #FFFFFF;

			.timenoon1 {
				text-align: center;
				position: relative;
				top: 50rpx;
				margin-bottom: 20rpx;
				font-size: 40rpx;
				color: #E64340;
			}
		}

		.ismycolor {
			border: 1rpx solid #AAAAAA;
			width: 45%;
			height: 200rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
			border-radius: 15px;
			background-color: #E5E5E5;

			.timenoon1 {
				text-align: center;
				position: relative;
				top: 50rpx;
				margin-bottom: 20rpx;
				font-size: 40rpx;
				color: #AAAAAA;
			}
		}
	}

	.buttionyes {
		width: 80%;
		height: 80%;
		margin: 10rpx;
		margin-left: 10%;
	}

	.isbuttionyes {
		background-color: #FFFFFF;
		text-align: center;
		width: 100%;
		position: fixed;
		bottom: 1rpx;
	}

	.isbottom {
		text-align: center;
		width: 450rpx;
		height: 100rpx;
		display: flex;
		flex-wrap: wrap;
		position: relative;
		left: 200rpx;
	}

	.list-text1 {
		width: 100%;
		height: 50upx;
		line-height: 90upx;
		font-size: 25upx;
		color: #555;
		flex: 1;
	}
</style>
