---
title: .env 文件和环境变量
lastUpdated: 2026-03-04 15:28
---

<script setup>
import BuildInEnv from './components/BuildInEnv.vue'
</script>

# {{ $frontmatter.title }}

## 环境变量

Vite 在一个特殊的 `import.meta.env` 对象上暴露了以下内建的环境变量，我们可以直接在项目中访问这些变量

* `import.meta.env.MODE`：返回的是一个String，表示应用运行的模式

* `import.meta.env.BASE_URL`：返回的一个String，表示应用部署时的基本 URL，这个属性由 `vite.config.ts` 文件中的 `base` 属性控制

* `import.meta.env.PROD`：返回的一个Boolean，表示应用是否运行在生产环境

* `import.meta.env.DEV`：返回的一个Boolean，表示应用是否运行在开发环境

* `import.meta.env.SSR`：返回的一个Boolean，表示应用是否运行在 server 上

<BuildInEnv />

## `.env` 文件

我们可以在 `.env` 文件中设置自定义的环境变量，并通过 `import.meta.env` 对象来访问这些环境变量，其书写形式为 `KEY=VALUE`，例如：`VITE_NAME=gin`

注意，在 `.env` 文件设置的环境变量必须以 `VITE_` 开头

```bash
# 在 .env 文件中设置 VITE_BASE_FETCH_URL
VITE_BASE_FETCH_URL=http://localhost:8080/api/search

# 在代码中通过 import.meta.env.VITE_BASE_FETCH_URL
# 此时的 fetchUrl 为 http://localhost:8080/api/search
const fetchUrl = import.meta.env.VITE_BASE_FETCH_URL
```

### 命名规则

`.env` 文件通常有以下几种命名：

```sh
# 所有情况下都会加载此文件
.env

# 所有情况都会加载此文件，但该文件会被 git 忽略
.env.local

# 在指定模式下加载此文件
# .env.development 则是在 development 即开发环境中加载
# .env.production 则是在 production 即生产环境中加载
.env.[mode] 

# 在指定模式下加载此文件，但该文件会被 git 忽略
.env.[mode].local
```

一般的，`.env.*.local` 文件应该是本地文件，其中可以包含敏感变量，所以应该被 git 忽略，不应该提交到 git 仓库中


### 加载优先级

通常，指定模式的文件(`.env.development`)会比通用形式的文件(`.env`)的优先级高

```bash
# .env 文件中的 VITE_NAME
VITE_NAME='Gin'

# .env.development 文件中的 VITE_NAME
VITE_NAME='Amber'

# 在代码中通过 import.meta.env.VITE_NAME 访问该变量得到的 name 为 Amber
const name = import.meta.env.VITE_NAME 
console.log(name) // Amber
```

注意，`.env` 文件会在 vite 项目启动时候就加载，改动 `.env` 文件会在重启服务后生效

## HTML 中的环境变量

`import.meta.env` 中的任何属性都可以通过 `%ENV_NAME%` 的特殊语法在 HTML 文件中使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite App</title>
</head>

<body>
  <div id="app"></div>
  <!-- 这里会将 import.meta.env.MODE 的值显示在 div 中 -->
  <div>模式：%MODE%</div>
  <script type="module" src="/src/main.js"></script>
</body>

</html>
```

## 模式

默认情况下

使用 `dev` 命令运行项目，模式为 `development`，vite 会加载 `.env.development` 文件

使用 `build` 命令构建项目，模式为 `production`，vite 会加载 `.env.production` 文件

```json
# package.json 的 scripts 字段内容
"scripts": {
  "dev": "vite",
  "build": "vite build",
}
```

使用 `pnpm` 运行对应的脚本

```bash
pnpm run dev # mode 会是 development

pnpm run build # mode 会是 production
```

## NODE_ENV和模式

`NODE_ENV(process.env.NODE_ENV)` 和 vite 中的模式(Mode)是不同的概念，他们的值由不同的参数控制

| 命令                                                 | NODE_ENV      | Mode          |
| ---------------------------------------------------- | ------------- | ------------- |
| `vite build`                                         | `production`  | `production`  |
| `vite build --mode development`                      | `production`  | `development` |
| `NODE_ENV=development vite build`                    | `development` | `production`  |
| `NODE_ENV=development vite build --mode development` | `development` | `development` |

在上面的命令中可以看出

vite 中的 模式(Mode) 主要由 `dev`，`build` 命令和 `--mode` 参数控制

`NODE_ENV` 的值主要由 `NODE_ENV=[mode]` 变量指定的值控制


