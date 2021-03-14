const apiRoute = process.env.API_ROUTE || 'http://localhost:1337'
const graphqlRoute = `${apiRoute}/graphql`

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  render: {
    http2: {
      push: true,
      pushAssets: null,
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Corentin Verquin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Parcour et projet de corentin verquin',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&amp;display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css',
      },
    ],
    script: [
      {
        src:
          'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    '@nuxtjs/fontawesome',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api',
    // https://www.npmjs.com/package/nuxt-graphql-request
    'nuxt-graphql-request',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-combine-media-query': {},
        'postcss-combine-duplicated-selectors': {},
        cssnano: {},
      },
    },
  },

  // https://www.npmjs.com/package/@nuxtjs/fontawesome
  fontawesome: {
    solid: true,
    brands: true,
  },

  // https://www.npmjs.com/package/nuxt-graphql-request
  graphql: {
    clients: {
      default: {
        endpoint: graphqlRoute,
      },
    },
  },

  // https://www.npmjs.com/package/@nuxtjs/markdownit
  markdownit: {
    preset: 'default',
    linkify: false,
    breaks: true,
    injected: true,
    use: ['markdown-it-attrs'],
  },

  publicRuntimeConfig: {
    graphql: {
      clients: {
        default: {
          endpoint: graphqlRoute,
        },
      },
    },
  },
  env: {
    apiRoute: process.env.NODE_ENV === 'production' ? '' : apiRoute,
  },
}
