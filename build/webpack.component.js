const path = require('path')
let { name } = require('../package.json')
const uppercamelcase = require('uppercamelcase')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Components = require('../component.json')
const config = require('./config')
name = uppercamelcase(name)
module.exports = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: name,
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|git|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}
