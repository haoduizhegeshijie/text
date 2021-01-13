<template>
	<view id='shoppingCat'>
		<view id='head'>
			<view id='head_box'>
				<text id='cowry'>共1件宝贝</text>
				<text id='address'>收货地址：郭家庙村郭家庙村郭家庙村</text>
			</view>
		</view>
		<view style='position: relative;'>
			<u-checkbox-group id='max-box' @change="checkboxGroupChange">
				<u-checkbox id='checkbox' shape="circle" @change="checkboxChange" v-model="item.checked" v-for="(item, index) in list" :key="index"  :name="item.name" >
					<view id='shoppingCat_title'>
						<image id='shoppingCat_title_logo' src='../../static/shoppingCat/selfSupport.png'></image>
						<text id='shoppingCat_title_title'>自营商家</text>
					</view>
				</u-checkbox>
				<u-checkbox id='checkbox' shape="circle" @change="checkboxChange" v-model="item.checked" v-for="(item, index) in lists" :key="index"  :name="item.name" >
					<view id='commodity'>
						<view id='commodity_box'>
							<image id='commodity_img' src='../../static/123.jpg'></image>
						</view>
						<view id='commodity_text'>
							<view id='commodity_text_title'>医适宝睡眠喷雾</view>
							<view>钻石闪耀</view>
							<view id='commodity_text_num'>
								<view style="color: #e94800;">￥<b id='commodity_text_num_price'>78.00</b></view>
								<u-number-box :input-width="70" :input-height="40" v-model="value" @change="valChange"></u-number-box>
							</view>
						</view>
					</view>
				</u-checkbox>
			</u-checkbox-group>
		</view>
		<!-- <view id='title'>
			<image id='love' src='../../static/shoppingCat/love.png'></image>
			猜你喜欢
		</view>
		<view id='useless'>
			<navigator url='../index/detail/detail'>
				<view id='product'>
					<image id='product_img' src='../../static/789.jpg'></image>
					<view id='view'></view>
					<view id='product_box'>
						<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
						<view id='money'>
							<view id='product_box_presentPrice'>￥<b>3980</b></view>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url='../index/detail/detail'>
				<view id='product'>
					<image id='product_img' src='../../static/789.jpg'></image>
					<view id='view'></view>
					<view id='product_box'>
						<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
						<view id='money'>
							<view id='product_box_presentPrice'>￥<b>3980</b></view>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url='../index/detail/detail'>
				<view id='product'>
					<image id='product_img' src='../../static/789.jpg'></image>
					<view id='view'></view>
					<view id='product_box'>
						<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
						<view id='money'>
							<view id='product_box_presentPrice'>￥<b>3980</b></view>
						</view>
					</view>
				</view>
			</navigator>
			<navigator url='../index/detail/detail'>
				<view id='product'>
					<image id='product_img' src='../../static/789.jpg'></image>
					<view id='view'></view>
					<view id='product_box'>
						<view id='product_box_text'>智能省电王傲哩给小金盒大礼包 购买发10台</view>
						<view id='money'>
							<view id='product_box_presentPrice'>￥<b>3980</b></view>
						</view>
					</view>
				</view>
			</navigator>
		</view> -->
		<view id='box' @click='change'>
			<view v-if="num === 'a'">
				<view id='btn'>管理</view>
				<view id='bottom'>
					<view style='margin: 0 auto;' id='all' @click="checkedAll">全选</view>
					<view id='bottom_right'>
						<view id='bottom_right_box'>
							<view id='bottom_right_box_name'>合计：</view>
							<view id='bottom_right_box_money'>￥0</view>
						</view>
						<view id='button'>结算</view>
					</view>
				</view>
			</view>
			<view v-else="num === 'b'">
				<view id='btn'>完成</view>
				<view id='bottom'>
					<view style='margin: 0;' id='all' @click="checkedAll">全选</view>
					<view id='bottom_right'>
						<view id='bottom_right_box'>
							<view id='bottom_right_box_name'>清理</view>
						</view>
						<view id='button'>删除</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
				num: 'a',
				value: 0,
				list: [
				{
					name: 'apple',
					checked: false,
					disabled: false
				}],
				lists: [
				{
					name: 'apple',
					checked: false,
					disabled: false
				}]
			};
		},
		onShow() {
			// uni.chooseLocation({
			// 	success: function (res) {
			// 		console.log('位置名称：' + res.name);
			// 		console.log('详细地址：' + res.address);
			// 		console.log('纬度：' + res.latitude);
			// 		console.log('经度：' + res.longitude);
			// 	}
			// });
			// try{
			// 	let userId = uni.getStorageSync('userid')
			// 	let token = uni.getStorageSync('token')
			// 	if(token && userId) {
			// 		request({
			// 			url: '/cart',
			// 			data: {
			// 				token,
			// 				userId
			// 			}
			// 		}).then(res => {
			// 			if (res.data.code === '10019') {
			// 				toast({title: '请先登录'})
			// 				uni.navigateTo({
			// 					url: 'pages/login/login'
			// 				})
			// 			}else if(res.data.code === '10012'){
			// 				toast({title: '请先选购商品'})
			// 				this.flag = true
			// 			}else {
			// 				toast({title: '购物车列表获取成功'})
			// 				this.flag = false

			// 				res.data.data.map()
			// 			}
			// 		})
			// 	}
			// }

		},
		methods: {
			change() {
				let num = 'a'
				let that = this
				if(that.num == 'a'){
					return that.num = 'b'

				}else{
					return that.num = 'a'
				}
			}
		}
	};
