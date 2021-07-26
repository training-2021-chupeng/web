import request from '../request/request'

export default {
  test () {
    return request.get('/')
  }
}
