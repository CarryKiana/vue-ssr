import service from './request'
import qs from 'querystring'
const baseUrl = process.env.BASE_API

export default {
  // 查询ip黑名单列表
  getIpBlacklist: data => {
    return service({
      url: baseUrl + '',
      method: 'post',
      data: qs.stringify(data),
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    });
  },
  // 导入黑名单
  importIpBlacklist: data => {
    return service({
      url: baseUrl + '',
      method: 'post',
      timeout: 125000,
      data
    });
  },
  // 移除Ip黑名单
  delIpBlacklistById: data => {
    return service({
      url: baseUrl + '',
      method: 'post',
      data: qs.stringify(data)
    });
  },
  // test
  test: data => {
    return service({
      url: baseUrl + '',
      method: 'post',
      data:qs.stringify(data)
    })
  }
}
// test
