const path = require('path')

const fs = require('fs')
const dirs = fs.readdirSync(path.resolve(__dirname, '../../packages'))
const ComponentsJson = {}
console.log(dirs)
dirs.forEach(item => {
  if (item === 'theme-chalk') return
  ComponentsJson[item] = `../../packages/${item}`
})

fs.writeFileSync(path.resolve(__dirname, '../../component.json'), JSON.stringify(ComponentsJson))
