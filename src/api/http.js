import axios from 'axios'
import config from './config.js'

function Get(path, params) {
    return axios.get(config.host + path, {params: params}).then(function (response) {
        return {data: response.data}
    }).catch(function (failure) {
    })
}

function Post(path, params) {
    return axios.post(config.host + path, params).then(function (response) {
        return {data: response.data}
    }).catch(function (error) {
    });
}

export default {
    Get,
    Post
}
