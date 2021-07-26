import { Message } from 'element-ui'

const axios = require('axios')

const baseUrl = 'http://localhost:8011'

const request = axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

request.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    Message.error(error.response.data.message)
    return Promise.reject(error)
  }
)

export default {
  post (url = '', data = {}, config = {}) {
    return request.post(url, data, config)
  },
  put (url = '', data = {}, config = {}) {
    return request.put(url, data, config)
  },
  patch (url = '', data = {}, config = {}) {
    return request.patch(url, data, config)
  },
  get (url = '', params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config)
    return request.get(url, OPTIONS)
  },
  delete (url = '', params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config)
    return request.delete(url, OPTIONS)
  }
}
