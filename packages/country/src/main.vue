<template>
  <div class="select"
       :style="selectStyle">
    <p id="select"
       tabindex="0"
       @focus="showPopver=true"
       class="pointer">
      <span class="label text-ellipsis">{{curValueFormat}}</span>
      <i class="el-icon-caret-bottom"
         :class="showPopver?'transform':''"></i>
    </p>
    <!-- animate__fadeIn  animate__animated-->
    <p class="triangle"
       :id="showPopver?'show-triangle':''"></p>
    <div class="list"
         :id="showPopver?'show-list':''"
         :style="listStyle">
      <el-input :placeholder="t('country.searchPlaceHolder')"
                id="searchInput"
                clearable
                v-model.trim="searchValue">
        <i slot="prefix"
           class="el-input__icon el-icon-search"></i>
      </el-input>
      <ul>

        <template v-for="(item,key) in listFormat">
          <li :key="key"
              @click="selectedValue(item)"
              :style="[rowStyle,hoverStyle]"
              class="row pointer">
            {{item.label}}
          </li>
        </template>
      </ul>

    </div>
  </div>
</template>
<script>
import locale from '../../../src/mixins/locale'
export default {
  name: 'BtCountry',
  data () {
    return {
      curValue: null,
      searchValue: null,
      showPopver: false
    }
  },
  mixins: [locale],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /*
    @params
    value 双向数据绑定v-model
    list 下拉展开列表数据
    listStyle 展开列表容器样式
    rowStyle 展开列表行样式
    selectStyle 选择框样式
    hoverBg 鼠标hover背景样式
     */
    value: {
      type: [String]
    },
    //   list数据格式
    list: {
      type: [Array],
      required: true,
      default () {
        return [
          {
            label: '1',
            value: 1
          },
          {
            label: '2',
            value: 2
          },
          {
            label: '3',
            value: 3
          },
          {
            label: '4',
            value: 4
          }
        ]
      }
    },
    hoverBg: {
      type: [String],
      default: '#357DE1'
    },
    rowStyle: {
      type: [Object],
      default () {
        return {
          color: '#fff'
        }
      }
    },
    listStyle: {
      type: [Object],
      default () {
        return {
          border: '1px solid rgba(215, 215, 215, 1)',
          borderRadius: '4px',
          backgroundColor: '#0a1f44',
          boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)'
        }
      }
    },
    placeHolder: {
      type: String
    },
    selectStyle: {
      type: [Object],
      default () {
        return {

        }
      }
    }
  },
  computed: {
    hoverStyle () {
      return {
        '--li-hover': this.hoverBg
      }
    },
    curValueFormat () {
      if (!this.curValue) {
        if (this.placeHolder) return this.placeHolder
        return this.t('country.selectText')
      }
      return this.curValue
    },
    listFormat () {
      if (this.searchValue) {
        return this.list.filter(item => new RegExp(this.searchValue, 'gi').test(item.label))
      }
      return this.list || []
    }
  },
  methods: {
    clearSearch () {
      this.searchValue = null
    },
    listenClick () {
      window.addEventListener('click', (e) => {
        const dom = e.target
        const _dom = dom.parentNode
        const childNode = _dom.children
        let childValue = null
        if (childNode && childNode.length) {
          childValue = childNode[0].getAttribute('id')
        }
        if (_dom) {
          const value = _dom.getAttribute('id')
          if (value !== 'select' && childValue !== 'searchInput') {
            this.showPopver = false
            this.clearSearch()
          } else {
            this.showPopver = true
          }
        } else {
          this.showPopver = false
          this.clearSearch()
        }
      })
    },

    selectedValue ({ label, code, areaCode }) {
      this.curValue = label
      this.showPopver = false
      this.$emit('change', areaCode)
      this.clearSearch()
    }
  },
  mounted () {
    this.listenClick()
  }
}
</script>
