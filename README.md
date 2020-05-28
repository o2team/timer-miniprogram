# timer-miniprogram

小程序定时器管理库，更合理地使用 setTimeout 和 setInterval

## 使用

可参考 example 目录下的示例项目或参照以下流程：

1. 通过 npm 安装

```shell
npm install --save timer-miniprogram
```

安装完成之后在微信开发者工具中点击构建 npm。

2. 导入小程序适配版本的 timer-miniprogram

```javascript
import { TimerBehavior } from 'timer-miniprogram'
// 在页面中使用
Page({
  behaviors: [TimerBehavior],
  onReady() {
    this.$setTimeout(() => {
      console.log('setTimeout')
    })
    this.$setInterval(() => {
      console.log('setTimeout')
    })
  }
})

// 在组件中使用
Components({
  behaviors: [TimerBehavior],
  ready() {
    this.$setTimeout(() => {
      console.log('setTimeout')
    })
    this.$setInterval(() => {
      console.log('setTimeout')
    })
  }
})

