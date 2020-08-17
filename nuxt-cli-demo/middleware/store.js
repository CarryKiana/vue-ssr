export default async function ( { store, route, app, error, redirect}) {
    let data = app.$cookiz.getAll();
    store.dispatch('saveUserInfo', {
      JSESSIONID: data.JSESSIONID,
      loginName: data.gimc_dspadmin_set_loginName,
      sessionId: data.gimc_dspadmin_set_sessionId,
      userId: data.gimc_dspadmin_set_userId,
      userType: data.gimc_dspadmin_set_userType,
      phone: data.gimc_dspadmin_set_userPhone,
      remember: (data.gimc_dspadmin_set_remember || '').toString() == 'true'
    })
}