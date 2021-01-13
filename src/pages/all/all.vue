<template>
	<view id='all'>
		<navigator id="jump" url="/pages/index/search/search">
			<input id="input" placeholder="       搜索商品名称"></input>
			<image id="search" src="../../static/index/search.png"></image>
		</navigator>
		<view id='commodity'>
			<view id='all_box'>
				<navigator id='all_skip' url="own/own">
					<image id='skip_image' src="../../static/all/possess.jpg"></image>
					<view id='skip_text'>所有商品</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url='Leisure/Leisure'>
					<image id='skip_image' src="../../static/all/Leisure.jpg"></image>
					<view id='skip_text'>休闲零食</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="nonStaple/nonStaple">
					<image id='skip_image' src="../../static/all/non-staple.jpg"></image>
					<view id='skip_text'>粮油副食</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="drinks/drinks">
					<image id='skip_image' src="../../static/all/drinks.jpg"></image>
					<view id='skip_text'>酒水乳饮</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="nurse/nurse">
					<image id='skip_image' src="../../static/all/nurse.jpg"></image>
					<view id='skip_text'>个人护理</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="protection/protection">
					<image id='skip_image' src="../../static/all/protection.jpg"></image>
					<view id='skip_text'>美容护肤</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="numerical/numerical">
					<image id='skip_image' src="../../static/all/numerical.jpg"></image>
					<view id='skip_text'>家电数码</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="kitchen/kitchen">
					<image id='skip_image' src="../../static/all/kitchen.jpg"></image>
					<view id='skip_text'>家居厨具</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="fruits/fruits">
					<image id='skip_image' src="../../static/all/fruits.jpg"></image>
					<view id='skip_text'>生鲜水果</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="convenience/convenience">
					<image id='skip_image' src="../../static/all/convenience.jpg"></image>
					<view id='skip_text'>方便速食</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="medicine/medicine">
					<image id='skip_image' src="../../static/all/medicine.jpg"></image>
					<view id='skip_text'>医药保健</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="toy/toy">
					<image id='skip_image' src="../../static/all/toy.jpg"></image>
					<view id='skip_text'>母婴玩具</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="paper/paper">
					<image id='skip_image' src="../../static/all/paper.jpg"></image>
					<view id='skip_text'>纸品家具</view>
				</navigator>
			</view>
			<view id='all_box'>
				<navigator id='all_skip' url="department/department">
					<image id='skip_image' src="../../static/all/department.jpg"></image>
					<view id='skip_text'>日用百货</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	#all{
		position: relative;
	}
	#jump{
		width: 750rpx;
		height: 100rpx;
		font-size: 10rpx;
		border-radius: 1000rpx;
	}
	#input{
		position: absolute;
		height: 50rpx;
		width: 750rpx;
		top: 0;
		font-size: 25rpx;
		border-radius: 1000rpx;
		background-color: white;
	}
	#search{
		margin-top: 5rpx;
		margin-left: 10rpx;
		width: 40rpx;
		height: 40rpx;
	}
	#commodity{
		display: flex;
		flex-wrap: wrap;
	}
	#box{
		margin-left: 50rpx;
	}
	#box_img{
		width: 300rpx;
		height: 300rpx;
	}
	#box_title{
		font-size: 20rpx;
		width: 300rpx;
	}
	#original_price{
		font-size: 16rpx;
	}
	#money{
		display: flex;
		justify-content: space-between;
	}
	#preaent_price{
		font-size: 20rpx;
		color: red;
	}
	#all_box{
		margin-left: 90rpx;
	}
	#all_skip{
		height: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 50rpx;
	}
	#skip_image{
		width: 130rpx;
		height: 130rpx;
		border-radius: 70px;
	}
	#skip_text{
		
	}
</style>
