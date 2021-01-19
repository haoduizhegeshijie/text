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

		<view class="details" v-show="type == 0">
			<view id="box">
				<view id="orderNumber">
					<view id="orderNumber_name">订单号：</view>
					<view id="orderNumber_num">SH20200429151334849463</view>
				</view>
				<view id="subject">
					<view id="index">
						<view id="productName">
							<view id="productName_num">casd</view>
							<view id="particulars">
								<view id="originalCost_val">398.00</view>
								<view id="commodity_val">*1</view>
							</view>
						</view>
						<view id="currentPrice">
							<view id="currentPrice_name">实际支付金额：</view>
							<view id="currentPrice_val">398.00</view>
						</view>
						<view id="purchaser">
							<view id="purchaser_val">陈秋霞:13939393939</view>
							<view id="time">
								<view id="time_name">下单时间：</view>
								<view id="time_val">1588144414</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="" v-show="type == 2">
			<view>
				<view>粉丝</view>
				<view>9</view>
			</view>
			<view>
				<view>会员</view>
				<view>2</view>
			</view>
			<view>
				<view>经理</view>
				<view>4</view>
			</view>
			<view>
				<view>联营店主</view>
				<view>6</view>
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
				obj: {},
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
					url: 'http://tuh.dingf916.cn/member_order_list',
					data: {
						'token': this.token,
						'openid': this.openid,
						'page': '1',
						'limit': '10',
						'type': ''
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						} else {
							var obj = res.data.data
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
						width: 750rpx;
						height: 200rpx;
						margin-bottom: 25rpx;
						display: flex;

						#productName_num{
							font-size: 50rpx;
							flex: 1;
						}
						#particulars{
							width: 100rpx;

							#originalCost_val{

							}

							#commodity_val{

							}
						}
					}

					#purchaser{
						display: flex;
						margin-bottom: 25rpx;

						#purchaser_name{
							font-size: 25rpx;
							font-weight: bold;
						}

						#purchaser_val{
							font-size: 27rpx;
						}
					}

					#time{
						display: flex;

						#time_name{
							font-size: 20rpx;
							font-weight: bold;
						}

						#time_val{
							font-size: 22rpx;
						}
					}
				}

				#money{
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					#particulars{

						#originalCost{
							display: flex;

							#originalCost_name{
								font-weight: bold;
							}

						}

						#commodity{
							display: flex;

							#commodity_name{
								font-weight: bold;
							}

						}
					}


					#currentPrice{
						display: flex;

						#currentPrice_name{
							font-weight: bold;
						}

						#currentPrice_val{

						}
					}
				}
			}
		}
	}
</style>