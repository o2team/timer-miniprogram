# timer-miniprogram

小程序定时器管理库，更合理地使用 setTimeout 和 setInterval，在页面显示时重启定时器，页面隐藏时暂停定时器，页面卸载时清除定时器

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
```

## License

  
MIT License

Copyright (c) 2020 AOTU Labs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
