### 安装

#### npm安装

推荐使用npm安装,它能更好的和[webpack](https://webpack.js.org)打包工具配合使用

<demo-border>
```
npm i element-ui -S
```
</demo-border>

#### CDN

目前可以通过[unpkg.com/element-ui](https://unpkg.com/element-ui)获取到最新版本资源,在页面上引入js和css文件即可开始使用

<demo-border>
```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```
</demo-border>

:::tip
我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

### Hello World

通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。[在线演示](https://codepen.io/ziyoung/pen/rRKYpd)

<iframe height="265" style="width: 100%;" scrolling="no" title="Element demo" src="//codepen.io/ziyoung/embed/rRKYpd/?height=265&theme-id=light&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziyoung/pen/rRKYpd/'>Element demo</a> by hetech
  (<a href='https://codepen.io/ziyoung'>@ziyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手]()。


