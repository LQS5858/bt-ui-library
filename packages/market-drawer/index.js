import MarketDrawer from './src/main.vue'

MarketDrawer.install = function (Vue) {
    Vue.componet(MarketDrawer.name, MarketDrawer)
}

export default MarketDrawer
