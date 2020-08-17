require('es6-promise').polyfill();
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {

  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(error)
})

export default service
