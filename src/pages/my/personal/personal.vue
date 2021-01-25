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
				<input class="input" v-model="userInfo.nickname" type="text" placeholder="请输入用户名" placeholder-class="placeholder">
			</view>
			<view class="cell b-b">
				<text class="tit fill">姓名</text>
				<input class="input" v-model="userInfo.nickname" type="text" maxlength="8" placeholder="请输入姓名" placeholder-class="placeholder">
			</view>
			<view class="cell b-b">
				<view class="tit fill">微信号</view>
				<input class="input" v-model="userInfo.nickname" type="text" placeholder="请输入你的微信号" placeholder-class="placeholder">
			</view>
			<view class="cell b-b">
				<view class="test">出生日期</view>
				<view>{{datetime}}</view>
				<button type="primary" @click="onShowDatePicker('datetime')">选择时间</button>
				<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
			</view>
			<view class="cell b-b">
				<view class="text-area">
					<view class="test">现住地址</view>
					<text class="title">{{title}}</text>
				</view>
				<button type="primary" @click="btnClick">选择地址</button>
				<selectAddress ref='selectAddress' @selectAddress="successSelectAddress"></selectAddress>
			</view>
			<button id="button" type="primary">确认修改</button>
		</view>
	</view>
</template>

<script>
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	import selectAddress from '@/components/yixuan-selectAddress/yixuan-selectAddress.vue'
	import address from '../../../static/json/address.json';
	export default {
		data() {
			return {
				userInfo: '',
				tempAvatar: '',
				uploadProgress: 100,
				address: [],
				provinceList: [],
				cityAllList: [],
				addressIndex: [0, 0],
				datetime: '',
				type: 'rangetime',
				value: '',
				currDate: [],
				title: ''
			}
		},
		onLoad() {
			const that = this
			// 将省市区的数据转换为picker可用的多维数组
			that.getAddressData()
		},
		components: {
			MxDatePicker,
			selectAddress
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
			onDateChange: function (e) {
				const val = e.detail.value
				this.time = this.currDate[val];
				// 时间选择完成了，这之后就可以做一些其他的事情啦
			},
			// 获取地址信息
			selCity(e) {
				const that = this;
				let val = e.target.value
				that.addressNode = {
					province: that.address[0][val[0]],
					city: that.address[1][val[1]]
				}
			},
			// 监听省市区滚动
			selMonitor(e) {
				const that = this
				let column = e.detail.column
				if (column == 0) {
					let index = e.detail.value
					that.address[1] = that.cityAllList[index]
				}
			},
			// 将省市区的数据转换为picker可用的多维数组
			getAddressData() {
				const that = this;
				// 所有城市列表,二维数组
				let cityAllList = [];
				// 省列表
				let provinceList = [];
				// address为省市区的json数据
				for (let key in address) {
					let newDataList = [];
					if (address[key].children) {
						for (let key2 in address[key].children) {
							newDataList.push(address[key].children[key2].name);
						}
					}
					provinceList.push(address[key].name);
					cityAllList.push(newDataList);
				}
				that.provinceList = provinceList;
				that.cityAllList = cityAllList;
				that.address = [provinceList, cityAllList[0]];
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
					//选择的值
					console.log('value => '+ e.value);
					//原始的Date对象
					console.log('date => ' + e.date);
				}
			},
			btnClick() {
				this.$refs.selectAddress.show()
			},
			successSelectAddress(address){
				console.log(address)
				this.title = address
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
