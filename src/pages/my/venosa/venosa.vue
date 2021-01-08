<template>
	<view>
		<table>
			<tr>
				<td id='awards_name'>奖项</td>
				<td id='awards_name'>收益</td>
				<td id='awards_name'>时间</td>
			</tr>
			<tr>
				<td id='awards_num'>消费奖</td>
				<td id='awards_num'>+100</td>
				<td id='awards_num'>08-11 10:00</td>
			</tr>
		</table>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				windowWidth: 0
			}
		},
		mounted () {
			uni.getSystemInfo({
				success: (res) => {
					this.windowWidth = res.windowWidth;
				}
			});
		},
		methods: {
			goback() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	#awards_name{
		width: 250rpx;
		text-align: center;
	}
	#awards_num{
		text-align: center;
	}
</style>
