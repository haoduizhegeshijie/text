<template>
	<view>
		<image id='image' src="../../../static/my/applyFor/top.png" mode=""></image>
		<view>
			<view id="box">
				<veiw id='box_name'>商户名称</veiw>
				<view id='box_right'>
					<view id='box_right_hint'>*</view>
					<input id='box_right_input' type="text" value="" placeholder="请输入商户名称" />
				</view>
			</view>
			<view id="box">
				<view id='box_name'>主营项目</view>
				<view id='box_right'>
					<view id='box_right_hint'>*</view>
					<input id='box_right_input' type="text" value="" placeholder="例如鞋帽,化妆品等" />
				</view>
			</view>
			<view id="box">
				<view id='box_name'>简单介绍</view>
				<view id='box_right'>
					<view id='box_right_hint'>*</view>
					<input id='box_right_input' type="text" value="" placeholder="请简单介绍一下商户信息" />
				</view>
			</view>
		</view>
		<br />
		<view>
			<view id="box">
				<view id='box_name'>联系人</view>
				<view id='box_right'>
					<view id='box_right_hint'>*</view>
					<input id='box_right_input' type="text" value="" placeholder="请输入您的称呼" />
				</view>
			</view>
			<view id="box">
				<view id='box_name'>联系电话</view>
				<view id='box_right'>
					<view id='box_right_hint'>*</view>
					<input id='box_right_input' type="text" value="" placeholder="请输入您的联系方式" />
				</view>
			</view>
			<view id='little_title'>请正确的输入您的联系方式，我们会在您申请之后的24小时之内通过这个联系方式跟您对照，请不要关闭手机</view>
		</view>
		<br />
		<view>
			<view id="box">
				<view id='box_name'>账号</view>
				<view id='box_right'>
					<view id='box_right_hint'>*</view>
					<input id='box_right_input' type="text" value="" placeholder="请创建您的账号" />
				</view>
			</view>
			<view id="box">
				<view id='box_name'>密码</view>
				<view id='box_right'>
					<view id='box_right_hint'>*</view>
					<input id='box_right_input' type="text" value="" placeholder="请创建您的密码" />
				</view>
			</view>
			<view id='little_title'>用于登录多商户后台，请认真填写，并记好自己的账户密码，方便登录</view>
		</view>
		
		<view class="inv-h-w">
			<!-- 小微 -->
			<view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">小微</view>
			<!-- 个体 -->
			<view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="geti">个体</view>
			<!-- 企业 -->
			<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="qiye">企业</view>
		</view>
		
		<view class="" v-show="Inv == 0">
			<view>
				<view>经营场所门头照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>经营场所内景照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>经营场所收银台照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>手持身份证正面半身照</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>手持银行卡正面半身照</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>银行卡正面照片(带卡号的那一面)</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>身份证正面照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>身份证反面照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>联系电话</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>地址</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>详细地址</view>
				<view>
					<view>*</view>
				</view>
			</view>
		</view>
		<view class="" v-show="Inv == 1">
			<view>
				<view>经营场所门头照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>经营场所内景照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>营业执照照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>银行卡正面照片(带卡号的那一面)</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>身份证正面照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>身份证反面照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>联系电话</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>地址</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>详细地址</view>
				<view>
					<view>*</view>
				</view>
			</view>
		</view>
		<view class="" v-show="Inv == 2">
			<view>
				<view>经营场所门头照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>经营场所内景照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>营业执照照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>银行卡正面照片(带卡号的那一面)</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>身份证正面照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>身份证反面照片</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>对公账户</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>联系电话</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>地址</view>
				<view>
					<view>*</view>
				</view>
			</view>
			<view>
				<view>详细地址</view>
				<view>
					<view>*</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {	
				Inv: 0,
			}
		},
		methods: {
			geti() {
				/* 滑动门默认值 */
				this.Inv = 1;
			},
			qiye() {
				/* 滑动门默认值 */
				this.Inv = 2;
			}
		}
	}
</script>

<style>
	#image{
		width: 750rpx;
	}
	#box{
		display: flex;
	}
	#box_name{
		width: 130rpx;
	}
	#box_right{
		display: flex;
	}
	#little_title{
		font-size: 10px;
		color: #ff4066;
	}
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
