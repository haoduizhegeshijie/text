<template>
	<view>
		<view>
			<view>时间：</view>
			<view>7-30 2:10</view>
		</view>
		<view>
			<view>
				<view>奖项：</view>
				<view>团队返现</view>
			</view>
			<view>
				<view>收益：</view>
				<view>25.0000</view>
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
						that.info = res.data.data
					}
					console.log(res)
				}
			})
		},
		data() {
			return {
				info: {}
			}
		}
	}
</script>

<style>

</style>
