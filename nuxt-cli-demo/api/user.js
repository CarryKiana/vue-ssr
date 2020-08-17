import service from './request'
import qs from 'querystring'
const baseUrl = process.env.LOGIN_API

export default {
    // 用户信息列表
    getUserList: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    // 更改用户登录状态
    updateLoginFlag: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    // 删除用户
    delete: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    // 获取所有广告主
    getAdList: (data) => {
        return service({
            url: process.env.BASE_API + '',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    // 保存新增账号
    add: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    //修改账号
    edit: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    //获取用户信息
    getUserById: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    //获取计划列表
    planList: data => {
        return service({
            url: baseUrl + '',
            method: 'get',
            params: data
        });
    },
}
