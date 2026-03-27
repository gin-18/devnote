---
title: pnpm 实现 monorepo
lastUpdated: 2026-03-27 17:10
---

# {{ $frontmatter.title }}

pnpm 提供了 workspace 功能可以让我们方便的 monorepo 方案

## pnpm-workspace.yaml 文件

要使用 pnpm workspace 功能，在项目的根目录需要存在 `pnpm-workspace.yaml` 文件，以配置 workspace

一个常见的使用 pnpm workspace 管理的项目的基本结构如下：

```sh
monorepo # 项目的顶层目录
|-- .git # 只在顶层目录使用 git 管理
|-- package.json # 主包的 package.json 文件
|-- packages
|   |-- project_a
|   |   `-- package.json # 子包 project_a 的 package.json 文件
|   `-- project_b
|       `-- package.json # 子包 project_b 的 package.json 文件
`-- pnpm-workspace.yaml
```

从项目结构看：

* `monorepo` 这个目录是顶层目录了，一般叫做主包，`pnpm-workspace.yaml` 文件就是放在主包中的

* 在 `packages` 目录下存放各个项目的代码，每个项目一般叫做子包

这样的目录结构，我们就可以在顶层目录(主包)，统一管理各个项目(子包)了

### pnpm-workspace.yaml 文件内容

我可以在 `pnpm-workspace.yaml` 文件中通过 `packages` 字段配置哪些目录是 workspace 的子包

```yaml
packages:
  # 使用通配符 * 表示把 packages 目录下的所有目录都当作 workspace 处理
  - "packages/*"

  # 也可以单独写多个目录，这里的配置主要是要知道如何配置 workspace
  # 因为有时候主包中并不是只把项目放在 packages 目录下，而是会根据项目的作用划分不同的目录，例如：common目录存放公用样式或工具函数
  - "packages/project_a"
  - "packages/project_b"
```

## 主包的 package.json 的配置

我们现在将两个 Vue 项目当我们的子包，具体的目录结构如下：

```sh
monorepo
|-- .git
|-- package.json
|-- packages
|   |-- project_a
|   |   |-- README.md
|   |   |-- env.d.ts
|   |   |-- index.html
|   |   |-- package.json
|   |   |-- public
|   |   |-- src
|   |   |-- tsconfig.app.json
|   |   |-- tsconfig.json
|   |   |-- tsconfig.node.json
|   |   `-- vite.config.ts
|   `-- project_b
|       |-- README.md
|       |-- env.d.ts
|       |-- index.html
|       |-- package.json
|       |-- public
|       |-- src
|       |-- tsconfig.app.json
|       |-- tsconfig.json
|       |-- tsconfig.node.json
|       `-- vite.config.ts
`-- pnpm-workspace.yaml
```

现在，我们可以在主包的 `package.json` 文件中配置脚本以启动或构建我们的子包

```json
"scripts": {
  "dev:project_a": "pnpm --filter project_a dev",
  "dev:project_b": "pnpm --filter project_b dev",
  "build:project_a": "pnpm --filter project_a build",
  "build:project_b": "pnpm --filter project_b build"
}
```

`pnpm --filter <子包名称>` 的作用是可以指定子包，而 `<子包名称>` 是子包的 `package.json` 文件中的 `name` 字段，而不是目录的名称

所以，`pnpm --filter project_a dev` 的效果就是执行名为 `project_a` 这个子包的 `dev` 脚本

配置好了启动或构建命令，我们就可以在主包中执行对应的脚本以启动或构建不同的子包了，这样就能达到所以的子包都可以在主包中统一管理的作用了

```sh
# 在主包目录中执行
pnpm dev:project_a # 启动 project_a
pnpm dev:project_b # 启动 project_b

pnpm build:project_a # 构建 project_a
pnpm build:project_b # 构建 project_b
```

### 一行命令启动多个项目

我们可以通过 `concurrently` 这个工具一次性启动多个子包项目

我们需要在主包中安装 `concurrently` 依赖

```sh
# 在主包中执行
# -w 选项的作用是指定依赖安装在主包中
pnpm add --save-dev concurrently -w
```

添加以下的配置到主包的 `package.json` 中：

```json
"scripts": {
  "dev:all": "concurrently \"pnpm --filter project_a dev\" \"pnpm --filter project_b dev\"", // [!code focus]
  "dev:project_a": "pnpm --filter project_a dev",
  "dev:project_b": "pnpm --filter project_b dev"
}
```

<video controls>
    <source src="./assets/pnpm-concurrently.webm" type="video/webm"></source>
</video>

现在，我们就可以通过 `pnpm dev:all` 一次性启动配置了的子包项目了

## 依赖的管理问题

现在在我们的项目中，存在主包和多个子包，那么什么依赖应该被安装在主包，什么依赖应该被安装在子包呢

* 公共依赖，规范类的依赖或项目管理类的依赖安装在主包中，达到使用这些工具统一管理多个子包的目的

  例如：eslint，prettier 这类工具应该安装在主包中

* 子包直接使用的依赖应该显式的声明在子包中，以保证子包的独立性和可移植性

  例如：子包作为 vue 项目或都使用了 lodash 库，那么需要在子包中明白 vue 和 lodash 依赖，这样将来子包独立出去之后也保有所有依赖

