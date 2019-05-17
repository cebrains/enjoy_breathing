import axios from './axios'
import config from './config'


const baseUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.1.240:8090/' : 'http://web-dev.rxthinking.cn/apigate/';

let instance = axios()

let timer = null;
function loop(requestId, times) {
    return new Promise((resolve, reject) => {
        timer = setTimeout(() => {
            instance.post(baseUrl + 'api/res/' + requestId).then(res => {
                if (!times) {
                  times = 1;
                }
                times++;
                if (res.code === 0) {
                    timer = null;
                    resolve(res);
                } else if (res.code == 6) {   //代表token过期且登录地址存在
                  
                } else if (times > config.reqMaxTimes) {
                  reject('请稍后再试')
                } else if (res.code === 3 || res.code === 4) {
                  reject(res.message)
                }  else {
                  loop(requestId, times);
                }
            })
        }, 500)
    })
}
function getData(requestId, count, cb, err) {
  count = count ? count : 0;
  return instance.post(baseUrl + 'api/res/' + requestId).then(res => {
    count++;
    if (res.code === 0) {
      cb(res);
    } else {
      if (res.code === 3 || res.code === 4) {
        err(res.message)
      }
      if (count  > config.reqMaxTimes) {
        err('请稍后再试');
      } else {
        setTimeout(()=> {
          getData(requestId, count, cb, err)
        }, 1000)
      }
    }
  })
}
export default {
  get (url, params, headers) {
    let options = {}
    if (params) {
        options.params = params
    }
    if (headers) {
        options.headers = headers
    }
    return instance.get(baseUrl + url, options)
  },
  post (url, params, headers) {
    let options = {}
    if (headers) {
      options.headers = headers
    }
    return instance.post(baseUrl + url, params, options)
  },
  put  (url, params, headers) {
    let options = {}
    if (headers) {
      options.headers = headers
    }
    return instance.put(baseUrl + url, params, options)
  },
  delete (url, params, headers) {
    let options = {}
    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.delete(baseUrl + url, options)
  },
  polling(url, params, headers) {
    return new Promise((resolve, reject) => {
        let options = {}
        if (headers) {
          options.headers = headers
        }
        const path = params.path;
        instance.post(baseUrl + url, params, options).then((res) => {
            let requestId = '';
            if (res.code === 0) {
                requestId = res.requestId;
                getData(requestId, 0, (res) => {
                  resolve(res)
                }, (err) => {
                  reject(err)
                })
            }
        })
    })
    
  },
}