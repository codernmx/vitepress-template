# 安装

## NPM

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```bash
npm install lcl-test-ui -S
//or
cnpm install lcl-test-ui
//or
yarn add lcl-test-ui
//or
pnpm install lcl-test-ui
```

## CDN
在页面上引入 js 和 css 文件即可开始使用。

```
//目前没有cdn仅做测试
```


## 完整引入


```js
//main.js
import lclUi from 'lcl-test-ui'
import 'lcl-test-ui/dist/style.css'
createApp(App).use(lclUi)

```

