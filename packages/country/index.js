import Country from './src/main.vue'

Country.install = function (Vue) {
  Vue.component(Country.name, Country)
}

export default Country
