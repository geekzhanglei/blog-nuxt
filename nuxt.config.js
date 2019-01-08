const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    // title: pkg.name,
    title: '星辰小海的个人博客',
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
        // content: pkg.description
        content: "我像一个在海边玩耍的孩子，不时为拾到比通常更光滑的石子或更美丽的贝壳而欢欣鼓舞，而展现在我面前的是无尽的真理之海。前端的星辰大海面前，我只是个海边玩耍的孩子，这是前端之路的开始，我们的目标是没有蛀牙，哦不，是星辰大海哦!"
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#ddd'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/index.css',
    '@/assets/css/pageTransition.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '@/plugins/mavon-editor',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api/': {
      target: 'https://blogapi.feroad.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    },
    '/imgapi': {
      target: 'https://api.feroad.com',
      changeOrigin: true,
      pathRewrite: {
        '^/imgapi': ''
      }
    },
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
   ** Build configuration
   */
  build: {
    // extend(config, {
    //   isDev,
    //   isClient
    // }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
      // ...
    }
  }
}
