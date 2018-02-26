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
只能通过参考原组件重新定义新的组件来引入（更好的方法，可参考Historylist组件封装）

Historylist
引入封装本地存储函数sorage
添加搜索历史列表
search
解决原框架组件搜索列表默认就占据整屏高度的问题，在重新封装处解决

search
组件完善，把业务抽象出来，只做基础组件
mock
数据模拟添加支持条件查询
历史搜索通过state状态管理
roomtab
添加条件查询面板
定义的组件名不能和原有的重名，否则会报错

在区域选择组件构建蒙版过程，控制其隐藏或显示遇到难题
1.如果使用props，通过在父组件控制的属性传递给子组件
2.子组件拿到属性从而控制隐藏或显示，但是子组件的其它地方又
  有逻辑需要改变隐藏的属性，使得隐藏的属性不单一，状态没办法统一
  使用computed或者method或者watch方法均不奏效
解决方案
  通过vuex状态管理，在父组件和子组件通过提交mutation统一控制状态树;
   把蒙版抽象出来放到公共的父组件中，子组件不用每个都引用了  
   
search
修复 向外推送的是具体的城市关键词 而不是item（object)
querylist
接口传过来的值默认是字符串类型，需要转为数值类型才能进行逻辑运算，否则会被当成是字符串拼接！！！
解决
在roomlist做进一步封装，
加载更多需要判断是否还要更多数据（在接口已经封装好了）

刷新接口单独分开维护
mock roomlist
接受参数使用obj接收，便于管理，否则调试困难
页数和步长应由前台传递，不在后台定义

price 
抽离选择按钮组件，作为基础组件
selectbutton组件创建
dom 创建类的新增、删除

selectbutton组件创建
完善组件功能，条件通过obj传递
价格区间也应该移到selectbutton去

priceRang组件 和价格标签组件实现联调功能
priceRang组件
价格上下谁大谁小切换

通过状态树state控制条件面板切换打开与否
区域条件和其它三个的条件监听变化 可区分处理
其它三个都是使用了selectbutton组件封装的