const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const library = require('./src/library.json')

const gtmString = `
<script async src="https://www.googletagmanager.com/gtm.js?id=${library.gtm}"></script>
<script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', '${library.gtm}');
</script>
`

const gtmDebug = `
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=${library.gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
`

module.exports = process.env.VUE_APP_IS_MODULE ? {} : {
  publicPath: '/',
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$|\.svg$|\.png|\.jpg$$/,
        threshold: 10240,
        minRatio: 0.8
      }),

      new HtmlWebpackPlugin({
        template: 'public/index.html',
        baseUrl: process.env.VUE_APP_BASE_URL,
        gtm: library.gtm === 'none' ? '<script>window.dataLayer = window.dataLayer || [];</script>' : gtmString,
        gtmdebug: library.gtm === 'none' ? '' : gtmDebug,
        version: library.version,
        title: library.title,
        primary: library.style.primary
      })
    ]
  }
}