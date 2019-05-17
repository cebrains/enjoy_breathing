import api from './index'
const commonUrl = 'api/req/v1/respiratory';
export default {
  getToken(param) {
    return api.post('/user/token', param)
  },
  get(url, param) {
    return api.get(url, param)
  },
  polling(param) {
    return api.polling(commonUrl, param)
  },
}