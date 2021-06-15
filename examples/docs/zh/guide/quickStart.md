### 快速上手

本节将介绍如何在项目中使用 Element。

### 使用vue-cli@3

我们为新版的 vue-cli 准备了相应的 [Element](https://github.com/ElementUI/vue-cli-plugin-element) 插件，你可以用它们快速地搭建一个基于 Element 的项目。

### 使用 Starter Kit

我们提供了通用的[项目模板]()，你可以直接使用。对于 Laravel 用户，我们也准备了相应的[模板]()，同样可以直接下载使用。

如果不希望使用我们提供的模板，请继续阅读。

### 引入 Element

你可以引入整个 Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。

### 完整引入

在 main.js 中写入以下内容：

```vue
import Vue from 'vue';
import BtUI from 'bt-ui-library';
import 'bt-ui-library/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(BtUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

借助 [babel-plugin-component]()，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```vue
import Vue from 'vue';
import { Country } from 'bt-ui-library';
import App from './App.vue';

Vue.component(ButtCountryon.name, Button);
/* 或写为
 * Vue.use(Country)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json]() 为准）


```
import Vue from 'vue';
import {
  Country
} from 'bt-ui-library';

Vue.use(Country);
```

### 全局配置

在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。按照引入 Element 的方式，具体操作如下：

完整引入 Element：

```
import Vue from 'vue';
import BtUi from 'bt-ui-library';
Vue.use(BtUi, { size: 'small', zIndex: 3000 });
```

按需引入 Element：

```
import Vue from 'vue';
import { Country } from 'bt-ui-library';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Country);
```

按照以上设置，项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。

### 开始使用

至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

### 使用 Nuxt.js

我们还可以使用 [Nuxt.js](https://nuxtjs.org)：

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>







