<template>
	<view>
		<view>
			<view>
				<view>头像</view>
				<view>
					<image v-if="avarShow" :src="avar" mode=""></image>
					<image v-else id='image' src="../../../static/123.jpg" mode=""></image>
				</view>
			</view>
			<!-- <u-upload :action="action" :file-list="fileList" ></u-upload> -->
			<view id='address_box'>
				<view id='box_name'>用户名</view>
				<view id='address_box'>
					<view>*</view>
					<view>xqq12345</view>
				</view>
			</view>
			<hr />
			<view id='address_box'>
				<view id='box_name'>姓名</view>
				<view id='address_box'>
					<view>*</view>
					<view>方世煜</view>
				</view>
			</view>
			<hr />
			<view id='address_box'>
				<view id='box_name'>微信号</view>
				<input id='box_value' type="text" placeholder="请输入你的微信号">
			</view>
			<hr />
			<view id='address_box'>
				<view id='box_name'>出生日期</view>
				<view></view>
			</view>
			<hr />
			<view id='address_box'>
				<view id='box_name'>所在城市</view>
				<view>
					<picker @change="selCity" @columnchange="selMonitor" :value="addressIndex" :range="address" mode="multiSelector">
					  <view class="setCon">
					    <input type="text" :value="addressNode.province + addressNode.city" disabled="" />
					    <icon class="iconfont iconkefu"></icon>
					  </view>
					</picker>
				</view>
			</view>
			<hr />
			<view id='address_box'>
				<view id='box_name'>登录密码</view>
				<input type="text" value="" placeholder="修改登录密码" />
			</view>
			<hr />
			<view id='address_box'>
				<view id='box_name'>支付密码</view>
				<input type="text" value="" placeholder="修改登录密码" />
			</view>
			<button type="default">确认修改</button>
		</view>
	</view>
</template>

<script>
	// import tuiDatetime from "@/components/thorui/tui-datetime/tui-datetime"
	import address from '../../../static/json/address.json';
	export default {
		data() {
			return {
				// 演示地址，请勿直接使用
				action: 'http://www.example.com/upload',
				fileList: [
					{
						url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
					}
				],
				address: [],
				provinceList: [],
				cityAllList: [],
				addressIndex: [0, 0],
				addressNode: {
					province: "请选择城市",
					city: ""
				},
				imgToken: '',	// 本地图片上传到七牛云会返回一个图片路径，需要传图片 token
				avar: '',	// 修改后的图片路径
				avarShow: false,	// true 时显示修改后的图片
				userId: ''	// 用户 id，看接口需求
			}
		},
		onLoad() {
		    const that = this
		    // 将省市区的数据转换为picker可用的多维数组
		    that.getAddressData()
		},
		// components:{
		// 		tuiDatetime
		// 	}
		methods: {
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
			// 修改头像
			updateAvar(way) {
				const {imgToken,userId} = this
				uni.chooseImage({
					count: 1,	// 头像只上传1张
					sourceType: [way],	// way是点击时传入的打开方式相机或相册
					success: async (chooseImageRes) => {
						//获取头像token的接口
						const data = await this.$api.api.user.getImgToken();
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'https://upload-z2.qiniup.com/',	// 上传地址（七牛云）
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								token: data.data.body, //头像token，参考返回数据
								key: chooseImageRes.tempFiles[0].name // 图片名，移动端可能不存在name，可修改为 key: new Date().getTime()+".png" 随机
							},
							success: (uploadFileRes) => {
								// console.log(uploadFileRes);是一个字符串
								const data = JSON.parse(uploadFileRes.data)
								// 上传头像接口（参数根据自己的来）
								this.$api.api.user.updateHead({
									"creator": this.$store.state.loginName,	//上传者
									"headPath": "http://qapxsiqga.bkt.clouddn.com/"+data.key,	// 图片最终的路径，http://qapxsiqga.bkt.clouddn.com/是七牛云空间地址
									"userId": userId
								}).then(res=>{
									console.log(res)
									this.avar = "http://qapxsiqga.bkt.clouddn.com/"+data.key	// 存入修改后的头像
									this.avarShow = true	// 显示修改后的头像
								})
							}
						});
					}
				})
			}
		}
	}
</script>

<style>
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
</style>