</script>

<style>
	table {
		border-collapse: collapse;
	}
	td {
		border: 1px solid #000000;
		width: 100px;
		height: 30px;
		text-align: center;
	}
	#shoppingCat{
		background-color: #f2f2f2;
	}
	#head{
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	#head_box{
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#cowry{
		margin-right: 10rpx;
	}
	#address{
		display:inline-block;
		width:400rpx;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	#btn{
		position: absolute;
		top: 0rpx;
		left: 680rpx;
		font-size: 30rpx;
	}
	#bottom{
		background-color: white;
		width: 750rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 100rpx;
	}
	#bottom_right{
		display: flex;
		justify-content: center;
	}
	#bottom_right_box{
		height: 56rpx;
		padding-right: 24rpx;
		display: flex;
		justify-content: center; 
		align-items: center;
	}
	#bottom_right_box_name{
		width: 100rpx;
		font-size: 20rpx;
	}
	#collection{
		width: 50rpx;
		height: 50rpx;
	}
	#shoppingCat_box{
		bottom: 20rpx;
		background-color: #FFFAFA;
		border-radius: 30rpx;
	}
	#max-box{
		margin-left:10rpx;
		margin-right: 10rpx;
		height: 200rpx;
	}
	#checkbox{
		background-color: #ffffff;
	}
	#shoppingCat_title{
		width: 700rpx;
		height: 60rpx;
	}
	#shoppingCat_title_logo{
		display: inline-block;
		top: 5rpx;
		width: 35rpx;
		height: 35rpx;
		left: 20rpx;
		right: 20rpx;
	}
	#shoppingCat_title_title{
		font-size: 28rpx;
		font-weight: bold;
		margin-left: 30rpx;
		padding-top: 20rpx;
	}
	#commodity{
		padding-right: 47rpx;
		width: 700rpx;
		height: 240rpx;
		display: flex;
	}
	#commodity_box{
		width: 220rpx;
		height: 220rpx;
		margin-bottom: 10rpx;
	}
	#commodity_img{
		width: 200rpx;
		height: 200rpx;
	}
	#commodity_text{
		height: 220rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	#commodity_text_title{
		line-height: 30rpx;
		font-size: 30rpx;
	}
	#commodity_text_num{
		display: flex;
		justify-content: space-between;
	}
	#commodity_text_num_price{
		color: #e94800;
		font-size: 20rpx;
	}
	#commodity_text_num_button{
		display: flex;
		justify-content: space-between;
	}
	#num{
		width: 30rpx;
		height: 40rpx;
		border: 1px solid black;
	}
	#title{
		margin-left: 40%;
		margin-top: 120rpx;
	}
	#love{
		width: 12px;
		height: 12px;
	}
	#useless{
		display: flex;
		flex-wrap: wrap;
		background-color: #f2f2f2;
	}
	#product{
		position: relative;
		margin-top: 25rpx;
		margin-left: 17rpx;
		margin-bottom: 2rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
		width: 350rpx;
		height: 450rpx;
		border-radius: 20rpx;
	}
	#product_img{
		width: 350rpx;
		height: 350rpx;
		border-radius: 20rpx;
	}
	#view{
		position: absolute;
		top: 340rpx;
		width: 350rpx;
		height: 50rpx;
		background-color: white;
	}
	#product_box{
		width: 300rpx;
	}
	#product_box_text{
		position: absolute;
		top: 340rpx;
		font-size: 20rpx;
		margin-left: 6rpx;
	}
	#product_box_originalPrice{
		position: absolute;
		top: 370rpx;
		font-size: 10px;
	}
	#product_box_presentPrice{
		position: absolute;
		bottom: 0;
		left: 10rpx;
		font-size: 28rpx;
	}
	#all{
		padding-top: 13rpx;
		padding-left: 50rpx;
		width: 750rpx;
		height: 53rpx;
	}
	#button{
		padding-top: 10rpx; 
		background-color:#FB622A;
		width: 131rpx;
		height: 50rpx;
		font-size: 20rpx;
		border-radius: 20px;
		padding-left: 40rpx;
	}
</style>
