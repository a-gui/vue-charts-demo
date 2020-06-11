## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

【环境准备】
• node -v
• vue --version(安装 npm install -g @vue/cli,若更新 npm update -g @vue/cli)
• 基于 UI 新建项目 vue ui
• 浏览器访问：http://localhost:8000/project/select
• 安装饿了么插件 npm i element-ui -S
安装可视化统计报表 npm i v-charts echarts -S
输出如下意味安装成功：+ echarts@4.8.0，+ v-charts@1.19.0
• 安装路由 npm install vue-router
• 安装 css 样式库一个编写样式（CSS）的样式库
npm install sass-loader node-sass webpack --save-dev
npm install style-loader css-loader --save-dev
• 安装 npm install jade

【备注】
在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。
基于 Vue2.0 和 echarts 封装的 v-charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。
