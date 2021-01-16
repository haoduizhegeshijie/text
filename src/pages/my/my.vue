<template>
	<view id='my'>
		<image id='header_img' src='../../static/my/top.png'></image>
		<view id='header'>
			<view id='header_me'>
				<view id='header_me_personal'>
					<navigator id='balance' url='/pages/my/personal/personal'>
						<image id='personal_img' src='../../static/my/default.png'></image>
					</navigator>
					<view id='personal'>
						<view id='personal_box'>
							<view id='username'>zhang1964</view>
							<view id='num'>邀请ID:123456</view>
						</view>
						<view id='integral'>
							<image id='integral_img' src="../../static/my/rectangle.png" mode=""></image>
							<view id='integral_name'>LV.03</view>
							<image id='integral_img' src="../../static/my/fans.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view id='header_money'>
				<navigator id='money' url='balance/balance'>
					<view id='header_money_box'>
						<view id='money_num'>￥982.14</view>
						<view id='money_name'>余额</view>
					</view>
				</navigator>
				<navigator url='frozen/frozen'>
					<view id='header_money_box'>
						<view id='money_num'>￥0</view>
						<view id='money_name'>冻结</view>
					</view>
				</navigator>
				<navigator url='venosa/venosa'>
					<view id='header_money_box'>
						<view id='money_num'>196</view>
						<view id='money_name'>金豆余额</view>
					</view>
				</navigator>
			</view>
		</view>
		<view id='content'>
<!--			<view id='content_box'>-->
<!--				<navigator id='content_chunk' url='/pages/my/personal/personal'>-->
<!--					<image id='content_img' src='../../static/my/data.png'></image>-->
<!--					<view id='content_text'>我的资料</view>-->
<!--				</navigator>-->
<!--			</view>-->
			<view class="list" v-for="(list,list_i) in severList" :key="list_i">
				<view class="li" v-for="(li,li_i) in list" @tap="toPage(list_i,li_i)" v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover" :key="li.name" >
					<view class="icon"><image :src="'../../static/my/'+li.icon"></image></view>
					<view class="text">{{li.name}}</view>
					<image class="to" src="../../static/HM-PersonalCenter/to.png"></image>
				</view>
			</view>
		</view>
<!--		<view id='logout'>-->
<!--			<image id='logout_img' src="../../static/my/quit.png" mode="">&nbsp; </image>-->
<!--			<view id='logout_text'>&nbsp;退出登录</view>-->
<!--		</view>-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				severList:[
					[
						{name:'全部订单',icon:'all.png', url:'/pages/my/transport/transport'},
						{name:'奖励明细',icon:'datail.png',url:'/pages/my/award/award'},
						{name:'推广二维码',icon:'promotion.png',url:'/pages/my/promotion/promotion'},
						{name:'申请商家',icon:'applyfor.png',url:'/pages/my/applyFor/applyFor'},
					],
					[
						{name:'商家管理',icon:'administration.png',url:'/pages/my/administration/administration'},
						{name:'我的邀请',icon:'invite.png',url:'/pages/my/invite/invite'},
						{name:'收货地址',icon:'address.png',url:'/pages/my/address/address'},
						{name:'我的收藏',icon:'collect.png',url:'/pages/my/collect/collect'}
					]
				],
			}
		},
		methods: {
			//用户点击列表项
			toPage(list_i,li_i,){
				uni.showToast({title: this.severList[list_i][li_i].url});
				uni.navigateTo({
				    url: this.severList[list_i][li_i].url
				});
			}
		}
	}
</script>

<style lang="scss">
	#my{
		position: relative;
		// background-color: #f5f6fa;
	}
	#header_img{
		width: 750rpx;
		height: 350rpx;
	}
	#header{
		height: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 710rpx;
		margin-left: 20rpx;
		background-color: white;
		position: absolute;
		top: 30rpx;
		box-shadow: 0 10px 5px #888888;
		border-radius: 20rpx;

		#header_me{
			height: 200rpx;
			margin-bottom: 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			#header_me_personal{
				display: flex;
				align-items: center;

				#balance{
					display: flex;

					#personal_img{
						display: inline-block;
						width: 178rpx;
						height: 178rpx;
						margin-right: 20rpx;
					}
				}

				#personal{
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					#personal_box{
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						#username{
							font-size: 49rpx;
						}

						#num{
							font-size: 37rpx;
						}
					}

					#integral{
						margin-top: 26rpx;
						position: relative;
						display: flex;

						#integral_img{
							width: 90rpx;
							height: 34rpx;
						}

						#integral_name{
							position: absolute;
							top: 5rpx;
							left: 10rpx;
							font-size: 26rpx;
							line-height: 24rpx;
						}
					}
				}
			}
		}

		#header_money{
			flex: 1;
			display: flex;
			justify-content: space-around;


			#money{


				#header_money_box{
					width: 240rpx;
					height: 100rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					border-right: 1px solid black;


					#money_num{
						height: 41rpx;
						font-size: 40rpx;
						font-weight: bold;
						color: #FF4066;
						line-height: 51rpx;
					}

					#money_name{
						margin-top: 10rpx;
						height: 33rpx;
						font-size: 33rpx;
						font-weight: normal;
						color: #999999;
						line-height: 35rpx;
					}
				}

				#header_money_box:last-child{
					border: 0;
				}
			}
		}
	}

	#content{
		margin-top: 100rpx;
		background-color: #fff;

		.list{
			width:750rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;

			.li{
				width:92%;
				height:100upx;
				padding:0 4%;
				border-bottom:solid 1upx #f5f6fa;
				display:flex;
				align-items:center;

				&.noborder{
					border-bottom:0
				}

				.icon{
					flex-shrink:0;
					width:50upx;
					height:50upx;
					image{
						width:50upx;
						height:50upx;
					}
				}

				.text{
					padding-left:20upx;
					width:100%;
					color:#666;
				}

				.to{
					flex-shrink:0;
					width:40upx;
					height:40upx
				}
			}
		}
	}
</style>
