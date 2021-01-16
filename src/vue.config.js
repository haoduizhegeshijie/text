const proxyObj = {}
proxyObj['/'] = {
  target: 'http://tuh.dingf916.cn:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
}
module.exports = {
  devServer: {
    host: 'tuh.dingf916.cn',
    port: 8080,
    proxy: proxyObj
  }
}
