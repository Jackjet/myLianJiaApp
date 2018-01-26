# vueAdmin-template

> A minimal vue admin template with Element UI & axios & iconfont & permission control & lint

**Live demo:** http://panjiachen.github.io/vueAdmin-template

[中文文档](https://github.com/PanJiaChen/vueAdmin-template/blob/master/README-zh.md)

## Build Setup

``` bash

# Clone project
git clone https://github.com/PanJiaChen/vueAdmin-template.git

# Install dependencies
npm install

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

如何修改Mint Ui的默认样式(styles/mymintui.scss)
https://segmentfault.com/a/1190000011647319

search组件重新封装，重新封装后注意api参数需要对应传递进原来的组件
main.js 重新定义覆盖原来组件的样式，引入定义覆盖样式

定义基础ui
解决1像素边框问题
引入mock模拟数据

在axios实例中
respone拦截器需要配置正确的返回值，这里可以根据业务需要进行相应的逻辑处理

可在mock官网查询示例，打开控制台验证所需数据格式是否正确
http://mockjs.com/examples.html#Array

Myheader
无法通过自定义引入样式文件，或者在定义的文件覆盖原来的样式
（特别是布局部分的样式）
只能通过参考原组件重新定义新的组件来引入