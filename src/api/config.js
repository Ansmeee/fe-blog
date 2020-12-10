export default {
  host: function () {
    return process.env.NODE_ENV == 'production' ? 'http://ansme.vip' : 'http://blog.ansme.cn'
  }
}
