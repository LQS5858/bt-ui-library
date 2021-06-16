import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BtUi from '../../../src/index'
import './styles/collapsible.styl'
import '../../../packages/theme-chalk/lib/index.css'
import hljs from 'highlight.js'
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/color-brewer.css'


export default ({ Vue }) => {
    Vue.use(Element);
    Vue.use(BtUi)
    Vue.directive('highlight', function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block) => {
            hljs.highlightBlock(block)
        })
    })
};