<template>
	<view id='my'>
		<image id='header_img' src='../../static/image/my/top.png'></image>
		<view id='header'>
			<view id='header_me'>
				<view id='header_me_personal'>
					<navigator id='balance' url='/pages/my/personal/personal'>
						<image id='personal_img' src='../../static/image/my/default.png'></image>
					</navigator>
					<view id='personal'>
						<view id='personal_box'>
							<view id='username'>{{openid}}</view>
							<view id='num'>邀请ID:123456</view>
						</view>
						<view id='integral'>
							<image id='integral_img' src="../../static/image/my/rectangle.png" mode=""></image>
<!--							{{info.team_level_id}}-->
							<view id='integral_name'>LV.1</view>
							<image id='integral_img' src="../../static/image/my/fans.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view id='header_money'>
			<navigator id='money' url='balance/balance'>
				<view id='header_money_box'>
					<view id='money_num'>￥{{info.credit2}}</view>
					<view id='money_name'>余额</view>
				</view>
			</navigator>
			<!--				url='frozen/frozen' {{info.dongjie}}-->
			<navigator id='money' >
				<view id='header_money_box'>
					<view id='money_num'>￥0</view>
					<view id='money_name'>冻结</view>
				</view>
			</navigator>
			<navigator id='money' class="border" url='venosa/venosa'>
				<view id='header_money_box'>
					<view id='money_num'>{{info.credit1}}</view>
					<view id='money_name'>金豆余额</view>
				</view>
			</navigator>
		</view>
		<view id='content'>
			<view class="list" v-for="(list,list_i) in severList" :key="list_i">
				<view class="li" v-for="(li,li_i) in list" @tap="toPage(list_i,li_i)" v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover" :key="li.name">
					<view class="icon"><image :src="'../../static/image/my/'+li.icon"></image></view>
					<view class="text">{{li.name}}</view>
					<image class="to" src="../../static/image/HM-PersonalCenter/to.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onShow() {
			var that = this;
			uni.getStorage({
				key: 'history',
				success(res){
					that.history = res.data
					if(that.history.token == ''){
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
				},
				fail: function(res) {
					console.log(res+'aaaaa')
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			});
			this.token = this.history.token
			this.openid = this.history.openid
			if(this.openid == ''){
				if(this.token == ''){
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			}else{
				uni.request({
					url: '/api/member_info',
					data: {
						token : this.token,
						openid: this.openid
					},
					header: {
						'Content-Type' : 'application/x-www-form-urlencoded',
						'token': this.token,
						'openid': this.openid
					},
					method: 'POST',
					success: (res) => {
						if (res.data.data.code == 404) {
							uni.navigateTo({
								url:'/pages/login/login'
							});
						} else if(res.data.code != 200){
							uni.showToast({
								title: res.data.msg
							});
						} else {
							that.info = res.data.data
						}
						// console.log(res)
					}
				})
			}
		},
		data() {
			return {
				storage: {},
				openid: '', //用户openid
				team_level_id: '', // 用户等级id
				level: '', // 用户身份等级
				credit1: '', // 金豆
				dongjie: '', //冻结
				credit2: '', //余额
				token: '',
				info: {},
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
						// {name:'收货地址',icon:'address.png',url:'/pages/my/address/address'},
						// {name:'我的收藏',icon:'collect.png',url:'/pages/my/collect/collect'},
						{name:'设置',icon:'set.png',url:'/pages/my/set/set'}
					],
					[
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
	}
	#header_img{
		width: 750rpx;
		height: 350rpx;
	}
	#header{
		height: 360rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 710rpx;
		margin-left: 20rpx;
		position: absolute;
		top: 30rpx;
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
							left: 20rpx;
							font-size: 26rpx;
							line-height: 24rpx;
						}
					}
				}
			}
			#tab{

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}

	#header_money{
		flex: 1;
		display: flex;
		justify-content: space-around;


		#money{
			width: 750rpx;
			border-right: 1px solid #999;

			#header_money_box{
				height: 100rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

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
		}
	}

	.border{
		border-right: none;
	}

	#content{
		margin-top: 10rpx;
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
