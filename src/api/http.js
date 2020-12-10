import axios from 'axios'
import config from './config.js'
const apiHost = config.host()
function handlerResponse(response) {
  return response.data
}

function Get(path, params) {
  return axios.get(apiHost + path, {params: params}).then((response) => {
    return handlerResponse(response)
  }).catch((error) => {
  })
}

function Post(path, params) {
  return axios.post(apiHost + path, params).then((response) => {
    return handlerResponse(response)
  }).catch((error) => {
  })
}

export default {
  Get,
  Post
}
