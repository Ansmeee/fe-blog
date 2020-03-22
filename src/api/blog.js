import http from './http.js'

export default {
    latestBlog(params) {
        return http.Get('/rest/latestBlog', params)
    }
}