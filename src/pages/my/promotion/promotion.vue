<template>
	<view id="promotion"  :style="{ 'height': windowHeight + 'px' }">
<!--		<view @click='handleShowCodeClick'>点击出现二维码</view>-->
<!--		<view class="model-view" :style="showModal?'':'display:none;'">-->
<!--			<view class="model-out-box">-->
<!--				<view class="model-content">-->
<!--					<canvas  canvas-id="myQrcode" style="margin: 20px;"></canvas>-->
<!--				</view>-->
<!--				<image src="/static/image/wrong-white.png" class="wrong-img" @click="handleHideCodeClick"/>-->
<!--			</view>-->
<!--		</view>-->
		<view id="background">
			<view id="text">
				<image src="../../../static/image/my/promotion/text.png"></image>
			</view>
			<view id="rectangle">
				<image src="../../../static/image/my/promotion/rectangle.png">
				</image>
				<image id="image_small" :src="info"></image>
			</view>
		</view>
		<view id="button">
			<button style="text-align: center; background-color: #FFDF44;" size="mini">联盟分享</button>
		</view>
	</view>
</template>

<script>
	// import qrCode from '../../../static/js/weapp-qrcode.js'; //二维码生成器
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
			uni.request({
				url: '/api/get_qrcode',
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
						let api = 'http://tuh.dingf916.cn'
						that.info = api + res.data.data.qrcode
						console.log(that.info)
					}
					console.log(res)
				}
			})
		},
		data () {
			return {
				windowHeight: '',
				info: ''
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
		methods:{
		}
	}
</script>

<style lang="scss">
	#promotion{
		background-image: url("../../../static/image/my/promotion/background.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;

		#background{

			#text{
				height: 450rpx;
				padding-top: 120rpx;
				text-align: center;
				margin: auto 0;

				image{
					width: 650rpx;
					height: 200rpx;
				}
			}

			#rectangle{
				margin-left: 125rpx;
				position: relative;

				image{
					width: 500rpx;
				}

				#image_small{
					position: absolute;
					width: 300rpx;
					height: 300rpx;
					top: 80rpx;
					left: 100rpx;
				}
			}
		}

		#button{
			padding-top: 100rpx;
			width: 750rpx;
			text-align: center;

			button{
				text-align: center;
			}
		}
	}
</style>
