// const rootUrl = 'http://tuh.dingf916.cn';

    function http(url, method, data) {
        return new Promise((resolve, reject) => {
            uni.request({
                url: url,
                method: method,
                data: data,
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'token': uni.getStorageSync("loginInformation").token,
                    'openid': uni.getStorageSync("loginInformation").openid,
                },
                success(res) {
                    resolve(res)
                },
                error(err) {
                    reject(err)
                }

            })
        })
    }

module.exports = {
    http
}
