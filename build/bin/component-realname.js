// const fs = require('fs')
// const path = require('path')

// const dirs = fs.readdirSync(path.resolve(__dirname, '../../packages'))
// const prefix = 'bt'
// dirs.forEach(dir => {
//   if (dir.indexOf('theme-chalk') > -1) return
//   try {
//     const file = fs.readFileSync(path.resolve(__dirname, '../../packages', dir, 'src/main.vue'), 'utf8')
//     const reg = new RegExp(/name:([^:]+),/)
//     const str = file.toString()
//     let name = file.match(reg)[1]
//     name = `${prefix}-${name}`
//     const _reg = new RegExp(/props/, 'gi')
//     str.replace(_reg, '9999')
//     console.log('文件', str)
//   } catch (error) {
//     console.log('读取文件失败')
//   }
// })
// console.log(dirs)
