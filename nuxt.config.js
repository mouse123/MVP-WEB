
module.exports = {
  server: {
    port: 8086, // default: 3000
    host: '127.0.0.1' // default: localhost
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/element-ui', ssr: true },
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'vue-wait/nuxt',
    '@nuxtjs/proxy',
  ],
  axios: {
    proxyHeaders: true,
    // retry: { retries: 1 },
    proxy: true
  },
  proxy: {

  },
  auth: {
    // Options
  },
  router: {
    // middleware: ['auth']
  },
  pwa: {
    workbox: {
      /* workbox options */
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
