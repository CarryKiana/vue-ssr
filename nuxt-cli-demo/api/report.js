import service from './request'
import qs from 'querystring'
const baseUrl = process.env.BASE_API

export default {
    // 获取离线报表表格分页内容
    getOfflineReportData: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        })
    },
    // 获取下拉选项列表
    getSelectedList: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        })
    },
    // 获取柱状图数据
    getOfflineReportChartData: data => {
        return service({
            url: baseUrl + '',
            method: 'post',
            data: qs.stringify(data)
        })
    }
}
