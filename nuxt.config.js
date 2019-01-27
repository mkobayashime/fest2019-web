const pkg = require('./package')
const resolve = require('path').resolve

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'SAIL AWAY',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'
      },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'keywords',
        content: '灘校, 灘校文化祭, NADA, 文化祭, 関西, 兵庫, 高校, 私立'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', height: '2px' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/global.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Router config
  */
  router: {
    base: '/2019/'
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa'],
    [
      'nuxt-stylus-resources-loader',
      [
        resolve(__dirname, 'assets/stylus/mixins.styl'),
        resolve(__dirname, 'assets/stylus/variables.styl')
      ]
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/assets/data/config.json'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
