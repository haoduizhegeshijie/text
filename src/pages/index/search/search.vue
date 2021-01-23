<template>
	<view>
		<u-search placeholder="请输入您想搜索的宝贝" v-model="keyword"></u-search>
		<view id='history'>
			<view id='history_title'>
				<view id='history_title_name'>历史搜索</view>
				<image id='history_title_img' src='../../../static/image/index/search/delete.png'></image>
			</view>
			<view id='history_content'>
				<view id='history_content_name'>棉外套女冬  加厚</view>
				<view id='history_content_name'>棉外套</view>
				<view id='history_content_name'>马克杯</view>
				<view id='history_content_name'>篮球</view>
				<view id='history_content_name'>羊肉拉面</view>
				<view id='history_content_name'>抱枕靠垫</view>
				<view id='history_content_name'>火柴</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {}
		},
		methods:{
		}
	 }
</script>

<style>
	#history{
		margin-top: 30rpx;
		margin-left: 10rpx;
	}
	#history_title{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	#history_title_name{
		font-size: 40rpx;
		font-weight: bold;
	}
	#history_title_img{
		width: 50rpx;
		height: 50rpx;
	}
	#history_content{
		top: 100rpx;
		margin-left: 10rpx;
		font-size: 30rpx;
		display: flex;
		flex-wrap: wrap;
	}
	#history_content_name{
		border: 1px solid #F7F7F7;
		border-radius: 50rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
	}
</style>
