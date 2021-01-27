<template>
    <view id="set" :style="{ 'height': windowHeight + 'px' }">
        <view id="content">
            <view class='list'>
                <navigator class="li" url="/pages/my/personal/personal">
                    <view class="icon">
                        <image src="../../../static/image/my/data.png"></image>
                    </view>
                    <view class="text">我的资料</view>
                    <image class="to" src="../../../static/image/HM-PersonalCenter/to.png"></image>
                </navigator>
            </view>
            <view class='list'>
                <navigator class="li" url="/pages/my/address/address">
                    <view class="icon">
                        <image src="../../../static/image/my/address.png"></image>
                    </view>
                    <view class="text">收货地址</view>
                    <image class="to" src="../../../static/image/HM-PersonalCenter/to.png"></image>
                </navigator>
            </view>
        </view>
        <view>
            <button type="primary" class="bg-main rounded text-white" @click="logout">退出登陆</button>
        </view>
    </view>
</template>

<script>
    export default {
        name: "set",
        data(){
            return {
                windowHeight: 0
            }
        },
        mounted () {
            uni.getSystemInfo({
                success: (res) => {
                    console.log(res.windowHeight);
                    this.windowHeight = res.windowHeight;
                }
            });
        },
        methods: {
            logout(){
                debugger
                uni.clearStorage();
                uni.navigateTo({
                    url: '/pages/my/my'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #set{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        #content{
            margin-top: 100rpx;
            background-color: #fff;

            .list{
                width:700rpx;
                margin-left: 20rpx;
                margin-right: 20rpx;

                .li{
                    width:92%;
                    height:100upx;
                    padding:0 4%;
                    border-bottom:solid 1upx #f5f6fa;
                    display:flex;
                    align-items:center;

                    &.noborder{
                        border-bottom:0
                    }

                    .icon{
                        flex-shrink:0;
                        width:50upx;
                        height:50upx;

                        image{
                            width:50upx;
                            height:50upx;
                        }
                    }

                    .text{
                        padding-left:20upx;
                        width:100%;
                        color:#666;
                    }

                    .to{
                        flex-shrink:0;
                        width:40upx;
                        height:40upx
                    }
                }
            }
        }
    }
</style>