### MarketDrawer市场行情

业务常用市场行情

### 基础用法

基础的市场行情用法

<collapsible codeStr="<template>
 <div>
<bt-market-drawer :list='list'></bt-market-drawer>
 </div>
 </template>
 export default{
     name:MarketDrawer',
     data(){
         return {
              list:{
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
     }
 }">
  <bt-market-drawer tableContentHeight="100px"></bt-market-drawer>
</collapsible>

### Attributes

|参数   |  说明  |  类型  |  可选值  |  默认值  |
|---   |  ---   |  ---  |  ---    |  ---    |
|list   | 行情数据 | Object| 无      | 无      |
|modal |创新区是否显示提示|Boolean |true/false  |true
|drawerBg|行情抽屉背景色|String|无|#091e4c|
|placeHolder|搜索框placeholder;传入语言包对应的字符串|String|无|marketDrawer.placeholder|
|iconClass|搜索栏后缀图标|String|无|el-icon-search|
|nav|区域导航tab|Array|无|[{label:'marketDrawer.optional'value:'optional',id: 'optional'}]|
|header|表格头部|Array|无|[{label: 'marketDrawer.coin', value: 'coin'},{label: 'marketDrawer.price', value: 'price',upIcon: 'bt-icon-top-s',downIcon: 'bt-icon-below-s'},{label: 'marketDrawer.rose',value: 'updown',upIcon: 'bt-icon-top-s',downIcon: 'bt-icon-below-s'}]|
|divideBg|分区导航分割线背景色|String|无|#959ca3|
|activeNavColor|分区导航激活文字颜色|String|无|rgb(2,167,240)|
|navBarTextColor|分区导航文字颜色|String|无|#959ca3|
|searchInputBg|搜索输入框背景色|String|无|#1a2b4e|
|searchWrapBg|搜索容器背景色|String|无|#001235|
|activeNavBottomColor|激活导航栏底部border背景色|String|无|#c7a976|
|updownIconBg|排序箭头激活背景色|String|无|#357de1|
|partitionTextColor|行情内容区域分区头部字体颜色和左竖线颜色|String|无|#3b7cff|
|tabelAlign|类似表格文本对齐方式|String|无|left|
|tabelPriceWidth|最新价宽度|String|无|100px|
|tabelRoseWidth|涨跌幅宽度|String|无|80px|
|tabelCoinTextColor|表格内容字体颜色|String|无|#fff|
|rowHoverBg|表格行鼠标移入背景色|String|无|#323c44|
|currentActiveSymbol|当前已选中激活币对|String|无|无|
|tableNavI18n|主板/创新板对应国际化|Object|无|{main: 'marketDrawer.main', open: 'marketDrawer.open'}|
|dialogOpenBg|创新区说明背景弹窗|String|无|#00143a|
|dialogOpenKnowBtnBg|创新区弹窗我已知晓按钮背景色|String|无|#357de1|
|tableContentHeight|table内容高度;支持flex和px；当传入flex时默认flex:1占据剩余最大空间|String|无|flex|





