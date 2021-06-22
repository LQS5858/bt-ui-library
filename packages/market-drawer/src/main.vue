<template>
  <section class="bt-market-wrap">
    <div class="bt-market-search-wrap">
      <el-input v-model.trim="search"
                :placeholder="placeHolderFormate">
        <i slot="suffix"
           :class="iconClass"></i>
      </el-input>
    </div>
    <div class="bt-market-nav-wrap">
      <div class="bt-market-nav">
        <template v-for="(item,key) in nav">
          <p :key="key"
             @click="setActive(key)"
             :style="[divideStyle]"
             :class="activeNavIndex===key?'active-nav':''"
             class="nav-item">
            {{item.label}}
          </p>
        </template>
      </div>
    </div>
    <div class="bt-market-header-wrap">
      <template v-for="(item,key) in header">
        <div :key="key"
             class="bt-header-item">
          {{item.label}} <div class="bt-header-icon-wrap">
            <div :class="item.upIcon"></div>
            <div :class="item.downIcon"></div>
          </div>
        </div>

      </template>
    </div>
  </section>
</template>
<script>
import locale from '../../../src/mixins/locale'

export default {
  name: 'BtMarketDrawer',
  data () {
    return {
      search: '',
      activeNavIndex: 1
    }
  },
  mixins: [locale],
  props: {
    placeHolder: {
      type: String
    },
    iconClass: {
      type: String,
      default: 'el-icon-search'
    },
    nav: {
      type: Array,
      default: () => {
        return [
          {
            label: '自选',
            value: 'optional'
          },
          {
            label: '全部',
            value: 'all'
          },
          {
            label: '免费交易区',
            value: 'free'
          },
          {
            label: '创新区',
            value: 'innovation'
          }
        ]
      }
    },
    header: {
      type: Array,
      default: () => {
        return [
          {
            label: '币种',
            value: 'coin'
          },
          {
            label: '最新价',
            value: 'price',
            upIcon: 'el-icon-caret-top',
            downIcon: 'el-icon-caret-bottom'
          },
          {
            label: '涨跌幅',
            value: 'updown',
            upIcon: 'el-icon-caret-top',
            downIcon: 'el-icon-caret-bottom'
          }
        ]
      }
    },
    divideBg: {
      type: String,
      default: '#000'
    },
    activeNavColor: {
      type: String,
      default: 'rgb(2, 167, 240)'
    }
  },
  computed: {
    divideStyle () {
      return {
        '--divid-bg': this.divideBg,
        '--active-Nav-color': this.activeNavColor

      }
    },
    placeHolderFormate () {
      if (!this.placeHolder) return this.t('marketDrawer.placeholder')
      return this.placeHolder
    }
  },
  methods: {
    setActive (key) {
      this.activeNavIndex = key
    }
  }
}
</script>
