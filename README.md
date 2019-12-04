# zhihu

## 需要node环境

## 下载依赖模块
npm install

### 启动项目
npm run serve

### 打包发布
npm run build



#### JSON文件配置项
- public/templateJson/index.json
- json文件内为页面配置项：

页面背景颜色： "background-color":"",  
页面背景图：   "background-url":"",
页面模块数组： "templates":[]
    
    页面模块内参数：{}
          

###### 项目对vant组件源码有所修改 
- 组件路径  修改vant/es/index-bar
- props 添加 activeindex  
- watch 监听 activeindex  触发  scrollToElement
- scrollToElement 函数入参兼容直接跳转到 index

