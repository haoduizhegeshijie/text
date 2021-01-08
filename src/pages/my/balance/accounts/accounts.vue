<template>
	<view id='accounts'>
		<view id='now'>
			<view id='now_name'>当前余额：</view>
			<view id='now_num'>0.0000</view>
		</view>
		<br /><br /><br />
		<view id='true'>
			<view id='figure'>
				<view id='figure_name'>转账金额：</view>
				<input id='figure_input' type="text" placeholder="请输入金额">
			</view>
			<br />
			<view id='figure'>
				<view id='figure_name'>对方账户：</view>
				<input id='figure_input' type="text" placeholder="请输入用户名">
			</view>
			<br />
			<view id='figure'>
				<view id='figure_name' class='color'>对方ID：</view>
					<view id='figure_name' class='color'>4561</view>
					<view id='auto_title'  class='color'>请确认对方id是否正确</view>
			</view>
			<br /><br />
			<button type="default">提交</button>
		</view>
	</view>
</template>

<script>
</script>

<style>
	#accounts{
		display: flex;
		flex-direction: column;
	}
	#now{
		display: flex;
	}
	#figure{
		display: flex;
	}
	#figure_name{
		font-size: 35rpx;
	}
	#figure_input{
		display: inline-block;
	}
	#auto{
		display: flex;
	}
	#auto_title{
		font-size: 30rpx;
	}
	.color{
		color: #ff4066;
	}
</style>
