// import $api from 'api'
import Cookies from 'js-cookie'
import * as types from '../utils/mutation-types'
import * as config from '../utils/cookie-type'

// 登录后保存用户信息
export const saveUserInfo = ({
  commit
}, data) => {
  commit(types.SET_LOGINNAME, data.loginName)
  Cookies.set(config.SET_LOGINNAME, data.loginName, {
    expires: 7
  })
  commit(types.SET_SESSIONID, data.sessionId)
  Cookies.set(config.SET_SESSIONID, data.sessionId, {
    expires: 7
  })
  commit(types.SET_USERID, data.userId)
  Cookies.set(config.SET_USERID, data.userId, {
    expires: 7
  })
  commit(types.SET_USERTYPES, data.userType)
  Cookies.set(config.SET_USERTYPES, data.userType, {
    expires: 7
  })
  commit(types.SET_USERPHONE, data.phone)
  Cookies.set(config.SET_USERPHONE, data.phone, {
    expires: 7
  })
  commit(types.SET_REMEMBER, data.remember)
  Cookies.set(config.SET_REMEMBER, data.remember, {
    expires: 7
  })
  // commit(types.SET_JSESSIONID, data.JSESSIONID);
  // Cookies.set('JSESSIONID', data.JSESSIONID)
}
// 退出时删除用户信息
export const delUserInfo = ({
  commit
}) => {
  commit(types.SET_SESSIONID, '')
  Cookies.remove(config.SET_SESSIONID)
  commit(types.SET_USERID, '')
  Cookies.remove(config.SET_USERID)
  commit(types.SET_USERTYPES, '')
  Cookies.remove(config.SET_USERTYPES)
}

//获取用户权限
// export const getUser = ({
//     commit
// }) => {
//     return new Promise((resolve, reject) => {
//         $api.header.getUser().then(res => {
//             commit(types.SET_USER, res);
//             Cookies.set(config.SET_USER, JSON.stringify(res))
//             resolve(res)
//         }).catch(error => {

//             console.log(error)
//             reject(error)
//         })
//     })
// }




// 退出
// export const Logout = ({
//     commit
// }) => {
//     return new Promise(resolve => {
//         commit(types.SET_USER, '');
//         resolve()
//     })
// }

export async function nuxtServerInit({dispatch}, {route, app}) {
  // console.log(context);
  // console.log(dispatch)
  // console.log(route.meta)
  await Promise.resolve()
}