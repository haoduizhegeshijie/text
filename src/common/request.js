const baseUrl = 'http://tuh.dingf916.cn'

const request = function(options) {
    options.url = baseUrl + options.url;
    try {
        // 获取放入缓存的字段token
        uni.getStorage({
            key: 'history',
            success(res){
                that.history = res.data
            },
            fail: function(res) {
                console.log(res+'aaaaa')
            }
        });
        const token = this.history.token
        const openid = this.history.openid
        if (token) { // 如果存在token 配置请求头
            options.header = {
                'Authorization' : 'Bearer ' + token,
                'Content-Type' : 'application/json',
                'openid': openid
            };
        }else{	// 不存在token 跳转至登录
            uni.navigateTo({
                url: '/pages/login/login'
            });
            return;
        }
    } catch (err) {
        console.log(err)
    }
    // 这里对response进行处理，
    // 401表示登录状态过期，需重新登录
    options.complete = (response) => {
        if (response.statusCode == 401) {
            uni.navigateTo({
                url: '/pages/login/login'
            });
            return;
        }
    }
    return uni.request(options);
}
export default request;