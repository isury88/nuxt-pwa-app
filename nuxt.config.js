const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-startup-image', href: '/apple_splash_2048.png', sizes: "2048x2732" },
      { rel: 'apple-touch-startup-image', href: '/apple_splash_1668.png', sizes: "1668x2224" },
      { rel: 'apple-touch-startup-image', href: '/apple_splash_1536.png', sizes: "1536x2048" },
      { rel: 'apple-touch-startup-image', href: '/apple_splash_1125.png', sizes: "1125x2436" },
      { rel: 'apple-touch-startup-image', href: '/apple_splash_1242.png', sizes: "1242x2208" },
      { rel: 'apple-touch-startup-image', href: '/apple_splash_750.png', sizes: "750x1334" },
      { rel: 'apple-touch-startup-image', href: '/apple_splash_640.png', sizes: "640x1136" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'Nuxt PWA APP',
    short_name: 'NuxtPWA',
    display: 'standalone'
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
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
