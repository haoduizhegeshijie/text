<template>
    <view class="container">
        <view class="status_bar"><!-- 这里是状态栏 --></view>
        <view class="page-header">
            <view :class="['title', cartList.length > 0 ? '' : 'text-center']">购物车</view>
            <block v-if="cartList.length > 0">
                <view class="edit" v-if="btnType === 'edit'" @click="$u.throttle(btnTool('edit'), 2000)">管理</view>
                <view class="edit" v-if="btnType === 'done'" @click="$u.throttle(btnTool('done'), 2000)">完成</view>
            </block>
        </view>
        <!-- <u-checkbox-group> -->
        <view class="cart-box" v-if="cartList.length > 0">
            <u-swipe-action
                :show="item.show"
                :disabled="swipeAction"
                btn-width="160"
                :index="index"
                v-for="(item, index) in cartList"
                :key="item._id"
                @click="$u.throttle(actionClick($event, item._id), 2000)"
                @open="actionOpen"
                :options="options"
            >
                <view class="item u-border-bottom">
                    <u-checkbox-group @change="checkboxChange" width="36rpx">
                        <u-checkbox v-model="item.check" size="36" shape="circle" active-color="#FD013E" class="checkbox"></u-checkbox>
                    </u-checkbox-group>

                    <view class="cart-img"><image mode="widthFix" :src="item.product.image" @click.stop="$u.throttle(gotoDetail(item.product._id), 2000)"></image></view>
                    <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
                    <view class="title-wrap" @click.stop="$u.throttle(gotoDetail(item.product._id), 2000)">
<!--                        {{item.title}}-->
                        <view class="title u-line-1 ">{{ item.product.title }}</view>
<!--                        {{item.title}}-->
                        <view class="sku">{{ item.product.cate_name }}</view>
                        <view class="price">
                            ¥
<!--                            {{item.marketprice}}-->
                            <text class="large">{{ priceInt(item.product.price) }}</text>
                            .{{ priceDecimal(item.product.price) }}
                        </view>
                    </view>
                    <u-number-box
                        v-model="item.product.number"
                        :min="1"
                        :max="item.product.stock"
                        input-width="100"
                        input-height="50"
                        @change="valChange($event, item.product._id)"
                    ></u-number-box>
                </view>
            </u-swipe-action>
        </view>
        <view class="page-box" v-else>
            <view>
                <view class="emputy">
                    <image src="/static/order/emputy.png"></image>
                    <view class="explain">
                        您还没有相关的订单
                        <view class="tips">可以去看看有哪些想买的</view>
                    </view>
                    <view class="btn" @click="$u.throttle(gotoHome, 2000)">随便逛逛</view>
                </view>
            </view>
        </view>
        <!-- <u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore> -->
        <u-gap height="100" bg-color="#fff"></u-gap>
        <view class="bottom" v-if="cartList.length > 0">
            <u-checkbox @change="checkedAll" v-model="checked" size="40" shape="circle" active-color="#FD013E" class="checkall"><span>全选</span></u-checkbox>
            <text class="price fill" v-if="btnType === 'edit'">
                <text class="sml">合计:</text>
                ￥{{ totalPrice }}
            </text>
            <u-button
                throttle-time="2000"
                v-if="btnType === 'edit'"
                @click="$u.throttle(btnClick('order'), 2000)"
                size="medium"
                :ripple="true"
                ripple-bg-color="#FEBABD"
                shape="circle"
                :customStyle="customStyle"
            >
                结算
                <text v-if="totalCount > 0">{{ '(' + totalCount + ')' }}</text>
            </u-button>
            <u-button
                throttle-time="2000"
                v-if="btnType === 'done'"
                size="medium"
                :ripple="true"
                ripple-bg-color="#ccc"
                shape="circle"
                :customStyle="customStyle2"
                @click="$u.throttle(btnClick('del'), 2000)"
            >
                删除
            </u-button>
        </view>
        <u-modal
            v-model="showModal"
            :title="title"
            :content="content"
            :title-style="titleStyle"
            :content-style="contentStyle"
            :confirm-style="confirmStyle"
            :show-cancel-button="true"
            @confirm="confirm"
        ></u-modal>
        <u-toast ref="uToast" />
    </view>
</template>