### 安装主包依赖

安装主包的依赖则可以加上 `-w` 选项，这样在项目中的任何路径都会将依赖安装在主包中

```sh
# 项目中的任何路径执行都会将 eslint 安装在主包中
pnpm add eslint -w
```

<video controls>
    <source src="./assets/pnpm-add-workspace.webm" type="video/webm"></source>
</video>

### 安装子包依赖

现在我们知道，子包直接使用的依赖要显式的声明，但如果子包很多，是不是每个子包都有手动安装一遍依赖，这样重复操作似乎有点麻烦

pnpm 提供了批量处理命令，可以通过一次命令将依赖添加到所有子包中，只要使用 `pnpm --filter` 就可以指定对应的子包

```sh
pnpm add lodash --filter <包名_1> --filter <包名_2>

# 移除依赖也是同样的方式
pnpm rm lodash --filter <包名_1> --filter <包名_2>

# 如果是所有子包都需要的依赖可以直接使用 -r 选项
pnpm add lodash -r
```

<video controls>
    <source src="./assets/pnpm-add-package.webm" type="video/webm"></source>
</video>

### 首次安装项目依赖

而我们在这类 monorepo 的仓库中，首次安装依赖时只需要在主包目录下运行 `pnpm i`，这样就可以安装所以子包的依赖，而不需要进入每个子包单独安装依赖

<video controls>
    <source src="./assets/pnpm-install.webm" type="video/webm"></source>
</video>

从上面的视频可以看到，我们只在主包目录下运行了 `pnpm i`，但是主包和所有子包的依赖都被安装上了

## 依赖提升问题

在某些项目中，需要将依赖提升至根目录，例如：electron 应用

我们可以在主包目录下创建 `.npmrc` 文件并添加以下内容：

```ini
node-linker=hoisted
```

这样在安装依赖的时候，所有的“无版本冲突”的依赖都会被提升到主包的 `node_modules` 目录下，而不是存放在子包的 `node_modules` 目录下

如果项目中有相同的依赖存在版本冲突，那么对应的依赖仍会被存放在子包的 `node_modules` 目录下

未配置 `node-linker=hoisted` 的项目结构：

```sh
monorepo
|-- node_modules # 主包的 node_modules 目录
|   |-- concurrently -> .pnpm/concurrently@9.2.1/node_modules/concurrently
|   `-- eslint -> .pnpm/eslint@10.1.0/node_modules/eslint
|-- package.json
|-- packages
|   |-- project_a
|   |   |-- README.md
|   |   |-- env.d.ts
|   |   |-- index.html
|   |   |-- node_modules # 子包 project_a 的 node_modules 目录
|   |   |-- package.json
|   |   |-- public
|   |   |-- src
|   |   |-- tsconfig.app.json
|   |   |-- tsconfig.json
|   |   |-- tsconfig.node.json
|   |   `-- vite.config.ts
|   `-- project_b
|       |-- README.md
|       |-- env.d.ts
|       |-- index.html
|       |-- node_modules # 子包 project_b 的 node_modules 目录
|       |-- package.json
|       |-- public
|       |-- src
|       |-- tsconfig.app.json
|       |-- tsconfig.json
|       |-- tsconfig.node.json
|       `-- vite.config.ts
|-- pnpm-lock.yaml
`-- pnpm-workspace.yaml
```

从上面的目录结构可以看出，每个项目的依赖都安装在了各自的 `node_modules` 目录下

配置了 `node-linker=hosited` 的项目结构：

```sh
monorepo
|-- node_modules
|   |-- @esbuild
|   |   `-- linux-x64
|   |-- @eslint
|   |   |-- config-array
|   |   |-- config-helpers
|   |   |-- core
|   |   |-- object-schema
|   |   `-- plugin-kit
|   |-- @eslint-community
|   |   |-- eslint-utils
|   |   `-- regexpp
|   |-- @rolldown
|   |   `-- pluginutils
|   |-- @rollup
|   |   `-- rollup-linux-x64-gnu
|-- package.json
|-- packages
|   |-- project_a
|   |   |-- README.md
|   |   |-- env.d.ts
|   |   |-- index.html
|   |   |-- package.json
|   |   |-- public
|   |   |-- src
|   |   |-- tsconfig.app.json
|   |   |-- tsconfig.json
|   |   |-- tsconfig.node.json
|   |   `-- vite.config.ts
|   `-- project_b
|       |-- README.md
|       |-- env.d.ts
|       |-- index.html
|       |-- package.json
|       |-- public
|       |-- src
|       |-- tsconfig.app.json
|       |-- tsconfig.json
|       |-- tsconfig.node.json
|       `-- vite.config.ts
|-- .npmrc
|-- pnpm-lock.yaml
`-- pnpm-workspace.yaml
```

从上面的项目结构可以看出，项目中的所有依赖都被铺开了放在主包的 `node_modules`，而子包中不存在 `node_modules` 目录，也能说明所有的依赖都提升到了主包下的 `node_modules` 目录中

## 参考链接

pnpm workspace 官方文档：[https://pnpm.io/zh/workspaces](https://pnpm.io/zh/workspaces)
