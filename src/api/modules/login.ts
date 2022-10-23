
// import request from '@/utils/axios'
import { sendRequest } from '@/utils/axios'

// 两种调用方法

export default class Login {
  static login(data:any) {
    return sendRequest('/api/m1/1804449-0-default/login','post',data)
  }
}

// export const login = (data:any) => {
//   return request({
//     url: '/api/m1/1804449-0-default/login',
//     method: 'post',
//     data
//   });
// }
