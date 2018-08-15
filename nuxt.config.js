module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'molychn.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'new blog' }
    ],
    link: [
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_783325_c5c0qkxfmzg.css'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** babel configuration
  */
  babel: {
    'plugins': [['component', [
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  /*
  ** Plugin configuration
  */
  plugins: [
    {src: '~plugins/element-ui', ssr: true}
  ],
  /*
  ** Css configuration
  */
  css: [
    // 全部引用的时候需要用到
    'element-ui/lib/theme-chalk/index.css',
    '~styles/common.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
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

