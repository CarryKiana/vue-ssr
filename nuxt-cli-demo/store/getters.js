const getters = {
  user: state => {
    return {
      loginName: state.loginName,
      sessionId: state.sessionId,
      userId: state.userId,
      userType: state.userType,
      phone: state.phone,
      remember: state.remember
    }
  }
}

export default getters
