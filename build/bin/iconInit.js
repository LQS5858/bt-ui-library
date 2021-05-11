const path = require('path')

const postcss = require('postcss')
const fs = require('fs')
const fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'))

const nodes = postcss.parse(fontFile).nodes

const classList = []

nodes.forEach(node => {
  const selector = node.selector || ''
  const reg = new RegExp(/\.bt-icon-([^:]+):before/)
  const arr = selector.match(reg)
  if (arr && arr[1]) {
    classList.push(arr[1])
  }
})

classList.reverse()
fs.writeFileSync(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList))
