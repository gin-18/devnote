---
title: Husky 基本使用
lastUpdated: 2026-03-05 17:58
---

# {{ $frontmatter.title }}

Husky 是一个 git hooks 工具，用于在不同的 git 操作前执行脚本，例如：在提交代码(`git commit`)时执行检查代码的脚本

当在项目中执行 git 操作时，Husky 会执行 `.husky/` 目录下的对应的脚本

## 安装 Husky

```sh
pnpm add --save-dev husky
```

## 初始化 Husky 配置

官方推荐使用 `husky init` 在项目中初始化 Husky 的配置

`husky init` 会在 `.husky/` 中创建一个 `pre-commit` 脚本文件，并在 `package.json` 中更新 `prepare` 脚本

```sh
pnpm exec husky init
```

执行上面的命令，Husky 会在项目中创建 `.husky/` 目录，并在 `package.json` 文件中的 `scirpts` 字段下添加一行 `"prepare": "husky"`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "prepare": "husky" # husky init 添加的对应脚本
}
```

我们可以再看一下 `.husky/` 目录中的内容

```tree
.husky
|-- _
|   |-- applypatch-msg
|   |-- commit-msg
|   |-- h
|   |-- husky.sh
|   |-- post-applypatch
|   |-- post-checkout
|   |-- post-commit
|   |-- post-merge
|   |-- post-rewrite
|   |-- pre-applypatch
|   |-- pre-auto-gc
|   |-- pre-commit
|   |-- pre-merge-commit
|   |-- pre-push
|   |-- pre-rebase
|   `-- prepare-commit-msg
`-- pre-commit
```

* `.husky/-`：是一个目录，存放的是 Husky 默认的一些脚本文件，一般我们不需要去改动这里面的内容

* `.husky/pre-commit`：是一个脚本文件，会在执行 `git commit` 的时候触发这个脚本，这个脚本中可以写入我们需要的内容

Husky 已经默认的在 `.husky/pre-commit` 文件中添加了一行 `pnpm test`，我们可以先使用默认的配置进行测试

我们先在 `package.json` 中添加 `test` 脚本

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "prepare": "husky",
  "test": "echo 'husky works find'" # 打印 husky works find
}
```

当我们在使用 `git commit` 提交代码的时候，就会触发下面的流程：

`git commit` -> `执行 .husky/pre-commit 脚本` -> `执行 pnpm test 命令` -> `执行 package.json 中的 test 脚本` -> `执行 echo 'husky works find' 命令`

## 相关链接

官方文档：[https://typicode.github.io/husky/](https://typicode.github.io/husky/)

GitHub仓库：[https://github.com/typicode/husky](https://github.com/typicode/husky)
