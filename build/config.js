
const path = require('path')

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'bt-ui': path.resolve(__dirname, '../'),
  mixins: path.resolve(__dirname, '../src/mixins')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules|utils|\/popper\.js|utils\/date\.js/
