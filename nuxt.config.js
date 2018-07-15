module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {lang: 'en'},
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Restaurant Reviews'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather|Montserrat'}
    ]
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  plugins: [
    {src: '~plugins/GoogleMaps.js'},
    {src: '~plugins/LazyLoad.js'}
  ],
  modules: [
    'nuxt-imagemin',
    '@nuxtjs/pwa'
  ],
  build: {
    vendor: ['axios'],

    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (!ctx.isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '../api/index.js'
  ]
}
