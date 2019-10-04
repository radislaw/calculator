// const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  components: './components/**/*.vue'
}

module.exports = {
  components: './components/**/*.vue',
  // renderRootJsx: resolve(__dirname, 'styleguide/styleguide.root.js'),
  ribbon: {
    text: 'Back to examples',
    url: 'https://vue-styleguidist.github.io/Examples.html'
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: require('./babel.config')
          }
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'vue-style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  usageMode: 'expand',
  styleguideDir: 'dist'
}
