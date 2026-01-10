# Git 配置项

## 查看 git 配置

```sh
# 查看全局配置
git config --global --list

# 查看仓库中的配置
git config --list
```

## 重置 git 配置

```sh
git config --global --unset <配置项>

# 例如: 重置 core.editor 配置项
git config --global --unset core.editor
```

## core.editor

`core.editor` 配置项用于设置 git 默认使用的编辑器

```sh
# 编辑器名称可以直接填该编辑器在 shell 中应用的名称, 例如: vscode 填的是 code, neovim 填的是 nvim, helix 填的是 hx, trae 填的是 trae
git config --global core.editor <编辑器名称>
```

## core.autocrlf

在 Windows 中使用 `CRLF` 作为换行符, Linux/MacOS 使用 `LF` 作为换行符

git 会根据操作系统的不同自动设置对应的换行符, 这在要求换行符统一的项目中可能会造成无用的 diff, 或是在严格规定换行符的项目中报错, 所以, 了解 git 换行符机制还是有必要的

`core.autocrlf` 提供了三个可选值:

* true: 提交时转换为 `LF`, 检出分支时转换为 `CRLF`; 意思是在提交代码时 git 会将代码中的换行符转换为 `LF`, 在切换到分支时, git 又会将代码中的换行符转换为 `CRLF`

* input: 提交时转换为 `LF`, 检出分支时不转换

* false: 完全禁止自动转换

可以根据需求自行全局设置该配置项

```sh
git config --global core.autocrlf true/input/false
```

也可以使用 `.gitattributes` 文件进行更精准的控制

```.gitattributes
# java, js, json文件都使用 lf 换行符
*.java text eol=lf
*.js text eol=lf
*.json text eol=lf

# bat, cmd文件都使用 crlf 换行符
*.bat text eol=crlf
*.cmd text eol=crlf

# 图片不转换
*.png binary
*.jpg binary
```

## core.fileMode

在不同的操作系统中对文件权限的处理是不同的, `git clone` 和 `git init` 会探测文件系统以正确处理文件的权限, 但直接从一个平台复制一个仓库到另一个平台, 例如: 将一个仓库从 Windows 复制到 Linux 就会导致文件的权限不同, 引起文件一直处于未暂存的状态

当从其他电脑复制 git 仓库后, 会提示 `old mode 100755 new mode 100644`, 这是由于文件权限发生了变化, 通常是因为不同操作系统(如windows, linux)对文件权限的处理不同

* `100755` 表示文件具有可执行权限

* `100644` 表示文件没有可执行权限

* 跨平台操作可能导致文件权限被修改

配置 git 忽略文件权限变更

```sh
git config core.fileMode false
```
