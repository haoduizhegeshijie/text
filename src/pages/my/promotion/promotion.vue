<template>
	<view>
		<view @click='handleShowCodeClick'>点击出现二维码</view>
		<view class="model-view" :style="showModal?'':'display:none;'">
			<view class="model-out-box">
				<view class="model-content">
					<canvas  canvas-id="myQrcode" style="margin: 20px;"></canvas>
				</view>
				<image src="/static/image/wrong-white.png" class="wrong-img" @click="handleHideCodeClick"/>
			</view>
		</view>
	</view>
</template>

<script>
	import qrCode from '../../../static/js/weapp-qrcode.js'; //二维码生成器
	export default {
		data () {
			return {
				code:'123456789',
				showModal: false
			}
		},
		methods:{
			initQrCode:function(){
				new qrCode('myQrcode', {
					text: this.code,
					width: 160,
					height: 160,
					colorDark: "#333333",
					colorLight: "#FFFFFF",
					correctLevel: qrCode.CorrectLevel.H
				})
			},
			handleShowCodeClick:function(){
				this.showModal = true
				this.$nextTick(function(){
					this.initQrCode()
				})
			},
			handleHideCodeClick:function(){
				this.showModal = false
			},
		}
	}
</script>

<style>
	.model-view{
		position: fixed;
		top: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		display:flex;
		justify-content: center;
		background-color:rgba(0,0,0,0.4);
	}
	.model-out-box{
		width: 200px;
		height: 270px;
		margin-top: 45%;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.model-content{
		width: 200px;
		height: 200px;
		border-radius: 10rpx;
		background: #fff;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.wrong-img{
		width: 30px;
		height: 30px;
	}
</style>
