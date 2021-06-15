import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BtUi from '../../../src/index'
import '../../../packages/theme-chalk/lib/index.css'

export default ({ Vue }) => {
    Vue.use(Element);
    Vue.use(BtUi)
};