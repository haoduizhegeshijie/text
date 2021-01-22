<template>
	<view id="transpost" :style="{ 'height': windowHeight + 'px' }">
		<view class="inv-h-w">
			<!-- 档案池 -->
			<view :class="['inv-h',type==0?'inv-h-se':'']" @click="type=0">未支付</view>
			<!-- 已选档案 -->
			<view :class="['inv-h',type==2?'inv-h-se':'']" @click="yiXuan">已发货</view>
			<!-- 已选档案 -->
			<view :class="['inv-h',type==3?'inv-h-se':'']" @click="delivery">待收货</view>
		</view>

		<view class="details" v-show="type == 0" v-for="(index, key) in obj" :key = key>
			<view id="box">
				<view id="orderNumber">
					<view id="orderNumber_name">订单号：</view>
					<view id="orderNumber_num">{{index.ordersn}}</view>
				</view>
				<view id="subject">
					<view id="index">
						<view id="productName">
							<view id="productName_num">{{index.optionname}}</view>
							<view id="particulars">
								<view id="originalCost_val">{{index.goodsprice}}</view>
								<view id="commodity_val">数量*{{index.total}}</view>
							</view>
						</view>
						<view id="currentPrice">
							<view id="currentPrice_name">实际支付金额：</view>
							<view id="currentPrice_val">{{index.price}}</view>
						</view>
						<view id="purchaser">
							<view id="purchaser_val">{{index.realname}}</view>
							<view id="time">
								<view id="time_name">下单时间：</view>
								<view id="time_val">{{index.createtime}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="details" v-show="type == 2" v-for="(index, key) in obj" :key = key>
			<view id="box">
				<view id="orderNumber">
					<view id="orderNumber_name">订单号：</view>
					<view id="orderNumber_num">{{index.ordersn}}</view>
				</view>
				<view id="subject">
					<view id="index">
						<view id="productName">
							<view id="productName_num">{{index.optionname}}</view>
							<view id="particulars">
								<view id="originalCost_val">{{index.goodsprice}}</view>
								<view id="commodity_val">数量*{{index.total}}</view>
							</view>
						</view>
						<view id="currentPrice">
							<view id="currentPrice_name">实际支付金额：</view>
							<view id="currentPrice_val">{{index.price}}</view>
						</view>
						<view id="purchaser">
							<view id="purchaser_val">{{index.realname}}</view>
							<view id="time">
								<view id="time_name">下单时间：</view>
								<view id="time_val">{{index.createtime}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="details" v-show="type == 3" v-for="(index, key) in obj" :key = key>
			<view id="box">
				<view id="orderNumber">
					<view id="orderNumber_name">订单号：</view>
					<view id="orderNumber_num">{{index.ordersn}}</view>
				</view>
				<view id="subject">
					<view id="index">
						<view id="productName">
							<view id="productName_num">{{index.optionname}}</view>
							<view id="particulars">
								<view id="originalCost_val">{{index.goodsprice}}</view>
								<view id="commodity_val">数量*{{index.total}}</view>
							</view>
						</view>
						<view id="currentPrice">
							<view id="currentPrice_name">实际支付金额：</view>
							<view id="currentPrice_val">{{index.price}}</view>
						</view>
						<view id="purchaser">
							<view id="purchaser_val">{{index.realname}}</view>
							<view id="time">
								<view id="time_name">下单时间：</view>
								<view id="time_val">{{index.createtime}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onShow() {
			var that = this;
			wx.getStorage({
				key: 'history',
				success(res){
					that.history = res.data
				},
				fail: function(res) {
					console.log(res+'aaaaa')
				}
			});
			this.token = this.history.token
			this.openid = this.history.openid
			this.apply()
		},
		data() {
			return {
				type: 0,
				obj: [],
				ordersn: '',
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
			yiXuan() {
				/* 滑动门默认值 */
				this.type = 2;
			},
			delivery() {
				/* 滑动门默认值 */
				this.type = 3;
			},
			apply(){
				uni.request({
					url: '/api/member_order_list',
					data: {
						'token': this.token,
						'openid': this.openid,
						'page': '1',
						'limit': '10',
						'type': ''
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': this.token,
						'openid': this.openid,
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.data.msg,
								icon: 'none'
							});
						} else {
							this.obj = res.data.data.data
							console.log(this.obj)
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	#transpost{
		background-color: #f5f6fa;

		.doorBox {
			width: 710upx;
			min-height: 800upx;
			margin: 20upx auto;
			font-size: 30upx;
		}

		.inv-h-w {
			background-color: #fff;
			height: 100upx;
			display: flex;
			margin-bottom: 40upx;
			align-items: center;

			.inv-h {
				width: 350upx;
				text-align: center;
				color: #000;
				height: 100upx;
				line-height: 100upx;
				border-bottom: 2upx solid #e1e1e1;
			}

			.inv-h-se {
				color: #25b7b4;
				border-bottom: 2upx solid #25b7b4;
			}
		}

		.details{
			margin: 0 10rpx;

			#box{
				background-color: #fff;
				margin-bottom: 20px;

				#orderNumber{
					height: 50 rpx;
					line-height: 50rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					#orderNumber_name{
						font-size: 35rpx;
					}

					#orderNumber_num{
						font-size: 25rpx;
						color: #ff4066;
					}
				}

			}

			#subject{
				padding-bottom: 20rpx;

				#index{

					#productName{
						width: 710rpx;
						height: 200rpx;
						margin-bottom: 25rpx;
						display: flex;

						#productName_num{
							font-size: 100rpx;
							flex: 1;
						}
						#particulars{
							width: 150rpx;

							#originalCost_val{
								font-size: 20px;
							}

							#commodity_val{
								font-size: 20px;
							}
						}
					}

					#currentPrice{
						float: right;
						display: flex;
						margin-bottom: 25rpx;

						#currentPrice_name{
							font-size: 25rpx;
							font-weight: bold;
						}

						#currentPrice_val{
							font-size: 27rpx;
						}
					}

					#purchaser{
						margin-top: 100rpx;
						display: flex;

						#purchaser_val{
							width: 375rpx;
							font-size: 20rpx;
							font-weight: bold;
							text-align: center;
						}

						#time{
							flex: 1;
							display: flex;
						}
					}
				}
			}
		}
	}
</style>