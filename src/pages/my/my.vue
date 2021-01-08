<template>
	<view id='my'>
		<image id='header_img' src='../../static/my/top.png'></image>
		<view id='header'>
			<view id='header_me'>
				<view id='header_me_personal'>
					<navigator id='balance' url='/pages/my/personal/personal'>
						<image id='personal_img' src='../../static/my/default.png'></image>
					</navigator>
					<view id='personal'>
						<view id='personal_box'>
							<view id='username'>zhang1964</view>
							<view id='num'>邀请ID:123456</view>
						</view>
						<view id='integral'>
							<image id='integral_img' src="../../static/my/rectangle.png" mode=""></image>
							<view id='integral_name'>LV.03</view>
							<image id='integral_img' src="../../static/my/fans.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view id='header_money'>
				<navigator id='money' url='balance/balance'>
					<view id='header_money_box'>
						<view id='money_num'>￥982.14</view>
						<view id='money_name'>余额</view>
					</view>
				</navigator>
				<navigator url='frozen/frozen'>
					<view id='header_money_box'>
						<view id='money_num'>￥0</view>
						<view id='money_name'>冻结</view>
					</view>
				</navigator>
				<navigator url='venosa/venosa'>
					<view id='header_money_box'>
						<view id='money_num'>196</view>
						<view id='money_name'>金豆余额</view>
					</view>
				</navigator>
			</view>
		</view>
		<view id='add'>
			<view id='add_box'>
				<view id='add_box_title'>我的订单</view>
				<view id='add_box_refund'>
					<navigator id='add_right' url='/pages/my/transport/transport'>
						<view id='add_right_text'>退款售后</view>
						<image id='add_right_img' src='../../static/my/return.png'></image>
					</navigator>
				</view>
			</view>
			<view id='indent'>
				<view>
					<navigator id='indent_box' class='indext' url='/pages/my/transport/transport'>
						<image id='icon' src='../../static/my/all.png'></image>
						<view id='indent_box_text'>全部订单</view>
					</navigator>
				</view>
				<view>
					<navigator id='indent_box' url='/pages/my/transport/transport'>
						<image id='icon' src='../../static/my/payment.png'></image>
						<view id='indent_box_text'>待付款</view>
					</navigator>
				</view>
				<view>
					<navigator id='indent_box' url='/pages/my/transport/transport'>
						<image id='icon' src='../../static/my/shipments.png'></image>
						<view id='indent_box_text'>待付款</view>
					</navigator>
				</view>
				<view>
					<navigator id='indent_box' url='/pages/my/transport/transport'>
						<image id='icon' style='width: 55rpx;' src='../../static/my/delivery.png'></image>
						<view id='indent_box_text'>待收货</view>
					</navigator>
				</view>
				<view>
					<navigator id='indent_box' url='/pages/my/transport/transport'>
						<image id='icon' style='width: 45rpx;' src='../../static/my/evaluate.png'></image>
						<view id='indent_box_text'>待评价</view>
					</navigator>
				</view>
			</view>
		</view>	
		<view id='content'>
			<view style='margin-bottom: 50rpx; margin-top: 50rpx;'>其他服务</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/personal/personal'>
					<image id='content_img' src='../../static/my/data.png'></image>
					<view id='content_text'>我的资料</view>
				</navigator>
			</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/award/award'>
					<image id='content_img' src='../../static/my/datail.png'></image>
					<view id='content_text'>奖励明细</view>
				</navigator>
			</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/promotion/promotion'>
					<image id='content_img' src='../../static/my/promotion.png'></image>
					<view id='content_text'>推广二维码</view>
				</navigator>
			</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/applyFor/applyFor'>
					<image id='content_img' src='../../static/my/applyfor.png'></image>
					<view id='content_text'>申请商家</view>
				</navigator>
			</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/administration/administration'>
					<image id='content_img' src='../../static/my/administration.png'></image>
					<view id='content_text'>商家管理</view>
				</navigator>
			</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/invite/invite'>
					<image id='content_img' src='../../static/my/invite.png'></image>
					<view id='content_text'>我的邀请</view>
				</navigator>
			</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/address/address'>
					<image id='content_img' src='../../static/my/address.png'></image>
					<view id='content_text'>地址管理</view>
				</navigator>
			</view>
			<view id='content_box'>
				<navigator id='content_chunk' url='/pages/my/invite/invite'>
					<image id='content_img' src='../../static/my/collect.png'></image>
					<view id='content_text'>我的收藏</view>
				</navigator>
			</view>
		</view>
		<view id='logout'>
			<image id='logout_img' src="../../static/my/quit.png" mode="">&nbsp; </image>
			<view id='logout_text'>&nbsp;退出登录</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	#my{
		position: relative;
	}
	#header_img{
		width: 750rpx;
		height: 350rpx;
	}
	#header{
		height: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 710rpx;
		margin-left: 20rpx;
		background-color: white;
		position: absolute;
		top: 100rpx;
		box-shadow: 0 10px 5px #888888;
	}
	#header_me{
		height: 200rpx;
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#header_me_personal{
		display: flex;
		align-items: center;
	}
	#balance{
		display: flex;
	}
	#personal_img{
		display: inline-block;
		width: 178rpx;
		height: 178rpx;
		margin-right: 20rpx;
	}
	#personal{
		display: flex;
	}
	#personal_box{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	#username{
		font-size: 49rpx;
	}
	#num{
		font-size: 37rpx;
	}
	#num_name{
		font-size: 37rpx;
		white-space:nowrap;
	}
	#integral{
		margin-top: 26rpx;
		position: relative;
		display: flex;
	}
	#integral_img{
		width: 90rpx;
		height: 34rpx;
	}
	#integral_name{
		position: absolute;
		top: 5rPX;
		left: 10rpx;
		font-size: 26rpx;
		line-height: 24rpx;
	}
	#header_money{
		flex: 1;
		display: flex;
		justify-content: space-around;
	}
	#money{
	}
	#header_money_box:last-child{
		border: 0;
	}
	#header_money_box{
		width: 240rpx;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-right: 1px solid black;
	}
	#money_num{
		height: 41rpx;
		font-size: 40rpx;
		font-weight: bold;
		color: #FF4066;
		line-height: 51rpx;
	}
	#money_name{
		margin-top: 10rpx;
		height: 33rpx;
		font-size: 33rpx;
		font-weight: normal;
		color: #999999;
		line-height: 35rpx;
	}
	#name{
		width: 30px;
		padding-left: 10rpx;
		font-size: 12rpx;
		border: 1px solid #FFFFFF;
		color: #FFFFFF;
		border-radius: 50px;
	}
	#add{
		margin-top: 200rpx;
		margin-right: 20rpx;
		margin-left: 20rpx;
	}
	#add_box{
		display: flex;
		justify-content: space-between;
	}
	#add_box_title{
		font-size: 30rpx;
		font-weight: bold;
	}
	#add_right{
		width: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#add_right_text{
		flex: 1;
		font-size: 30rpx;
	}
	#add_right_img{
		width: 10rpx;
		height: 30rpx;
	}
	#indent{
		display: flex;
		justify-content: space-between;
		list-style: none;
		padding: 0;
	}
	.indext{
		padding-right: 50rpx;
		border-right: 1px solid #ECECEC;
	}
	#indent_box{
		height: 200rpx;		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#icon{
		width: 40rpx;
		height: 40rpx;
	}
	#indent_box_text{
		font-size: 10rpx;
	}
	#content{
		width: 750rpx;
		margin-right: 30rpx;
		margin-left: 50rpx;
	}
	#content_box{
		display: inline-block;
		width: 170rpx;
		height: 117rpx;
	}
	#content_chunk{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#content_img{
		width: 50rpx;
		height: 50rpx;
	}
	#content_text{
		margin-top: 10rpx;
		font-size: 20rpx;	
	}
	#logout{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 72rpx;
		margin-bottom: 72rpx;
	}
	#logout_img{
		width: 40rpx;
		height: 40rpx;
	}
	#logout_text{
		width: 158rpx;
		height: 40rpx;
		font-size: 38rpx;
		color: #333333;
		line-height: 40rpx;
	}
</style>
