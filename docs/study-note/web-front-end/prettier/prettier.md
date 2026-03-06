---
title: prettier 基本使用
lastUpdated: 2026-03-06 16:00
---

# {{ $frontmatter.title }}

prettier 是一个代码格式化工具，仅用于格式化代码，不具备代码检查功能

## 安装 prettier

```sh
pnpm add --save-dev --save-exact prettier
```

## prettier 配置

常用的 prettier 配置文件有两种，并放入项目的根目录中

* `.prettierrc` 其语法是 `JSON` 或 `YAML`

* `.prettierrc.js` 其语法是 `js` 语法

一般的，使用 `.prettierrc.js` 文件就可以，具体的配置项可以在 [prettier options](https://prettier.io/docs/options) 查看

`.prettierrc.js` 配置文件的基本写法如下：

```js
export default {
  printWidth: 120, // 每行不自动换行的最大宽度
  tabWidth: 4, // 设置制表符的宽度
  semi: false, // 结尾分号
  singleQuote: true, // 是否使用单引号
  trailingComma: "none", // 是否显示尾逗号
  /**
   * 箭头函数单个参数时，括号是否可以省略，
   * always 不能省略 (x) => {}
   * avoid 能省略 x => {}
   */
  arrowParens: "avoid",
  /**
   * 对象两侧是否需要空格
   * true 显示空格 { name: gin }
   * false 不显示空格 {name: gin}
   */
  bracketSpacing: true,
}
```

## prettier 命令行

在项目依赖中安装了 prettier 则可以使用 `pnpm exec prettier` 命令在执行依赖中的 `prettier` 命令

`prettier` 命令的基本使用如下：

```sh
# 执行的项目依赖中的 prettier 命令
pnpm exec prettier [option] [file/dir]

# 如果全局安装了 prettier 则可以直接使用 prettier 命令
prettier [option] [file/dir]
```

常用的一个 option 是 `--write` 表示格式化会的代码会写入文件

```sh
# 格式化
prettier --write main.js
```

## 编辑器插件

一般的，每次我们想要格式化代码都需要去执行命令，在开发中我们可以在编辑器中安装 `prettier` 插件，以在编辑器中使用代码格式化工具

`vscode` 类编辑器可以安装 `prettier` 的官方插件

![prettier-vscode-plugin](./assets/prettier-vscode-plugin.png)

并在编辑器的 `settings.json` 配置文件中添加下面的内容：

```json
# 开启保存时格式化代码
"editor.formatOnSave": true,

# 设置默认的格式化程序为 prettier
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

## 相关链接

官方文档：[https://prettier.io/](https://prettier.io/)

GitHub仓库：[https://github.com/prettier/prettier](https://github.com/prettier/prettier)
