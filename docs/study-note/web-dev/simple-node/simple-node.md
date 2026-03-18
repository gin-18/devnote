---
title: 简单了解 Node.js
lastUpdated: 2026-03-18 14:52
---

# {{ $frontmatter.title }}

在 Node.js 出现之前，JavaScript 代码主要的运行环境是浏览器，依赖浏览器的 JavaScript 引擎，例如：Chrome 的 v8、Firefox 的 SpiderMonkey、Safari 的 JavaScriptCore等

Node.js 的出现使得 JavaScript 代码可以运行在任何安装了 Node.js 的设备上，直接的原因是 Node.js 使用 Chrome 的 v8 引擎解析 JavaScript 代码

## NPM 包管理器

`npm` 作为 Node.js 官方的包管理工具，用于项目中依赖的管理，包括依赖的安装，升级，卸载等

## package.json 文件

在安装了 Node.js 的设备上，使用 `npm init -y` 可以将一个目录初始化为一个 Node.js 的包

`npm init -y` 执行完，我们可以看到在目录下生成了 `package.json` 文件，所以，其实 `package.json` 是 Node.js 项目下的文件，用于记录了这个 Node.js 项目的信息

<video controls>
    <source src="./assets/init.webm" type="video/webm"></source>
</video>

在生成了 `package.json` 文件的目录中，我们就可以手动一步一步的通过安装各种依赖和配置来搭建一个前端项目，例如：vue 项目；所以，一个前端项目也是一个 Node.js 项目

但是，一般我们不会手动的创建一个前端项目，而是通过 Vite 这个工具创建一个前端项目

## Vite 构建工具

创建项目，编译代码，打包构建都是 Vite 这类构建工具的作用

我们可以先简单的将其理解为一个解析器，它可以把我们写的 vue 代码，编译成 html, css, js 代码，这样浏览器才能渲染我们的页面

例如：使用 Vite 创建一个 Vue 作为模板项目

```sh
npm create vue@latest
```

上面的命令会以交互的形式询问我们如何创建我们的项目

<video controls>
    <source src="./assets/vue-create.webm" type="video/webm"></source>
</video>

我们可以先看两个关键的文件

* `package.json`：说明一个 Vite 项目也是一个 Node.js 项目

* `vite.config.ts`：Vite 构建工具的配置文件，用于配置 Vite 的行为，例如：设置 Vite 的根目录，配置插件等

所以，`package.json` 所在的目录是 Node.js 项目的根目录；Vite 的根目录可以在 `vite.config.ts` 文件中配置

## Node.js 中的 __dirname 变量

在 Node.js 环境中，提供了 `__dirname` 这样一个变量，表示当前文件所在**目录的绝对路径**

例如：`vite.config.ts` 文件储存的路径是 `D:\project\front-end\todo\vite.config.ts`，那么在 `vite.config.ts` 文件中访问 `__dirname` 返回的是 `D:\project\front-end\todo`

## Node.js 中的 path 模块

Node.js 提供了 `path` 模块用于操作文件和目录的路径

### resolve 方法

`path` 模块提供了 `resolve` 方法，用于将路径解析为绝对路径

```js
// 假设此文件的路径是 D:\project\node\main.js
import { resolve } from 'path'

// 那么 __dirname 的值就是 D:\project\node
console.log(__dirname)

// resolve 方法将 __dirname 的值后面加上 src
// root_path 就是 D:\project\node\src
const root_path = resolve(__dirname, 'src')
```

## Vue.js

Vue 作为一个前端框架，并不依赖 Node.js 环境运行，而是运行在浏览器环境

在 Vue 的使用方式中也提供了 CDN 的方式引入，在 html 文件中使用 `<script>` 引入了 Vue 框架代码：

```html
<!-- 并可以在 html 文件中写 vue 代码 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

而我们平时写的 `.vue` 文件，浏览器是无法直接运行的，需要借助 Vite 这类构建工具编译为 html、css、js才能被浏览器执行，而 Vite 的运行需要 Node.js 环境

所以，我们平时的项目可以看作先是一个 Node.js 项目，再是一个 Vite 项目，最后是一个 Vue 项目
