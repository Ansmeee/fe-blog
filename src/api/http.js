import axios from 'axios'
import config from './config.js'

export const Http = (method, path, params = {}, data = {}) => {
    return axios({
        method: method,
        url: config.host + config.path[path],
        data: data,
        params: params
    })
}
