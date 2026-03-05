---
title: lint-staged 基本使用
lastUpdated: 2026-03-05 18:00
---

# {{ $frontmatter.title }}

在 Husky 中，我们知道在执行 `git commit` 的时候会执行 `.husky/pre-commit` 脚本，一般的，我们会在该脚本中执行一些代码检查的命令

但是，随着项目体量的增大，执行一次全量的代码检查的时间也会随之变长，使用 `lint-staged` 可以让我们只针对 `git add` 的代码，或者说只对`存在于暂存区中的代码`进行检查，以缩短代码检查的时间

## 安装 lint-staged

```sh
pnpm add --save-dev lint-staged
```

## lint-staged 配置

`lint-staged` 提供了多种配置方式，可以写在 `package.json` 的 `lint-staged` 字段下，也可以单独使用 `.lintstagedrc`, `lint-staged.config.js` 等配置文件

一般的，使用 `.lintstagedrc` 文件即可，放在项目的根目录中，其语法是 `json` 或 `yaml` 格式

我们可以根据需要针对不同的文件类型进行不同的配置，如下是一些简单的例子：

```json
{
  "*.{js,ts}": [
    "eslint --cache --fix"
  ],
  "*.vue": [
    "prettier --write",
    "eslint --cache --fix"
  ]
}
```

## 与 Husky 一起使用

我们知道 Husky 会在我们执行 `git commit` 的时候去执行 `.husky/pre-commit` 脚本，所以，我们只需要把 `lint-staged` 的执行命令写在 `.husky/pre-commit` 脚本文件中就可以了

```sh
# 在 .husky/pre-commit 文件中添加
pnpm exec lint-staged
```

当我们使用 `git commit` 提交代码的时候，就会触发下面的流程

`git commit` -> `执行 .husky/pre-commit 脚本` -> `执行 pnpm exec lint-staged 命令` -> `lint-staged 读取 .lintstagedrc 配置文件并执行具体的操作` -> `如：使用 eslint 检查代码；使用 prettier 格式化代码`


## 相关链接

GitHub仓库：[https://github.com/lint-staged/lint-staged](https://github.com/lint-staged/lint-staged)
