import http from './http.js'

export default {
  info() {
    return http.Get('/rest/info', {})
  }
}