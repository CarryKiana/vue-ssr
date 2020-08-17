import * as types from '../utils/mutation-types'

const mutations = {
  [types.SET_LOGINNAME](state, loginName) {
    state.loginName = loginName
  },
  [types.SET_SESSIONID](state, sessionId) {
    state.sessionId = sessionId
  },
  [types.SET_USERID](state, userId) {
    state.userId = userId
  },
  [types.SET_USERTYPES](state, userType) {
    state.userType = userType
  },
  [types.SET_USERPHONE](state, phone) {
    state.phone = phone
  },
  [types.SET_REMEMBER](state, remember) {
    state.remember = remember
  }
  // [types.SET_JSESSIONID](state, JSESSIONID) {
  //   state.JSESSIONID = JSESSIONID
  // }
}

export default mutations
