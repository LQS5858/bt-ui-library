
const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const uppercamelcase = require('uppercamelcase')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')
let { name } = require('../package.json')
const config = require('./config')
name = uppercamelcase(name)
module.exports = {
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: name,
    umdNamedDefine: true,
    globalObject: 'typeof self !==\'undefined\'?self:this'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  externals: {
    vue: config.vue
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        extractComments: true,
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'] // 移除console
          }
        }
      })
    ]
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
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
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        include: path.resolve(__dirname, '../src/assets'),
        options: {
          limit: 10000,
          name: '[name].[contenthash:7].[ext]',
          outputPath: 'lib/imgs'
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}
