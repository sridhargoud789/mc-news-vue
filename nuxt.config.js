import colors from 'vuetify/es5/util/colors';
// import { ProvidePlugin } from 'webpack';
// import { BUILD_ID } from './BUILD_ID';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Mundo Crypto News',
    title: 'Mundo Crypto News',
    meta: [
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge'},
      { hid:  'charset', charset: 'UFT-8' },
      { hid:  'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid:  'description', name: 'description', content: 'Prensa descentralizada web3' },
      { hid:  'apple-mobile-web-app-title', name:'apple-mobile-web-app-title', content: 'Mundo Crypto News' },

      // meta etiquetas open graph para compartir en redes sociales
      { hid:  'og:title', property:'og:title', content: 'Mundo Crypto News' },
      { hid:  'og:url', property: 'og:url', content: 'https://news.mundocrypto.com/' },
      { hid:  'og:description', property:'og:description', content: 'Prensa descentralizada web3' },
      { hid:  'og:image', property:'og:image', content: 'https://mundocrypto.com/logomc.png' },
      { hid:  'og:site_name', property:'og:site_name', content: 'Mundo Crypto News' },
      { hid:  'format-detection', name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mc_logo_blue.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Saira+Condensed:wght@600&family=Saira+Extra+Condensed:wght@800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      },
    ],
    script: [
      {
        src: "/scripts/googleTagManager.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/i18n.plugin.js' },
    { src: '~/plugins/api.nebolus.plugin.ts' },
    { src: '~/plugins/formatted.date.plugin.ts' },
    { src: '~/plugins/content.translation.plugin.ts' },
    { src: '~/plugins/article.translation.plugin.ts' },
    { src: '~/plugins/weekly.analyzes.translation.plugin.ts' },
    { src: '~/plugins/any.translation.plugin.ts' },
    { src: '~/plugins/get.translation.plugin.ts' },
    { src: '~/plugins/vee.validate.plugin.ts' },
    { src: '~/plugins/current.locale.plugin.ts' },
    { src: '~/plugins/leftover.locale.plugin.ts' },
    { src: '~/plugins/infiniteloading', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // layer0: https://www.npmjs.com/package/@layer0/cli
    ['@layer0/nuxt/module', { layer0SourceMaps: true}],
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    //'@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: [ 'faUserCircle','faUserAstronaut'],
      regular: [ ],
      light: [],
      duotone: [],
      brands: []
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/guide
    '@nuxtjs/auth',
    // https://github.com/shakee93/vue-toasted
    '@nuxtjs/toast',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n-legacy.nuxtjs.org/
    'nuxt-i18n',
    'vue-social-sharing/nuxt',
    // https://www.npmjs.com/package/nuxt-lazy-load
    ['nuxt-lazy-load', {
      defaultImage: '/img/default-image.jpg',
    }],
    'bootstrap-vue/nuxt',
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', apiCode: 'ENG', apiId: 2, file: 'en.js', dir: 'ltr', flag: '~/static/img/en-flag.svg' },
      { code: 'es', name: 'Espanol', iso: 'es-ES', apiCode: 'ESP', apiId: 1 , file: 'es.js', dir: 'ltr', flag: '~/static/img/es-flag.svg' },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'es',
    langDir: 'locales/',
    vueI18nLoader: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    debug: false,
    proxy: true,
  },
  proxy: {
    '/backend': {
      target: 'https://api.mundocrypto.com/api/'
    }
  },
  // authentication module configuration: https://auth.nuxtjs.org/guide/configuration.html
  auth: {
    strategies: {
      local: {
        redirect: {
          login: '/',
          logout: '/login',
          callback: false,
          home: false,
        },
        url: '/backend',
        endpoints: {
          login: { url: '/backend/login', method: 'post', },
          logout: { url: '/auth/logout-api',  method: 'post', },
          user: false,
        }
      }
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        domain: 'www.mundocrypto.com'
      }
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null, // esto es para depurar los warn del postcss
    extractCSS: {
      ignoreOrder: true
    },
    transpile: ["vee-validate/dist/rules"],
  },
  //  Are you interested in participating? (Yes)
  telemetry: true,
  minimize: false,
  typescript: {
    // memoryLimit: 1028,
  },
  serverMiddleware: {
    '/api': '~/api',
  },
}
