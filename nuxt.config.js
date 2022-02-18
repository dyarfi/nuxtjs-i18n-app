export default {
  // Target: https://go.nuxtjs.dev/config-target
  //  'server' | 'static'
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-i18n-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  /* Tailwindcss module */
  tailwindcss: {
    jit: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n', '@nuxtjs/apollo'],

  // Modules: https://github.com/nuxt-community/apollo-module
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },

  // i18n module: https://i18n.nuxtjs.org/setup
  i18n: {
    defaultLocale: 'en',
    vueI18nLoader: true,
    // skipSettingLocaleOnNavigate: true,
    // lazy: true,
    // langDir: 'lang/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'id',
        iso: 'in-ID',
        name: 'Indonesia'
      }
    ],
    pages: {
      _slug: {
        en: '/:slug?',
        id: '/:slug?'
      }
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        id: {
          welcome: 'Selamat Datang'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
