const resolve = require('path').resolve
const baseUrl = process.env.BASE_URL || '/'

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | 第73回灘校文化祭',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '第73回灘校文化祭は2019年5月2–3日に開催されます'
      },
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
  loading: { color: 'hsv(0, 0%, 60%)', height: '2px' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/global.css',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/youtube.js'],

  /*
   ** Router config
   */
  router: {
    base: baseUrl
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
    ],
    ['nuxt-device-detect']
  ],

  /*
   ** PWA
   */
  manifest: {
    name: '第73回灘校文化祭',
    short_name: '灘校文化祭',
    lang: 'ja',
    theme_color: '#3d81ff',
    display: 'browser',
    orientation: 'portrait',
    start_url: 'http://fest.nada-sc.jp/2019',
    icons: [
      {
        src: 'static/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: [['~/assets/data/sns.json'], ['pixi.js']],
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
