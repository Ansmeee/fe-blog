import http from './http.js'

export default {
    latestBlog() {
        return http.Get('/rest/blog/latest', {})
    },
    blogList(params) {
        return http.Get('/rest/blog/list', params)
    },
    blogDetail(params) {
        return http.Get('/rest/blog/detail', params)
    }
}