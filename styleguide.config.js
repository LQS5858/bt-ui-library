// styleguide.config.js
const { version } = require('./package.json')
module.exports = {

  title: '内部组件库', // 文档的标题
  components: 'packages/**/**/**.vue', // 组件的目录
  defaultExample: false, // 是否使用默认样例
  usageMode: 'expand', // 是否展开用法
  exampleMode: 'expand', // 是否展开示例代码
  styleguideDir: 'docs', // 打包的目录
  codeSplit: true, // 打包时是否进行分片
  skipComponentsWithoutExample: false, // 是否跳过没有样例的组件
  version: `Version ${version}`
}
