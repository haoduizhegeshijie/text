<template>
	<view id="administration" :style="{ 'height': windowHeight + 'px' }">
		<view id="administration_box">
			<view id='name'>商城管理</view>
			<view id='title'>
				<view id='title_title'>收款码</view>
				<view id='title_title'>商品管理</view>
				<view id='title_title'>数据统计</view>
				<view id='title_title'>商品上传</view>
			</view>
		</view>
		<view id="ofLine"></view>
		<view id="box">
			<view id="box_title">订单管理</view>
			<view id="text">
				<view id="header">
					<view id="pay">货到付款</view>
					<view id="time">20250/10/12 17:37</view>
				</view>
				<view id="matter_box">
					<view id="state">
						<view id="state_name">订单状态</view>
						<view id="state_val">已完成</view>
					</view>
					<view id="state">
						<view id="store_name">店铺名称</view>
						<view id="store_val">张宇</view>
					</view>
					<view id="state">
						<view id="seller_name">卖家昵称</view>
						<view id="seller_val">QQ糖</view>
					</view>
				</view>
				<view id="all">
					<view id="commodity">共0件商品</view>
					<view id="price">
						<view id="price_name">实付：</view>
						<view id="price_box">
							<view id="price_box_icon">￥</view>
							<view id="price_box_num">222.00</view>
						</view>
					</view>
				</view>
				<view id="rest">
					<button size="mini">备注</button>
					<button size="mini">详情</button>
<!--					<view id="remark">备注</view>-->
<!--					<view id="particulars">查看详情</view>-->
				</view>
			</view>
		</view>
		<view id="ofLine"></view>
		<view id="box">
			<view id="box_title">订单管理</view>
			<view id="text">
				<view id="header">
					<view id="pay">货到付款</view>
					<view id="time">20250/10/12 17:37</view>
				</view>
				<view id="matter_box">
					<view id="state">
						<view id="state_name">订单状态</view>
						<view id="state_val">已完成</view>
					</view>
					<view id="state">
						<view id="store_name">店铺名称</view>
						<view id="store_val">张宇</view>
					</view>
					<view id="state">
						<view id="seller_name">卖家昵称</view>
						<view id="seller_val">QQ糖</view>
					</view>
				</view>
				<view id="all">
					<view id="commodity">共0件商品</view>
					<view id="price">
						<view id="price_name">实付：</view>
						<view id="price_box">
							<view id="price_box_icon">￥</view>
							<view id="price_box_num">222.00</view>
						</view>
					</view>
				</view>
				<view id="rest">
					<button size="mini">备注</button>
					<button size="mini">详情</button>
					<!--					<view id="remark">备注</view>-->
					<!--					<view id="particulars">查看详情</view>-->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				windowHeight: '',
			}
		},
		mounted () {
			uni.getSystemInfo({
				success: (res) => {
					this.windowHeight = res.windowHeight;
				}
			});
		},
		methods:{
		}
	}
</script>

<style lang="scss">
	#administration{
		background-color: #f5f6fa;

		#administration_box{

			#name{
				text-align: center;
				font-size: 30px;
				font-weight: bold;
				border: 1px solid #000000;
			}

			#title{
				display: flex;
			}

			#title_title{
				width: 750rpx;
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				border: 1px solid #000000;
			}
		}

		#box{
			background-color: #ffffff;
			maring: 0 20rpx;

			#box_title{
				font-size: 20px;
				text-align: center;
				margin-bottom: 20px;
			}

			#text{
				display: flex;
				flex-direction: column;

				#header{
					border-bottom: 1px solid #999;
					display: flex;
					justify-content: space-around;

					#pay{
						background-color: #ff4066;
						padding: 2px;
						border-radius: 20px;
					}
				}

				#matter_box{
					border-bottom: 1px solid #999;

					#state{
						display: flex;
						justify-content: space-around;
						margin-bottom: 10px;
					}
				}

				#all{
					display: flex;
					justify-content:flex-end;
					align-items:center;
					padding: 10px;
					border-bottom: 1px solid #999;

					#commodity{
						font-size: 10px;
					}

					#price{
						display: flex;

						#price_name{
							font-size: 10px;
						}

						#price_box{
							display: flex;

							#price_box_icon{
								font-size: 10px;
							}

							#price_box_num{
								font-size: 10px;
							}
						}
					}
				}

				#rest{
					display: flex;
					justify-content:flex-end;
					align-items:center;
				}
			}
		}

		#ofLine{
			height: 20rpx;
		}
	}
</style>
