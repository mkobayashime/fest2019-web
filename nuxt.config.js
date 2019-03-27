const resolve = require('path').resolve

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
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
        content:
          '第73回灘校文化祭は2019年5月2–3日に開催されます 是非お越しください!'
      },
      {
        name: 'google-site-verification',
        content: 'OngPbsdP5hQtEl6qvBgMLdck8_fElTgN7rB-Dk9C03s'
      },
      {
        name: 'msapplication-TileImage',
        content: 'https://fest.nada-sc.jp/2019/icon-512x512.png'
      },
      {
        name: 'msapplication-TileColor',
        content: '#3D81FF'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon-precomposed',
        href: 'https://fest.nada-sc.jp/2019/icon-512x512.png'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'hsv(0, 0%, 60%)', height: '2px' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/global.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/youtube.js'],

  /*
   ** Router config
   */
  router: {
    base: process.env.NODE_ENV === 'production' ? '/2019/' : '/'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/pwa'],
    ['@nuxtjs/sitemap'],
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-136514592-1',
        debug: false
      }
    ],
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
    start_url: '/2019/',
    icons: [
      {
        src: 'https://fest.nada-sc.jp/2019/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },

  /*
   ** Generate sitemap.xml
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://fest.nada-sc.jp/2019',
    cacheTime: 1000 * 60 * 15,
    gzip: false,
    generate: true // Enable me when using nuxt generate
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: [['~/assets/data/sns.json'], ['pixi.js']],
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].js',
      img: () => '[path][name].[ext]',
      font: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]'
    },
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
