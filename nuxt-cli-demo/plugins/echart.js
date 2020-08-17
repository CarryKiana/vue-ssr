import echarts from 'echarts'
import theme from '@/assets/js/theme.js'
import Vue from 'vue'

export default () => {
    Vue.prototype.$echarts = echarts
    echarts.registerTheme('theme', theme)
  }
  