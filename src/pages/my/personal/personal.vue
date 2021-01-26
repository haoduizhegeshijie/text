蓝色： #1b85e9
<template>
	<view id="personal">
		<view id="">
			<view class="cell">
				<text class="tit fill">头像</text>
				<view class="avatar-wrap" @click="chooseImage">
					<image class="avatar" :src="tempAvatar || userInfo.avatar || '../../../static/image/123.jpg'" mode="aspectFill"></image>
					<!-- 进度遮盖 -->
					<view class="progress center" :class="{'no-transtion': uploadProgress === 0, show: uploadProgress != 100}" :style="{ width: uploadProgress + '%', height: uploadProgress + '%', }" ></view>
				</view>
			</view>
			<view class="cell b-b">
				<text class="tit fill">用户名</text>
				<input class="input" v-model="weixin" type="text" placeholder="请输入用户名" placeholder-class="placeholder">
			</view>
			<view class="cell b-b">
				<text class="tit fill">姓名</text>
				<input class="input" v-model="username" type="text" maxlength="8" placeholder="请输入姓名" placeholder-class="placeholder">
			</view>
<!--			<view class="cell b-b">-->
<!--				<view class="tit fill">微信号</view>-->
<!--				<input class="input" v-model="userInfo.nickname" type="text" placeholder="请输入你的微信号" placeholder-class="placeholder">-->
<!--			</view>-->
			<view class="cell b-b">
				<view class="test">出生日期</view>
				<view>{{datetime}}</view>
				<button type="primary" @click="onShowDatePicker('datetime')">选择时间</button>
				<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
			</view>
			<view class="cell b-b">
				<view class="text-area">
					<view class="test">现住地址</view>
				</view>
				<pickerAddress class="input" @change="change">{{txt}}</pickerAddress>
			</view>
			<button id="button" @click = "columnchange" type="primary">确认修改</button>
		</view>
	</view>
</template>

<script>
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue'
	import mxDatePicker from '@/components/mx-datepicker/mx-datepicker.vue'
	export default {
		data() {
			return {
				userInfo: '',
				tempAvatar: '',
				uploadProgress: 100,
				datetime: '',
				type: 'rangetime',
				value: '',
				birthyear: '', // 年
				birthmonth: '', // 月
				birthday: '', // 日
				txt: '选择地址',
				city: '', //市
				area: '', //区
				province: '' ,// 省,
				weixin: '' ,// 微信名
				username: '', // 姓名
			}
		},
		onLoad() {
		},
		components: {
			pickerAddress,
			mxDatePicker
		},
		methods: {
			//选择头像
			chooseImage(){
				uni.chooseImage({
					count: 1,
					success: res=> {
						uni.navigateTo({
							url: `./cutImage/cut?src=${res.tempFilePaths[0]}`
						});
					}
				});
			},
			onShowDatePicker(type){//显示
				this.type = type;
				this.showPicker = true;
				this.value = this[type];
			},
			onSelected(e) {//选择
				this.showPicker = false;
				if(e) {
					this[this.type] = e.value;
					this.birthyear = e.value.slice(0, 4)
					this.birthmonth = e.value.slice(5, 7)
					this.birthday = e.value.slice(8, 11)
					//选择的值
					// console.log('value => '+ e.value);
					// //原始的Date对象
					// console.log('date => ' + e.date);
				}
			},
			change(data) {
				this.txt = data.data.join('')
				this.province = data.data[0]
				this.city = data.data[0]
				this.area = data.data[0]
			},
			columnchange(){
				var that = this
				uni.getStorage({
					key: 'history',
					success(res){
						that.history = res.data
					},
					fail: function(res) {
						console.log(res+'aaaaa')
					}
				});
				uni.request({
					url: '/api/member_save',
					data: {
						token : this.history.token,
						openid: this.history.openid,
						weixin: this.weixin,
						username: this.username,
						birthyear: this.birthyear,
						birthmonth: this.birthmonth,
						birthday: this.birthday,
						province: this.province,
						city: this.city,
						area: this.area
					},
					header: {
						'Content-Type' : 'application/x-www-form-urlencoded',
						'token': this.history.token,
						'openid': this.history.openid
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
							// uni.navigateTo({
							// 	url: '../../my/my'
							// })
							uni.navigateBack()
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.test{
		text-align: center;
		padding: 10px 0;
	}
	button{
		margin: 20upx;
		font-size: 28upx;
	}

	#image{
		display: inline-block;
		width: 208rpx;
		height: 208rpx;
	}
	#address_box{
		display: flex;
		align-items: center;
		margin-bottom: 47rpx;
		margin-top: 47rpx;
	}
	#box_name{
		width: 119rpx;
		height: 25rpx;
		font-size: 25rpx;
		font-weight: 400;
		color: #333333;
	}
	#box_value{
		display: inline-block;
	}

	.cell{
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 110rpx;
		padding: 0 40rpx;

		&:first-child{
			margin-bottom: 10rpx;
		}

		&:after{
			left: 40rpx;
			right: 40rpx;
			border-color: #d8d8d8;
		}

		.tit{
			font-size: 30rpx;
			color: #333;
		}

		.avatar-wrap{
			width: 120rpx;
			height: 120rpx;
			position: relative;
			border-radius: 100rpx;
			overflow: hidden;

			.avatar{
				width: 100%;
				height: 100%;
				border-radius: 100rpx;
			}
			.progress{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 100rpx;
				height: 100rpx;
				box-shadow: rgba(0,0,0,.6) 0px 0px 0px 2005px;
				border-radius: 100rpx;
				transition: .5s;
				opacity: 0;

				&.no-transtion{
					transition: 0s;
				}
				&.show{
					opacity: 1;
				}
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.button{
		background-color: #3f77f6;
	}
</style>
