---
title: commitlint 基本使用
lastUpdated: 2026-03-06 09:13
---

# {{ $frontmatter.title }}

`commitlint` 用于规定 `git commit` 的提交信息的规范，例如：校验是否带有 `feat`，`refactor` 等其他规则的校验

一般的，提交信息需要遵循 Conventional Commits 规范

## 安装 commitlint

```sh
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

## commitlint 配置

一般的，我们使用 `commitlint.config.js` 作为 `commitlint` 的配置文件，放在项目的根目录中

下面是 `commitlint.config.js` 最基本的配置，我们可以在其中添加我们自己的配置

```js
/** @type {import("@commitlint/types").UserConfig} */
export default {
  // 继承 conventional commits 的默认规则
  extends: ["@commitlint/config-conventional"],
  // 其他配置写在下面，主要的是 rules 字段下的配置
  rules: {
    // 可以在下面的地址查看所有的 rules 配置项
    // https://commitlint.js.org/reference/rules.html
  }
}
```

### Rules 字段的配置规则

每个配置项的值是一个 `数组`，其中包含3个元素(`[level, applicable, value]`)，其元素的含义如下：

* level：表示级别，取 `[0,2]` 这个区间的值
  * `0`： 表示禁用该规则
  * `1`： 表示视为警告，违反时会提示，但不会阻止提交
  * `2`： 表示视为错误，违反时提交失败

* applicable： 表示反转规则，取 `always|never` 其中一个值
  * `always`： 表示必须满足该条件
  * `never`： 表示禁止出现该情况

* value：表示该配置项的值

```js
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [2, "never"], // [!code focus]
    "header-max-length": [1, "always", 72] // [!code focus]
  }
}
```

上面配置两项其含义如下：

* `"type-empty": [2, "never"]`：`type-empty` 表示类型为空，`2` 表示类型不为空时报错，`never` 表示条件反转，即类型不能为空，所以，此条配置的效果应该是 `类型为空时提交会报错`
  其实读法应该这样会比较好理解：`never type-empty 2`

* `"header-max-length": [1, "always", 72]`：`header-max-length` 表示提交信息头部的最大长度，`1` 表示超出最大长度会警告，`always` 则不反转，`72` 表示将最大长度设置为72字符长度

## 与 Husky 一起使用

要在 Husky 中使用 `commitlint`，需要创建 `.husky/commit-msg` 脚本，在其中写入下面的内容：

```sh
pnpm exec commitlint --edit "$1"
```

当我们使用 `git commit` 提交代码时，会触发下面的流程

`git commit` -> `执行 commit-msg 脚本` -> `执行 pnpm exec commitlint --edit "$1" 命令` -> `commitlint 根据其 commitlint.config.js 配置文件校验提交信息`

## 相关链接

官方文档：[https://commitlint.js.org/](https://commitlint.js.org/)

GitHub仓库：[https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)