<script>
import sortdata from 'static/data/cartData.js';
export default {
    onShow() {
        this.checked = false;
        this.getCart();
        console.log(this.cartList);
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
        this.token = this.history.token
        this.openid = this.history.openid
        if(this.openid == ''){
            if(this.token == ''){
                uni.navigateTo({
                    url:'/pages/login/login'
                })
            }
        }else{
            uni.request({
                url: '/api/member_cart',
                data: {
                    token : this.token,
                    openid: this.openid
                },
                header: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'token': this.token,
                    'openid': this.openid
                },
                method: 'POST',
                success: (res) => {
                    if (res.data.data.code == 404) {
                        uni.navigateTo({
                            url:'/pages/login/login'
                        });
                    } else if(res.data.code != 200){
                        uni.showToast({
                            title: res.data.msg
                        });
                    } else {
                        that.info = res.data.data
                        console.log(that.info)
                    }
                    // console.log(res)
                }
            })
        }
        uni.request({
            url: '/api/member_info',
            data: {
                token : this.token,
                openid: this.openid
            },
            header: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'token': this.token,
                'openid': this.openid
            },
            method: 'POST',
            success: (res) => {
                if (res.data.data.code == 404) {
                    uni.navigateTo({
                        url:'/pages/login/login'
                    });
                } else if(res.data.code != 200){
                    uni.showToast({
                        title: res.data.msg
                    });
                } else {
                    that.cart = res.data.data
                    console.log(that.cart)
                }
                // console.log(res)
            }
        })
    },
    data() {
        return {
            loadStatus: 'loadmore',
            cartList: [], //购物车列表
            showModal: false, //modal弹窗
            title: '提示', //弹窗标题
            content: '确认删除商品?', //弹窗内容
            delId: '', //删除id,
            options: [
                {
                    text: '删除',
                    style: {
                        backgroundColor: '#FD013E'
                    }
                }
            ], //u-swipe-action样式
            btnType: 'edit', //按钮类型
            checked: false, //是否全选
            swipeAction: false, //是否禁止滑动
            // u-button样式
            customStyle: {
                color: '#fff',
                backgroundColor: '#FD013E',
                margin: '0',
                padding: '0 20rpx',
                width: '200rpx',
                fontSize: '32rpx'
            },
            customStyle2: {
                color: '#333',
                backgroundColor: 'rgba(0,0,0, 0)',
                margin: '0',
                padding: '0 20rpx',
                border: 'none',
                width: '200rpx',
                fontSize: '32rpx'
            },
            // 模态窗样式
            titleStyle: {
                fontSize: '36rpx'
            },
            contentStyle: {
                fontSize: '36rpx'
            },
            confirmStyle: {
                color: '#fff',
                backgroundColor: '#FD013E'
            },
            cart: '',
            info: ''
        };
    },
    computed: {
        // 价格合计
        totalPrice() {
            let sumPrice = 0,
                items = this.cartList;
            items.forEach(val => {
                let priceVal = parseFloat(val.product.price),
                    salesVal = parseFloat(val.product.number);
                if (val.check) {
                    sumPrice += priceVal * salesVal;
                }
            });
            // sumPrice = sumPrice == 0 ? 0 : sumPrice.toFixed(2);
            let tofixNum = sumPrice.toFixed(2);
            return parseFloat(tofixNum);
        },
        // 数量统计
        totalCount() {
            let totalNumber = 0,
                items = this.cartList;
            items.forEach(val => {
                if (val.check) {
                    totalNumber += val.number;
                }
            });
            return totalNumber;
        },
        // 价格整数
        priceInt() {
            return val => {
                let priceStr = val.toString();
                if (priceStr != parseInt(priceStr)) {
                    return priceStr.split('.')[0];
                } else {
                    return priceStr;
                }
            };
        },
        // 价格小数
        priceDecimal() {
            return val => {
                let priceStr = val.toString();
                if (priceStr != parseInt(priceStr)) {
                    return priceStr.split('.')[1];
                } else {
                    return '00';
                }
            };
        }
    },
    methods: {
        // 购物车列表
        getCart() {
            const resData = sortdata.cartData;
            resData.forEach(val => {
                val.show = false;
                val.check = false;
            });
            this.cartList = resData;
        },
        gotoHome() {
            uni.switchTab({
                url: '/pages/tabbar/home/home'
            });
        },
        // 管理按钮
        btnTool(type) {
            switch (type) {
                case 'edit':
                    this.btnType = 'done';
                    this.swipeAction = true;
                    let items = this.cartList;
                    items.forEach(val => {
                        val.show = false;
                    });
                    break;
                case 'done':
                    this.btnType = 'edit';
                    this.swipeAction = false;
                    break;
            }
        },
        // 删除
        actionClick(index, del) {
            this.showModal = true;
            this.delId = del;
        },
        // 删除确认
        confirm() {
            let _self = this;
            let delArr = [],
                type = _self.btnType,
                items = _self.cartList;
            if (type === 'edit') {
                delArr.push(_self.delId);
            } else {
                items.forEach(val => {
                    if (val.check) {
                        delArr.push(val._id);
                    }
                });
                _self.btnType = 'edit';
            }

            // 为了模拟清空购物车
            if (delArr.length == items.length) {
                _self.cartList = [];
            }

            _self.$refs.uToast.show({
                title: '删除了id为' + delArr + '的商品',
                icon: false
            });
        },
        // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
        actionOpen(index) {
            // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
            // 原本为'false'，再次设置为'false'会无效
            let items = this.cartList;
            items[index].show = true;
            items.forEach((val, idx) => {
                if (index != idx) {
                    items[idx].show = false;
                }
            });
        },
        // 跳转详情
        gotoDetail(id) {
            console.log(id);
            // uni.navigateTo({
            //     url: '/pages/good/detail?good_id=' + id
            // })
        },
        // 选中商品
        checkboxChange(e) {
            let items = this.cartList;
            let checkedArr = [];
            items.forEach(val => {
                if (val.check) {
                    checkedArr.push(val);
                }
            });
            let len = checkedArr.length;
            // 如果选择的数组中有值，并且长度等于列表长度，就是全选
            if (len > 0 && len == items.length) {
                this.checked = true;
            } else {
                this.checked = false;
            }
        },
        // 数量增减
        valChange(e, id) {
            // console.log(e, id);
        },
        // 全选
        checkedAll() {
            this.checked = !this.checked;
            let flag = this.checked,
                items = this.cartList;
            items.forEach(val => {
                if (flag) {
                    val.check = true;
                } else {
                    val.check = false;
                }
            });
        },
        // 结算
        btnClick(type) {
            let _self = this;
            switch (type) {
                case 'order':
                    let items = _self.cartList;
                    let checkedArr = [];
                    items.forEach(val => {
                        if (val.check) {
                            checkedArr.push(val._id);
                        }
                    });
                    let shopIds = checkedArr.toString();
                    if (!shopIds) {
                        _self.$refs.uToast.show({
                            title: '请选择要结算的商品!',
                            icon: false
                        });
                        return;
                    }
                    console.log(shopIds);
                    // uni.navigateTo({
                    //     url: '/pages/order/createOrder?cartId=' + shopIds
                    // });
                    break;
                case 'del':
                    if (!_self.totalCount) {
                        _self.$refs.uToast.show({
                            title: '请选择要删除的商品!',
                            icon: false
                        });
                        return;
                    }
                    _self.showModal = true;
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
// 状态栏占位
.status_bar {
    background-color: $base-color;
}
.page-header {
    padding: 26rpx 30rpx;
    display: flex;
    position: relative;
    color: #fff;
    font-size: 36rpx;
    background-color: $base-color;
    .text-center {
        width: 100%;
        text-align: center;
    }
    .edit {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30rpx;
        font-size: 32rpx;
    }
}
.item {
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    align-items: center;
    .cart-img {
        width: 200rpx;
        border-radius: 12rpx;
        overflow: hidden;
        image {
            width: 100%;
        }
    }
    .title-wrap {
        width: 440rpx;
        .sku {
            margin: 20rpx 0;
            font-size: 28rpx;
            color: #666;
        }
        .price {
            font-size: 32rpx;
            color: #333;
            .large {
                margin-left: 6rpx;
                font-size: 40rpx;
                font-weight: bold;
            }
        }
        .clamp {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
        }
        .title {
            text-align: left;
            font-size: 30rpx;
            color: #333;
            // margin-top: 20rpx;
            line-height: 46rpx;
        }
    }
    .u-numberbox {
        position: absolute;
        bottom: 20rpx;
        right: 20rpx;
    }
}
// emputy
.emputy {
    text-align: center;
    margin: 200rpx auto;
    font-size: 32rpx;
    image {
        width: 164rpx;
        height: 164rpx;
        border-radius: 50%;
        margin-bottom: 20rpx;
    }
    .tips {
        font-size: 24rpx;
        color: #999999;
        margin-top: 20rpx;
    }
    .btn {
        margin: 80rpx auto;
        width: 200rpx;
        border-radius: 32rpx;
        line-height: 64rpx;
        color: #ffffff;
        font-size: 26rpx;
        background: -webkit-linear-gradient(to right, rgba(253, 1, 62, 0.3) 0%, rgba(253, 1, 62, 1) 100%);
        background: linear-gradient(to right, rgba(253, 1, 62, 0.3) 0%, rgba(253, 1, 62, 1) 100%);
    }
}
.bottom {
    padding: 0 20rpx;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: var(--window-bottom);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 99;
    height: 110rpx;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 10rpx 6rpx rgba(0, 0, 0, 0.1);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .checkall {
        position: absolute;
        left: 20rpx;
        top: 50%;
        transform: translateY(-50%);
        span {
            color: #999;
            font-size: 32rpx;
        }
    }
    .price {
        margin-right: 20rpx;
        color: #fd013e;
        font-size: 32rpx;
        .sml {
            margin-right: 10rpx;
            color: #666;
            font-size: 36rpx;
        }
    }
}
</style>
