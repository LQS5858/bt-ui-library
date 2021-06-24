<template>
  <section id="bt-market-wrap"
           :style="[drawerBgStyle]">

    <div class="bt-market-nav-wrap">
      <div class="bt-market-nav">
        <template v-for="(item,key) in nav">
          <p :key="key"
             @click="setActive(key,item)"
             :id="activeNavIndex===key?'active-nav':''"
             class="nav-item text-ellipsis">
            {{t(item.label)}}
          </p>
        </template>
      </div>
    </div>
    <div class="bt-market-search-wrap">
      <el-input v-model.trim="search"
                @input="inputHandler"
                clearable
                :placeholder="t(placeHolderFormate)">
        <i slot="suffix"
           :class="iconClass"></i>
      </el-input>
    </div>
    <div class="bt-market-header-wrap">

      <template v-for="(item,key) in header">
        <div :key="key"
             @click="updownHandler(item.value)"
             class="
             pointer
             bt-header-item
             text-ellipsis">
          {{t(item.label)}}
          <div class="bt-header-icon-wrap">
            <span :class="
               item.upIcon"
                  ref="upref"
                  :id="setUpActiveId(item.value)"></span>
            <span :id="setDownActiveId(item.value)"
                  ref="downref"
                  :class="item.downIcon"></span>
          </div>
        </div>

      </template>
    </div>
    <div class="bt-market-content-wrap"
         :style="tableContentHeightFormat">
      <template v-if="!navList||!navList.length">
        <div class="no-data-wrap">
          <svg aria-hidden="true"
               class="no-data-svg">
            <use href="#icon-zanwujilu"></use>
          </svg>
          <p class="no-data-text">{{t('marketDrawer.noData')}}</p>
        </div>
      </template>
      <template v-else
                v-for="(item,key) in navList">
        <div :key="key"
             class="header">
          <p> {{t(tableNavI18n[item])||'--'}}</p>
        </div>

        <template v-for="(v,i) in list[item]">
          <div :key="i+item"
               :id="setRowStyle(v)"
               @click="changeBaseCoin(v)"
               class="bt-market-content-raw pointer">
            <div id="bt-header-coin"
                 ref="star"
                 class="bt-market-content-item tabel-td text-ellipsis">
              <svg aria-hidden="true"
                   @click.stop="addOptionalHandler(v,$event)"
                   class="star pointer">
                <use :href="getActiveStar(v)?'#icon-icon-active-star':'#icon-icon-star'"></use>
              </svg>
              {{v.name||'--'}}
              <img v-if="v&&v.fresh"
                   class="icon-new"
                   src="../../../src/assets/images/new_symbol.jpg" />
              <img v-if="v&&v.free"
                   class="icon-free"
                   src="../../../src/assets/images/free.png" />
              <img v-if="v&&v.hot"
                   class="icon-hot"
                   src="https://static-bituan.oss-cn-shenzhen.aliyuncs.com/upload/hot_symbol.png" />
            </div>
            <div class="pointer bt-market-price-item text-ellipsis">
              <span :style="[{textAlign:tabelAlign}]"
                    :class="v.textColor"
                    :id="v.textColorId"
                    class="full-width tabel-td text-ellipsis">{{v.latestPriceFormat||'--'}}</span>
              <span :style="{textAlign:tabelAlign}"
                    :id="v.textColorId"
                    class="full-width  tabel-td  text-ellipsis">{{v.currencyPriceFormat||'--'}}</span>
            </div>
            <div :id="v.textColorId"
                 class="bt-market-content-item tabel-td text-ellipsis">{{v.tradeTrendFormat||'--'}}</div>
          </div>
        </template>
      </template>
    </div>
    <!-- <div :modal="modal"
         id="modal">
      <el-dialog :title="t('marketDrawer.openDecription')"
                 center
                 :visible.sync="dialogVisible"
                 width="60%">
        <div class="content">
          {{t('market_open_decription_content')}}
        </div>
        <div class="tip pointer"
             @click="chooseHandler">
          <i :id="chooseNoTip?'choose-no-tip':''"
             class="iconfont icon-nochoose"></i>
          <span>{{t('marketDrawer.openDecriptionTip')}}</span>
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button type="primary"
                     @click="dialogVisible = false">{{t('marketDrawer.openDecriptionKnow')}}</el-button>
        </span>
      </el-dialog>
    </div> -->
  </section>
