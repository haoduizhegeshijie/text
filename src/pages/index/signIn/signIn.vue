<template>
	<view>
		<view id='top'>
			<view>
				<image @click='regMethods' src="../../../static/image/index/checkIn/signIn.png" mode=""></image>
			</view>
			<view>
				<view>
					<view>
						<view>250</view>
						<image src="../../../static/image/index/checkIn/venosa.png" mode=""></image>
					</view>
					<button type="default" size='mini'>获得金豆</button>
				</view>
				<view>
					<view>
						<view>10</view>
						<image src="../../../static/image/index/checkIn/checkIn.png" mode=""></image>
					</view>
					<button type="default" size='mini'>累计签到</button>
				</view>
			</view>
		</view>
		<view>
			<calendar :date="date" :lunar="true" :disable-before="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change" @to-click="toClick" />
		</view>
	</view>
</template>

<script>
	import calendar from "@/components/uni-calendar/uni-calendar";
	export default {
	    data() {
	        return{
	            reg: false,		//是否已经签到
				regArr: [],		//签到数组
	        }
	    },
	    methods:{
	        regMethods(){
	    	    var nowdate = this.getToday();   //获取到今天日期
	            //先取出缓存,分为三种情况:(没有缓存),(有缓存,今天没签到),(有缓存今天已签到)
	            if(Object.keys(this.getCache("videoregdata")).length === 0){ //判断今天是否签到了， 等于0那么 证明没有签到，或者之前的签到被清楚了
					this.regArr.push(nowdate)
					this.setCache("videoregdata",this.regArr)
					this.reg = true;
		        }else{
					if(this.getCache("videoregdata").indexOf(nowdate) == -1){  //判断今天是否已经签到，等于-1证明今天没有签到
						this.regArr = getCache("videoregdata")
						this.regArr.push(nowdate)
						this.setCache("videoregdata",this.regArr)
						this.reg = true;
					}else{												//证明今天签过到了
						this.reg = false;
					}
				}
			},
			getToday(){
				let date = new Date;
			    let Year = date.getFullYear();
				let month=date.getMonth()+1 < 10?"0"+String(date.getMonth()+1):date.getMonth()+1;
				let strDate = date.getDate() < 10?"0"+String(date.getDate()):date.getDate();
				let setDate =Year + String(month) + String(strDate);
				return setDate
			},
			// 设置缓存
			setCache (key, val, day) {
				day = day || 1
				// 获取当前缓存
				let cache = getItem(key)
				// 获取当前时间
				let date = getDate()
				// 今天日期
				let toDayDate = dateToNumber(`${date.year}-${date.month}-${date.day}`)
				// 缓存存在
				if (cache) {
					// 缓存过期了
					if (pastDue(cache.t, day)) {
						val.t = toDayDate
						setItem(key, val)
					} else {
						setItem(key, Object.assign(cache, val))
					}
				} else {
					// 缓存不存在
					val.t = toDayDate
					setItem(key, val)
				}
			},
			// 获取缓存
			getCache (key,  day) {
				// 获取当前缓存
				let cache = getItem(key)
				// 缓存存在
				if (cache) {
					// 缓存过期了
					if (pastDue(cache.t, day)) {
						return {}
					} else {
						return cache
					}
				} else {
					// 缓存不存在
					return {}
				}
			}
		}
	}
</script>

<style>
	#top{
		background-image: url(../../../static/image/index/checkIn/background.png);
	}
</style>
