import request from '../request/request'
import API from '../request/api'

export default {
  create(param) {
    return request.post(API.items, param)
  },
  update(id, param) {
    return request.put(API.item(id), param)
  },
  get(id) {
    return request.get(API.item(id))
  },
  getList() {
    return request.get(API.items)
  },
  delete(id) {
    return request.delete(API.item(id))
  }
}
