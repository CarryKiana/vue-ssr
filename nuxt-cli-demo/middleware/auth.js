export default async function ( { store, route, app, error, redirect}) {
    let whiteList = ['/', '/forgot']
    let meta = route.meta[route.meta.length - 1]
    let role = +app.$cookiz.get('gimc_dspadmin_set_userType')
    if (!role) {
        await role
        return;
    }
    await app.$axios.get(process.env.LOGIN_API + `/ucenter/isLogin?sessionId=${app.$cookiz.get('gimc_dspadmin_set_sessionId')}`).then(res => {
        if (res.data.ret == 0) {
            if (whiteList.indexOf(route.path) !== -1) {
                if (role== 1) {
                    redirect('/set/user')
                } else {
                    redirect('/main')
                }
            } else if (meta.access && meta.access.indexOf(role) == -1 ){
                error({statusCode: 404, message: '您没有权限'})
            } else {
                // 不拦截
            }
        } else {
            store.dispatch('delUserInfo')
            redirect('/')
        }
    }).catch(err => {
        console.log(err)
    })
   
}