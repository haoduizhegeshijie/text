<template>
	<view>
		<view class="doorBox">
			<view class="inv-h-w">
				<!-- 档案池 -->
				<view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">邀请好友</view>
				<!-- 已选档案 -->
				<view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="yiXuan">团队</view>
			</view>
			
			<view class="" v-show="Inv == 0">
				<view>
					<view>
						<image src="../../../static/image/my/default.png" mode=""></image>
					</view>
					<view>
						<view>qwer123</view>
						<view>2020/12/21 15:00:00</view>
					</view>
					<view>
						<view>粉丝</view>
					</view>
				</view>
			</view>
			<view class="" v-show="Inv == 1">
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

<style>
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
	}

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
</style>
