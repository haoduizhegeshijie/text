<template>
	<view id="award">
		<view v-for="(index, key) in info" :key="key">
			<view id="box">
				<view id="time">
					<view id="time_name">时间：</view>
					<view id="time_val">{{index.awardmoney}}</view>
				</view>
				<view id="details">
					<view id="awards">
						<view id="awards_name">奖项：</view>
						<view id="awards_val">{{index.bdyy}}</view>
					</view>
					<view id="earnings">
						<view id="earnings_name">收益：</view>
						<view id="earnings_val">{{idnex.awardmoney}}</view>
					</view>
				</view>
			</view>
			<view id="interval"></view>
		</view>

		<view id="box">
			<view id="time">
				<view id="time_name">时间：</view>
				<view id="time_val">7-30 2:10</view>
			</view>
			<view id="details">
				<view id="awards">
					<view id="awards_name">奖项：</view>
					<view id="awards_val">团队返现</view>
				</view>
				<view id="earnings">
					<view id="earnings_name">收益：</view>
					<view id="earnings_val">25.0000</view>
				</view>
			</view>
		</view>
		<view id="interval"></view>
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
				},
				fail: function(res) {
					// console.log(res+'aaaaa')
				}
			});
			this.token = this.history.token
			this.openid = this.history.openid
			uni.request({
				url: '/api/member_price_log',
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
					if (res.data.code == 404) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					} else if(res.data.code != 200){
						uni.showToast({
							title: res.data.msg
						});
					} else {
						that.info = res.data.data.data
					}
					console.log(res)
				}
			})
		},
		data() {
			return {
				info: []
			}
		}
	}
</script>

<style lang="scss">
	#award{
		width: 750rpx;
		background-color: #f5f6fa;

		#box{
			margin-left: 20rpx;
			width: 690rpx;
			background-color: #fff;

			#time{
				display: flex;
				justify-content: center;
				/*align-items: center;*/

				#time_name{
					font-size: 40rpx;
					color: #ff4066;
					font-weight: bold;
				}

				#time_val{
					font-size: 35rpx;
				}
			}

			#details{
				width: 690rpx;
				display: flex;
				justify-content: space-around;

				#awards{
					display: flex;
					align-items: center;

					#awards_name{
						font-size: 30rpx;
						color: #FF4066;
						font-weight: bold;
					}

					#awards_val{
						font-size: 25rpx;
					}
				}

				#earnings{
					display: flex;
					align-items: center;

					#earnings_name{
						font-size: 30rpx;
						color: #FF4066;
						font-weight: bold;
					}

					#earnings_val{
						font-size: 25rpx;
					}
				}
			}
		}
		#interval{
			height: 20rpx;
		}
	}
</style>
