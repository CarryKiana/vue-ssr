const pkg = require('./package')
const accessArr = require('./access')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  env: {
    BASE_API: 'http://192.168.1.31:30017/gimc-dsp-webapp/',
    LOGIN_API: 'http://192.168.1.31:30018/gimc-dspadmin-webapp'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/elementui.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios',
    '@/plugins/echart.js',
    {
      src: '~/plugins/message.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    ['nuxt-sass-resources-loader', ['@/assets/css/variable.scss', '@/assets/css/mixins.scss']],
    ['cookie-universal-nuxt', {
      alias: 'cookiz',
      parseJSON: false
    }],
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],
  proxy: {
    // '/gimc-dsp-webapp': 'http://192.168.1.31:30017/'
  },
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    vendor: ['axios']
  },
  /*
   ** router 
   */
  router: {
    middleware: 'store',
    extendRoutes(routes, resolve) {
      // routes.forEach(route => {
      //   let index = accessArr.map(access => {
      //     return access.name
      //   }).indexOf(route.name)
      //   if (index != -1) {
      //     route.meta = {
      //       access: accessArr[index].access
      //     }
      //   }
      // });
    }
  }
}
