# package.json 文件

`package.json` 文件作为项目的重要配置文件，记录了项目的名称，版本，脚本，依赖和其他关键信息

`package.json` 文件中必须包含 `name` 和 `version` 两个属性

关于 `package.json` 文件的配置项可以在 [configuring-npm/package-json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json?v=true) 查看

## name

`name` 属性用于记录项目的名称，这是必填的属性

```json
"name": "project-name"
```

## version

`version` 属性用于记录项目的版本，每次需要发布新版本的时候都需要同步修改该属性的值，这是必填的属性

版本号的格式为：`主版本号.次版本号.修订版本号`，一般团队项目中都有自己的版本号规范，通常的修改规则如下

* 大的功能性改动修改主版本号

* 新增功能或功能变化修改次版本号

* 修复一些bug修改修订版本号

```json
"version": "1.0.0"
```

## type

`type` 属性用于指定项目的模块系统，js 的模块系统有 `CommonJS(CJS)` 和 `ES Module(ESM)` 两种

* `CommonJS(CJS)`: 语法上一般使用 `module.exports` 导出模块，`require` 导入模块

* `ES Module(ESM)`: 语法上一般使用 `export` 导出模块，`import` 导入模块

指定 `type` 属性为 `module` 则使用的是 `ES Module(ESM)` 模块系统，不指定则默认使用 `CommonJS(CJS)`

```json
"type": "module"
```

## scripts

`scripts` 属性用于配置项目可运行的脚本，脚本的内容是一些可运行的命令行工具，例如，下面的代码中，`hello-world` 就是脚本的名称，`echo \"Hello World\"` 就是脚本要执行的命令

可以使用 `pnpm run <script_name>` 来运行某一个脚本，例如，`pnpm run hello-world` 则会运行 `echo \"Hello World\"` 这行命令

我们自己可以配置需要的脚本以方便我们开发

```json
"scripts": {
  "hello-world": "echo \"Hello World\"",
  "dev": "vite",
  "build": "vite build",
  "preview": "vite p review"
}
```

## dependencies

`dependenices` 属性用于记录项目在生产环境中所依赖的包，这一部分的依赖在打包发布到生产环境的时候是仍然需要被依赖的

通过 `npm install <package_name>` 或 `pnpm add <package_name>` 命令安装的依赖会被写入 `dependenices` 中

```json
"dependencies": {
  "vue": "3.5.27",
  "vue": "~3.5.27",
  "vue": "^3.5.27"
}
```

在上面的依赖项中我们可以看到一些依赖的版本号前面有一些修饰符 `~` 和 `^`，其含义如下

* 不带修饰符：即固定版本号，在安装项目依赖的时候会固定安装这个版本的依赖，例如，上面的依赖中就会固定安装版本为 `3.2.27` 的 `vue`

* `~` 修饰符：仅更新修订版本号，意思是如果该依赖修订版本号有更新，则会下载最新的修订版本号，例如，上面的 `vue` 配置为 `~3.5.27`，那么在安装依赖的时候就会安装 `[3.5.27, 3.6.0)` 这个区间内的版本

* `^` 修饰符：仅与主版本号兼容，意思是安装依赖时主版本号不变，次版本号和修订版本号可变，例如，上面的 `vue` 配置为 `^3.5.27`，那么在安装依赖的时候就会安装 `[3.5.27, 4.0.0)` 这个区间内的版本

## devDependencies

`devDependencies` 属性用于记录项目在开发环境中所依赖的包，这一部分的依赖在打包发布到生产环境的时候是不被依赖的

通过 `npm install --save-dev <package_name>` 或 `pnpm add --save-dev <package_name>` 命令安装的依赖会被写入 `devDependenices` 中

例如，`vite` 作为构建工具仅在开发阶段被依赖，所以仅需要将其安装为 `devDependenices`  

```json
"devDependencies": {
  "vite": "^7.3.1"
}
```

## private

`private` 属性设置为 `true`，可以防止将一个项目发布到 npm 中，可以理解为将该项目设置为私有，不可以被发布到 npm 服务器

```json
"private": true
```

## author

`author` 属性表示项目的作者，其值可以是字符串或对象

```json
// 字符串格式
"author": "gin email@example.com"

// 对象格式
"author": {
  "name": "gin",
  "email": "email@example.com"
}
```

## description

`description` 属性用于描述项目，作用是可以在搜索时被发现

```json
"description": "this is a nice project"
```

## keywords

`keywords` 属性用于描述项目的关键字，其值是一个字符串数组

```json
"keywords": ['hello', 'world']
```

## repository

`repository` 属性用于表示项目存放的仓库地址

```json
"repository": "https://github.com/gin/example.git"
```

## license

`license` 属性用于说明项目遵循的协议，常见的协议有 `MIT`，`Apache 2.0`，`GPL v3` 等

```json
"license": "MIT"
```

## 其他依赖配置

某些依赖项的配置也可以写在 `package.json` 文件中，例如，`lint-staged`

### lint-staged

```json
"lint-staged": {
  "**/*.{vue,js,ts}": [
    "eslint --fix"
  ]
},
```
