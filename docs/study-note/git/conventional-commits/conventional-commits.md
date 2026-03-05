---
title: Conventional Commits 提交规范
lastUpdated: 2026-03-05 22:21
---

# {{ $frontmatter.title }}

Conventional Commits 提交规范提供了一组简单的规则来创建清晰的提交历史，遵循此规范，便于自动生成 `changelog`

提交规范的结构如下：

```
<type>[optional scope]: <description/subject>     ->     <类型>[可选 作用域]: <描述>
blank line                                               空行
[optional body]                                   ->     [可选 正文]
blank line                                               空行
[optional footer(s)]                              ->     [可选 脚注]
```

* `<type>[option scope]: <description>`：提交信息的 `header`，对应我们平时的提交 `feat(adm): 完成关于用户管理的新增功能`

* `[optional body]`：关于提交的更详细信息

* `[optional footer(s)]`：关于提交的元信息，例如：关联的合并请求(pr)，破坏性变更(BREAKING CHANGE)，每条元信息单独一行

## BREAKING CHANGE(破坏性变更)

`BREAKING CHANGE` 指的是会导致现有 API，功能或行为不兼容的重大变更，这类变更通常需要修改主版本号，并使用 `BREAKING CHANGE` 字样在提交信息中体现

```
feat(component): 多个组件的不兼容更新

BREAKING CHANGE: 将表单组件的getFormData更改为fetchFormData
```

## type(提交类型)

| 类型       | 描述                           |
| ---------- | ----------------------------   |
| `feat`     | 增加新功能                     |
| `fix`      | 修复BUG                        |
| `refactor` | 代码重构                       |
| `test`     | 测试相关变更                   |
| `docs`     | 文档/注释变更                  |
| `chore`    | 依赖更新/脚手架配置修改等      |
| `wip`      | 开发中，未完成但需要提交的情况 |
| `types`    | 类型定义文件变更               |
| `style`    | 代码风格相关，不影响运行结果   |
| `perf`     | 性能优化                       |
| `revert`   | 撤销修改                       |
| `ci`       | 持续集成相关                   |

`feat`， `refactor`，`chore` 这三者使用的一些个人见解

* `feat`：应该用在用户能感知到的变化上，例如：页面按钮操作的修改，表单项的修改

* `refactor`：应该用在用户感知不到的代码重构上，并不增加新功能，例如：函数的抽离，代码的优化

* `chore`：一般用于依赖更新或脚手架配置修改，但有时代码既不是新增功能或重构的时候，就可以使用此类型，例如：表格字段的配置，搜索字段的配置

## 相关链接

官方文档：[https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)

GitHub仓库：[https://github.com/conventional-commits/conventionalcommits.org](https://github.com/conventional-commits/conventionalcommits.org)
