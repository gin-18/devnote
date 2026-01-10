# WinGet

微软文档: https://learn.microsoft.com/zh-cn/windows/package-manager/winget/

winget 类似于 npm, homebrew, apt 等等这类软件包管理工具, 常用于管理 Windows 的软件包

## 基本使用

### help 命令

一般命令行工具都会提供一个 `--help` 或 `-h` 参数来显示帮助信息, 例如:

`winget --help` 命令用于显示关于 winget 命令的帮助信息

`git --help` 命令用于显示关于 git 命令的帮助信息

`--help` 参数也可以查看具体命令的帮助信息, 例如:

`winget install --help` 命令用于显示关于 `winget install` 命令的帮助信息

`git branch --help` 命令用于显示关于 `git branch` 命令的帮助信息

### search 命令

`winget search <appName>` 命令用于搜索软件包, 命令会返回包含了 `appName`  的所有可用软件包

例如, 下面的命令会搜索包含 `vscode` 的所有可用软件包

```powershell
winget search vscode
```

![winget_search_vscode](https://learn.microsoft.com/zh-cn/windows/package-manager/winget/images/search.png)

### install 命令

`winget install <appName>` 命令用于安装软件包

软件包必须是具体字符串, 一般使用软件包的 ID 即可

例如, 下面的命令会安装 `vscode` 软件包

```powershell
# Microsoft.VisualStudioCode 这个字符串就是 winget search vscode 查询出来的 Microsoft Visual Studio Code 的 ID
winget install Microsoft.VisualStudioCode
```

使用 `--location` 或 `-l` 参数可以指定软件包的安装目录

```powershell
# 将 vscode 安装到 D:\Applications\VSCode
winget install Microsoft.VisualStudioCode -l D:\Application\VSCode
```

### list 命令

`winget list` 命令用于列出已安装的软件包

### show 命令

`winget show <appName>` 命令用于显示软件包的详细信息

例如, 下面的命令会显示 `vscode` 软件包的详细信息

```powershell
winget show Microsoft.VisualStudioCode
```

![winget_show_vscode](https://learn.microsoft.com/zh-cn/windows/package-manager/winget/images/show.png)

### uninstall 命令

`winget uninstall <appName>` 命令用于卸载软件包

例如, 下面的命令会卸载 `vscode` 软件包

```powershell
winget uninstall Microsoft.VisualStudioCode
```

### upgrade 命令

`winget upgrade` 命令用于升级已安装的软件包

例如, 下面的命令会升级 `vscode` 软件包

```powershell
winget upgrade Microsoft.VisualStudioCode
```
