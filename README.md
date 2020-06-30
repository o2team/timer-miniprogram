# timer-miniprogram

小程序定时器管理库，更合理地使用 setTimeout 和 setInterval，在页面显示时重启定时器，页面隐藏时暂停定时器，页面卸载时清除定时器。
写这个库的缘由[详看](https://aotu.io/notes/2020/06/22/timer-miniprogram/)。

## 使用

可参考 example 目录下的示例项目或参照以下流程：

1. 通过 npm 安装

```shell
npm install --save timer-miniprogram
```

安装完成之后在微信开发者工具中点击构建 npm。

2. 导入小程序适配版本的 timer-miniprogram

```js
import { TimerBehavior } from 'timer-miniprogram'
// 在页面中使用
Page({
  behaviors: [TimerBehavior],
  onReady() {
    const timer1 = this.$setTimeout(() => {
      console.log('setTimeout')
    })
    this.$clearTimeout(timer1)

    const timer2 = this.$setInterval(() => {
      console.log('setInterval')
    })
    this.$clearInterval(timer2)
  }
})

// 在组件中使用
Components({
  behaviors: [TimerBehavior],
  ready() {
    const timer1 = this.$setTimeout(() => {
      console.log('setTimeout')
    })
    this.$clearTimeout(timer1)

    const timer2 = this.$setInterval(() => {
      console.log('setInterval')
    })
    this.$clearInterval(timer2)
  }
})
```

## eslint 配置

为了让团队更好地遵守定时器使⽤规范，你还可以配置 eslint 增加代码提示，配置如下：

```
// .eslintrc.js
module.exports = {
    'rules': {
        'no-restricted-globals': ['error', {
            'name': 'setTimeout',
            'message': 'Please use TimerBehavior and this.$setTimeout instead. see the link: https://github.com/o2team/timer-miniprogram'
        }, {
            'name': 'setInterval',
            'message': 'Please use TimerBehavior and this.$setInterval instead. see the link: https://github.com/o2team/timer-miniprogram'
        }, {
            'name': 'clearInterval',
            'message': 'Please use TimerBehavior and this.$clearInterval instead. see the link: https://github.com/o2team/timer-miniprogram'
        }, {
            'name': 'clearTimout',
            'message': 'Please use TimerBehavior and this.$clearTimout  instead. see the link: https://github.com/o2team/timer-miniprogram'
        }]
    }
}
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
