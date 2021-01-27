<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					收件人
				</view>
				<view class="input">
					<input placeholder="请输入收件人姓名" type="text" v-model="realname" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					电话号码
				</view>
				<view class="input">
					<input placeholder="请输入收件人电话号码" type="text" v-model="mobile" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					所在地区
				</view>
				<pickerAddress class="input" @change="change">{{txt}}</pickerAddress>
			</view>
			<view class="row">
				<view class="nominal">
					详细地址
				</view>
				<view class="input">
					<textarea v-model="address" auto-height="true" placeholder="输入详细地址"></textarea>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					设置默认地址
				</view>
				<view class="input switch">
					<switch color="#f06c7a" :checked="isDefault == 0 ? false : true" @change="isDefaultChange()" />
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="btn">
				保存地址
			</view>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue'
	export default {
		onShow() {
			var that = this
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
			uni.getStorage({
				key: 'history',
				success(res){
					that.history = res.data
				},
				fail: function(res) {
					console.log(res+'aaaaa')
				}
			});
		},
		components: {
			mpvueCityPicker,
			pickerAddress
		},
		data() {
			return {
				editType:'edit',
				id:'',
				realname:'',
				mobile:'',
				txt: '选择地址',
				address:'',
				isDefault: 0,
				cityPickerValue: [0, 0, 1],
				themeColor: '#007AFF',
				province: '',
				city: '',
				area: ''
			};
		},
		methods: {
			change(data) {
				this.txt = data.data.join('')
				this.province = data.data[0]
				this.city = data.data[0]
				this.area = data.data[0]
			},
			isDefaultChange(){
				this.isDefault == !this.isDefault
			},
			del(){
				uni.showModal({
					title: '删除提示',
					content: '你将删除这个收货地址',
					success: (res)=>{
						if (res.confirm) {
							uni.setStorage({
								key:'delAddress',
								data:{id:this.id},
								success() {
									uni.navigateBack();
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			save(){
				if(!this.realname){
					uni.showToast({title:'请输入收件人姓名',icon:'none'});
					return ;
				}
				if(!this.mobile){
					uni.showToast({title:'请输入收件人电话号码',icon:'none'});
					return ;
				}
				if(!this.txt){
					uni.showToast({title:'请输入收件人地址',icon:'none'});
					return ;
				}
				if(!this.address){
					uni.showToast({title:'请选择收件详细地址',icon:'none'});
					return ;
				}
				uni.showLoading({
					title:'正在提交'
				})
				uni.request({
					url: '/api/member_address_edit',
					data: {
						token : this.history.token,
						openid: this.history.openid,
						realname: this.realname,
						mobile: this.mobile,
						province: this.province,
						city: this.city,
						area: this.area,
						address: this.address,
						isdefault: 0
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
							uni.navigateBack()
						}
					}
				})
			}
		},
		onLoad(e) {},
	};
</script>
<style lang="scss">

.save{
		view{
			display: flex;
		}
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.btn{
			box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.4);
			width: 70%;
			height: 80upx;
			border-radius: 80upx;
			background-color: #f06c7a;
			color: #fff;
			justify-content: center;
			align-items: center;
			.icon{
				height: 80upx;
				color: #fff;
				font-size: 30upx;
				justify-content: center;
				align-items: center;
			}
			font-size: 30upx;
		}
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		view{
			display: flex;
		}
		.row{
			width: 94%;

			margin: 0 3%;
			border-top: solid 1upx #eee;
			.nominal{
				width: 30%;
				height: 120upx;
				font-weight: 200;
				font-size: 30upx;
				align-items: center;
			}
			.input{
				width: 70%;
				padding: 20upx 0;
				align-items: center;
				font-size: 30upx;
				&.switch{
					justify-content: flex-end;
				}
				.textarea{
					margin: 20upx 0;
					min-height: 120upx;
				}
			}
			.del{
				width: 100%;
				height: 100upx;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				color: #fff;
				background-color: #3f77f6;
				border-bottom: solid 1upx #eee;
			}
		}
	}

</style>
