import service from './request'
import qs from 'querystring'
const baseUrl = process.env.BASE_API

export default {
    // 获取离线报表数据
    getGeneralOfflineReportData: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        })
    },
    // 获取订单和素材概况信息
    getGeneralOrderAndMaterial: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        })
    }
}