</template>
<script>
import locale from '../../../src/mixins/locale.js'
export default {
  name: 'BtMarketDrawer',
  data () {
    return {
      search: '',
      activeNavIndex: 1,
      priceUpdownActive: null,
      roseActive: null,
      dialogVisible: false,
      chooseNoTip: false
    }
  },
  mixins: [locale],
  props: {
    /**
     * 行情数据
     * format {main:[],open:[]}
     */
    list: {
      type: [Object, Array],
      default: () => {
        return {
          main: [
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            },
            {
              coin: 'btcusdt',
              price: '8888899999999999999999',
              cny: '98878',
              rose: '+98.88%'
            }
          ],
          open: [
            {
              coin: 'btcusdt',
              price: '88888',
              cny: '98878',
              rose: '+98.88%'
            }
          ]
        }
      }
    },
    /**
     * 传入布尔值控制是否显示modal
     */
    modal: {
      type: Boolean,
      default: true
    },
    /**
     * 整个抽屉背景色
     */
    drawerBg: {
      type: String,
      default: '#091e4c'
    },
    /**
     * 搜索框占位提示
     */
    placeHolder: {
      type: String,
      default: 'marketDrawer.placeholder'
    },
    /**
     * 搜索后缀图标
     */
    iconClass: {
      type: String,
      default: 'el-icon-search'
    },
    /**
     * 导航
     */
    nav: {
      type: Array,
      default: () => {
        return [
          {
            label: 'marketDrawer.optional', // 语言包对应字符串
            value: 'optional',
            id: 'optional'
          },
          {
            label: 'marketDrawer.all',
            value: 'all',
            id: 'all'
          },
          {
            label: 'marketDrawer.freeCoins',
            value: 'free',
            id: 'freeCoins'
          },
          {
            label: 'marketDrawer.open',
            value: 'innovation',
            id: 'open'
          }
        ]
      }
    },
    /**
     * 表格头部
     */
    header: {
      type: Array,
      default: () => {
        return [
          {
            label: 'marketDrawer.coin', // 语言包对应字符串
            value: 'coin'
          },
          {
            label: 'marketDrawer.price',
            value: 'price',
            upIcon: 'bt-icon-top-s',
            downIcon: 'bt-icon-below-s'
          },
          {
            label: 'marketDrawer.rose',
            value: 'updown',
            upIcon: 'bt-icon-top-s',
            downIcon: 'bt-icon-below-s'
          }
        ]
      }
    },
    /**
     * 分割线背景色
     */
    divideBg: {
      type: String,
      default: '#959CA3'
    },
    /**
     * 激活文字颜色
     */
    activeNavColor: {
      type: String,
      default: 'rgb(2, 167, 240)'
    },
    /**
     * navbar文字颜色
     */
    navBarTextColor: {
      type: String,
      default: '#959ca3'
    },
    /**
     * 搜索框背景色
     */
    searchInputBg: {
      type: String,
      default: '#1A2B4E'
    },
    /**
     * 搜索容器背景色
     */
    searchWrapBg: {
      type: String,
      default: '#001235'
    },
    /**
     * 激活的导航栏底部横条背景色
     */
    activeNavBottomColor: {
      type: String,
      default: '#C7A976'
    },
    /**
     * 涨跌箭头激活颜色
     */
    updownIconBg: {
      type: String,
      default: '#357DE1'
    },
    /**
     * 行情内容区域分区头部字体颜色和左竖线颜色
     */
    partitionTextColor: {
      type: String,
      default: '#3B7CFF'
    },
    /**
     * 类表格的文本对齐方式
     */
    tabelAlign: {
      type: String,
      default: 'left'
    },
    /**
     * 最新价宽度
     */
    tabelPriceWidth: {
      type: String,
      default: '100px'
    },
    /**
     * 涨跌幅宽度
     */
    tabelRoseWidth: {
      type: String,
      default: '80px'
    },
    /**
     * 币种字体颜色
     */
    tabelCoinTextColor: {
      type: String,
      default: '#fff'
    },
    /**
    * 鼠标移入行样式
     */
    rowHoverBg: {
      type: String,
      default: '#323C44'
    },
    /**
     * 当前激活币对，xx-xx
     */
    currentActiveSymbol: {
      type: String,
      default: null
    },
    /**
     * 主板/创新板对应的国际化
     */
    tableNavI18n: {
      type: Object,
      default: () => {
        return {
          main: 'marketDrawer.main',
          open: 'marketDrawer.open'
        }
      }
    },
    /**
     * 创新区说明弹窗背景
     */
    dialogOpenBg: {
      type: String,
      default: '#00143A'
    },
    /**
     * 创新区弹窗我已知晓背景色
     */
    dialogOpenKnowBtnBg: {
      type: String,
      default: '#357DE1'
    },
    /**
     * table内容高度;支持flex和px；当传入flex时默认flex:1占据剩余最大空间
     */
    tableContentHeight: {
      type: String,
      defalut: 'flex'
    }
  },
  computed: {
    tableContentHeightFormat () {
      if (this.tableContentHeight?.indexOf('flex') > -1) return { flex: 1 }
      return { height: this.tableContentHeight }
    },
    navList () {
      if (!this.list) return []
      const arr = Object.keys(this.list)
      return arr
    },
    drawerBgStyle () {
      const obj = {
        left: 'flex-start',
        right: 'flex-end',
        center: 'center'
      }

      return {
        '--drawer-bg': this.drawerBg,
        '--updown-active-color': this.updownIconBg,
        '--search-input-bg': this.searchInputBg,
        '--search-wrap-bg': this.searchWrapBg,
        '--divid-bg': this.divideBg,
        '--active-nav-bottom-color': this.activeNavBottomColor,
        '--active-Nav-color': this.activeNavColor,
        '--nav-bar-text-color': this.navBarTextColor,
        '--partition-text-color': this.partitionTextColor,
        '--tabel-text-align': obj[this.tabelAlign],
        '--tabel-coin-width': this.tabelCoinWidth,
        '--tabel-price-width': this.tabelPriceWidth,
        '--tabel-rose-width': this.tabelRoseWidth,
        '--tabel-coin-text-color': this.tabelCoinTextColor,
        '--raw-hover-bg': this.rowHoverBg,
        '--dialog-open-bg': this.dialogOpenBg,
        '--dialog-open-know-bg': this.dialogOpenKnowBtnBg
      }
    },

    placeHolderFormate () {
      if (!this.placeHolder) return 'marketDrawer.placeholder'
      return this.placeHolder
    }
  },
  watch: {
    priceUpdownActive (newVal, oldVal) {
      if (!newVal) return
      this.$emit('priceOrderBy', newVal, 'latestPrice')
    },
    roseActive (newVal, oldVal) {
      if (!newVal) return
      this.$emit('roseOrderBy', newVal, 'tradeTrend')
    }
  },
  methods: {
    chooseHandler () {
      this.chooseNoTip = !this.chooseNoTip
      localStorage.setItem('open-no-tip', this.chooseNoTip)
    },
    getActiveStar (raw) {
      const localMarket = localStorage.getItem('optionalMarket') || null
      if (!localMarket) return
      const { name } = raw || {}
      if (!name) return
      return localMarket.includes(name)
    },
    changeBaseCoin (raw) {
      this.$emit('changeBaseCoin', raw)
    },
    setRowStyle (v) {
      const symbol = this.currentActiveSymbol && this.currentActiveSymbol.replace('-', '/')
      if ((v && v.name && v.name.toUpperCase()) !== symbol) return
      return 'active-raw'
    },
    inputHandler (v) {
      this.$emit('searchEmit', v)
    },
    addOptionalHandler (v, e) {
      this.$emit('addOptional', v)
      this.$forceUpdate()
    },
    setUpActiveId (type) {
      if (type !== 'price' && type !== 'updown') return
      const obj = {
        price: () => {
          if (this.priceUpdownActive === 'up') return 'updown-active'
        },
        updown: () => {
          if (this.roseActive === 'up') return 'updown-active'
        }
      }
      return obj[type]()
    },
    setDownActiveId (type) {
      if (type !== 'price' && type !== 'updown') return
      const obj = {
        price: () => {
          if (this.priceUpdownActive === 'down') return 'updown-active'
        },
        updown: () => {
          if (this.roseActive === 'down') return 'updown-active'
        }
      }
      return obj[type]()
    },
    updownHandler (type) {
      if (type !== 'price' && type !== 'updown') return
      const obj = {
        price: () => {
          if (this.priceUpdownActive === 'up') {
            this.priceUpdownActive = 'down'
          } else {
            this.priceUpdownActive = 'up'
          }
          this.$forceUpdate()
        },
        updown: () => {
          if (this.roseActive === 'up') {
            this.roseActive = 'down'
          } else {
            this.roseActive = 'up'
          }
          this.$forceUpdate()
        }
      }
      return obj[type]()
    },
    setActive (key, item) {
      this.activeNavIndex = key
      const { id } = item || {}
      this.$emit('changeNav', id)
      if ((id && id.indexOf('open') > -1)) {
        const choosedTip = localStorage.getItem('open-no-tip')
        if (!choosedTip) this.dialogVisible = true
      }
    }
  }
}
</script>
