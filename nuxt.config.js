import { defaultLocale, locales, i18nLocales } from './constants/i18nLocales'
// import { PhHorse, PhHeart, PhCube } from 'phosphor-vue'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  //  'server' | 'static'
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-i18n-app',
    htmlAttrs: {
      lang: defaultLocale
    },
    // Metas
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    // Links
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet', // Playfair+Display
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
      }
    ]
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
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/apollo',
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://github.com/nuxt-community/date-fns-module
    [
      '@nuxtjs/date-fns',
      {
        locales: locales
          .map((locale) => locale.code)
          .map((code) => (code === defaultLocale ? 'en-US' : code))
      }
    ]
  ],

  /**
   * Add extend the plugin options under the `chakra` key.
   **/
  chakra: {
    // icons: {
    //   // Here we state that we use `fa`
    //   // icons library for Chakra's
    //   // internal icon parser
    //   iconPack: 'phosphor',
    //   iconSet: {
    //     // ...phosphor
    //     PhHorse,
    //     PhHeart,
    //     PhCube
    //   }
    // },
    // fontFamily: 'Roboto',
    extendTheme: {
      fonts: {
        heading: '"Playfair Display", sans-serif',
        body: '"Roboto", sans-serif'
      },
      colors: {
        primary: '#86BBD8',
        secondary: '#F26419',
        info: '#33658A',
        error: '#F6AE2D',
        success: '#315771',
        muted: '#f5f5f5',
        brand: {
          primary: '#86BBD8',
          secondary: '#F26419',
          info: '#33658A',
          error: '#F6AE2D',
          success: '#315771',
          muted: '#f5f5f5'
        }
      },
      // radii: {
      //   none: '0',
      // sm: '0.125rem',
      // md: '0.25rem',
      // lg: '0.5rem',
      // full: '9999px'
      //   sm: '0',
      //   md: '0',
      //   lg: '0',
      //   full: '9999px'
      // },
      // fonts: {
      //   heading: '"Avenir Next", sans-serif',
      //   body: 'system-ui, sans-serif',
      //   mono: 'Menlo, monospace'
      // },
      baseStyles: {
        /**
         * Use a function to compute desired styles
         **/
        CButton: ({ /* colorMode, */ theme }) => ({
          // bg: colorMode === 'light' ? 'tomato' : 'hotpink',
          borderRadius: theme.sizes[0]
        }) //,
        // CSelectInput: ({ /* colorMode, */ theme }) => ({
        //   // bg: colorMode === 'light' ? 'tomato' : 'hotpink',
        //   borderRadius: theme.sizes[0]
        // })
      }
    }
  },

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
    defaultLocale,
    vueI18nLoader: true,
    // skipSettingLocaleOnNavigate: true,
    // lazy: true,
    // langDir: '~/static/lang/',
    locales,
    pages: {
      _slug: {
        en: '/:slug?',
        id: '/:slug?',
        ja: '/:slug?'
      }
    },
    vueI18n: i18nLocales
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
