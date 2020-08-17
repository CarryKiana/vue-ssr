import Vue from 'Vue'
import Success from './src/main'

Success.installMessage = function (options) {
  if (options === undefined || options === null) {
    options = {
      title: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      title: options
    }
  }
  let message = Vue.extend(Success)

  let component = new message({
    data: options
  }).$mount()
  document.querySelector('body').appendChild(component.$el)
}

const install = function (Vue) {
  Vue.component(Success.name, Success)
  Vue.prototype.$DataSuccess = Success.installMessage
}

export default install
