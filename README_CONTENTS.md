# 目录结构

```
├─ /.vscode
├─ /build                      <-- build编译过程性输出目录
├─ /dist                       <-- 最终build的输出目录
├─ /node_modules
├─ /out                        <-- dev和build编译过程性输出目录
├─ /resources                  <-- 主进程和preload的公共资源目录
├─ /src
|  ├─ /main                    <-- 主进程开发目录
|  ├─ /preload                 <-- preload开发目录
|  ├─ /renderer                <-- 渲染进程开发目录
|  |  ├─ /api                  <-- api目录
|  |  |  └─ index.js           <-- api库
|  |  ├─ /assets               <-- 全局公用目录
|  |  |  ├─ /fonts             <-- 字体文件目录
|  |  |  ├─ /images            <-- 图片文件目录
|  |  |  └─ /styles            <-- 公用样式文件目录
|  |  |  |  └─ main.scss       <-- 全局公用样式
|  |  ├─ /components           <-- 公共模块组件目录
|  |  |  ├─ /AuthRoute         <-- 路由鉴权模块（示例）
|  |  |  |  └─ index.jsx       <-- 鉴权主文件
|  |  |  └─ ...                <-- 其他模块
|  |  ├─ /hooks                <-- hooks目录(一般存放全局hook)
|  |  |  ├─ /useRouterItem.js  <-- 路由项hook
|  |  |  └─ ...                <-- 其他hook
|  |  ├─ /pages                <-- 路由组件目录
|  |  |  ├─ /Home              <-- home页目录
|  |  |  |  └─ index.jsx       <-- home主文件
|  |  |  ├─ /Login             <-- login页目录
|  |  |  |  └─ index.jsx       <-- login主文件
|  |  |  └─ ...                <-- 其他页面
|  |  ├─ /router               <-- 路由配置目录
|  |  |  ├─ baseRouter.jsx     <-- 静态路由配置文件
|  |  |  └─ index.jsx          <-- 路由入口文件
|  |  ├─ /store                <-- store状态储存目录
|  |  |  ├─ reducers           <-- 状态分发总目录
|  |  |  |  ├─ index.js        <-- 状态分发总入口文件
|  |  |  |  ├─ common.js       <-- 公共模块状态分发文件
|  |  |  |  └─ ...             <-- 其他状态分发文件
|  |  |  └─ index.js           <-- store入口文件
|  |  ├─ /utils                <-- 工具函数目录(一般存放原生方法)
|  |  |  ├─ /request.js        <-- 路由拦截器
|  |  |  └─ ...                <-- 其他工具函数
|  |  ├─ main.jsx              <-- 渲染进程入口文件
|  |  └─ index.html            <-- 渲染进程HTML模板
├─ .editorconfig               <-- IDE配置文件
├─ .eslintignore               <-- 忽略eslint检查的配置文件
├─ .eslintrc.cjs               <-- eslint配置文件
├─ .gitignore
├─ .npmrc                      <-- npm镜像源配置文件
├─ .prettierignore             <-- 忽略prettier代码格式化的配置文件
├─ .prettierrc.yaml            <-- prettier代码格式化配置文件
├─ dev-app-update.yml          <-- 线上更新配置文件
├─ electron-builder.yml        <-- build配置文件
├─ electron.vite.config.js     <-- electron-vite配置文件
├─ package.json
└─ README.md
```
