<template>
	<view>
		<view class="inv-h-w">
			<!-- 档案池 -->
			<view :class="['inv-h',type==0?'inv-h-se':'']" @click="type=0">未支付</view>
			<!-- 已选档案 -->
			<view :class="['inv-h',type==2?'inv-h-se':'']" @click="yiXuan">已发货</view>
			<!-- 已选档案 -->
			<view :class="['inv-h',type==3?'inv-h-se':'']" @click="delivery">待收货</view>
		</view>

		<view class="" v-show="type == 0">
			<view>
				<view>
					<image src="../../../static/my/default.png" mode=""></image>
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
					// if(that.history.length==0){
					// 	that.setData({
					// 		status:false
					// 	});
					// }else{
					// 	that.setData({
					// 		status:true
					// 	})
					// }
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
			}
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
						'page': '1',
						'limit': '10',
						'type': ''
					},
					header: {
						'token': 'this.token',
						'openid': 'this.openid',
						'content-type': 'application/x-www-form-urlencoded',
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						// if (res.data.code != 200) {
						// 	uni.showToast({
						// 		title: res.data.msg,
						// 		icon: 'none'
						// 	});
						// } else {
						// 	uni.showToast({
						// 		title: res.data.msg
						// 	});
						// 	setTimeout(function() {
						// 		uni.navigateBack();
						// 	}, 1500)
						// }
						console.log(res)
					}
				})
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