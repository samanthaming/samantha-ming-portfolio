require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Samantha Ming | Front End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to Samantha Ming\'s portfolio website. Take a look at my work or get in touch! '},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Heebo:400,700' },
      { rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', crossorigin: 'anonymous', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' },{
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins
  */
  plugins:['~plugins/element-ui.js'],
  /*
  ** CSS
  */
  css:[
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.scss'
  ],
  /*
  ** CSS
  */
  modules: [
    ['@nuxtjs/google-analytics', {id: `${process.env.GOOGLE_TRACKING_ID}`}],
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
