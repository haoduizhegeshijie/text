<template>
	<view>
		<view class="doorBox">
			<view class="inv-h-w">
				<!-- 档案池 -->
				<view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">邀请好友</view>
				<!-- 已选档案 -->
				<view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="yiXuan">团队</view>
			</view>
			
			<view class="content" v-show="Inv == 0">
				<view id="inivit_box">
					<view id="headPortrait">
						<image id="headPortrait_img" src="../../../static/image/my/default.png" mode=""></image>
					</view>
					<view id="personalCenter">
						<view id="name">qwer123</view>
						<view id="time">2020/12/21 15:00:00</view>
					</view>
					<view id="junior">
						<view id="fans">粉丝(lv0)</view>
						<view id="num">0.00</view>
					</view>
				</view>
			</view>
			<view class="team" v-show="Inv == 1">
				<view id="fans">
					<view id="fans_name">粉丝</view>
					<view id="fans_value">9</view>
				</view>
				<view id="fans">
					<view id="fans_name">会员</view>
					<view id="fans_value">2</view>
				</view>
				<view id="fans">
					<view id="fans_name">经理</view>
					<view id="fans_value">4</view>
				</view>
				<view id="fans">
					<view id="fans_name">联营店主</view>
					<view id="fans_value">6</view>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {	
				Inv: 0,
			}
		},
		methods: {
			yiXuan() {
				/* 滑动门默认值 */
				this.Inv = 1;
			}
		}
	}
</script>

<style lang="scss">
	.doorBox {
		width: 710upx;
		min-height: 800upx;
		margin: 20upx auto;
		font-size: 30upx;
	}

	.inv-h-w {
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

	.content{

		#inivit_box{
			display: flex;
			justify-content: space-around;
			align-items: center;
			border: 1px solid #999;

			#headPortrait{
				width: 200rpx;

				#headPortrait_img{
					width: 200rpx;
					height: 200rpx;
				}
			}

			#personalCenter{

			}

			#junior{

				#fans {
					color: #E6B736;
				}
			}
		}
	}

	.team{

		#fans{
			display: flex;
			marign-top: 50rpx;
			margin-left: 40rpx;

			#fans_name{
				width: 150rpx;
				border: 1px solid #999;
				text-align: center;
			}

			#fans_value{
				width: 500rpx;
				border: 1px solid #999;
				text-align: center;
			}
		}
	}
</style>
