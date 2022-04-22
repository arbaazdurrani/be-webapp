export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  mode: 'universal',

  // You can also change the port number from the default port of 3000.
  server: {
    host: 'localhost',
    port: '3003',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Brand Exponent',
    // all titles will be injected into this template
    titleTemplate: 'Brand Exponent | %s',

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is a brand exponent website based on Nuxt JS.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    script: [
      { src: 'jquery-2.1.0.min.js', body: true },
      { src: 'popper.js', body: true },
      { src: 'bootstrap.min.js', body: true },
      { src: 'scrollreveal.min.js', body: true },
      { src: 'imgfix.min.js', body: true },
      { src: 'owl.carousel.min.js', body: true },
      { src: 'parallax.min.js', body: true },
      { src: 'waypoints.min.js', body: true },
      { src: 'jquery.counterup.min.js', body: true },
      { src: 'bootstrap-datetimepicker.min.js', body: true },
      { src: 'bootstrap-select.min.js', body: true },
      { src: 'jquery.downCount.js', body: true },
      { src: 'map-script.js', body: true },
      { src: 'moment.js', body: true },
      { src: 'particle-blue.js', body: true },
      { src: 'particle-dark.js', body: true },
      { src: 'particle-primary.js', body: true },
      { src: 'particles.min.js', body: true },
      { src: 'stickySidebar.js', body: true },
      { src: 'global.js', body: true },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon/logo-icon-color-2.png',
      },
      { rel: 'stylesheet', href: '/css/theme.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '/assets/css/theme.css',
    // '/assets/css/bootstrap.min.css',
    // 'assets/css/font-awesome.min.css',
    // 'assets/css/owl.carousel.min.css',
    // 'assets/css/owl.theme.default.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
