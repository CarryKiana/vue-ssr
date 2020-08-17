import service from './request'
import qs from 'querystring'
const baseUrl = process.env.LOGIN_API

export default {
  // 登录
  login: data => {
    return service({
      url: baseUrl + '',
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 查询用户类型
  getUserType: data => {
    return service({
      url: baseUrl + '',
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 获取手机验证码 /smsVerificationCodeType登录传0修改密码传1
  getPhoneCode: data => {
    return service({
      url: baseUrl + '',
      method: 'get',
      params: data
    })
  },
  // 获取图片验证码
  getPictureCode: uuid => {
    return baseUrl + '' + uuid;
  },
  // 忘记/修改密码
  updatePassword: data => {
    return service({
      url: baseUrl + '',
      method: 'post',
      data: qs.stringify(data)
    })
  },
  // 退出
  logout: data => {
    return service({
      url: baseUrl + '',
      method: 'get'
    })
  },
  // 判断用户是否在登录状态
  isLogin: data => {
    return service({
      url: baseUrl + '',
      method: 'get',
      params: data
    })
  },
  // 密码加密登录成功后传sessionId给后台
  onlyOneLogin: data => {
    return service({
      url: process.env.BASE_API + '',
      method: 'post',
      data: qs.stringify(data)
    })
  }
}
