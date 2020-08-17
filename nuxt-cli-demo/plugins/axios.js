import api from '../api'

import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default ({
  app
}, inject) => {
  axios.interceptors.request.use(config => {
    //app.$cookiz.getAll()+ 
    // config.headers.Authorization = {JSESSIONID :app.$cookiz.get('JSESSIONID')}
    // config.headers.cookie = {JSESSIONID :app.$cookiz.get('gimc_dspadmin_set_JSESSIONID')}
    // console.log(config)
    return config
  }, error => {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, error => {
    return Promise.reject(error)
  })
  inject('api', api)
}
