# PowerShell

微软文档: https://learn.microsoft.com/zh-cn/powershell/scripting/how-to-use-docs?view=powershell-7.5

## cmdlet

PowerShell 命令成为 `cmdlet`, 读作(command-let)

PowerShell 使用"动词-名词"的方式来命名 cmdlet, 例如 `New-Item` 是创建一个新的文件或文件夹的 cmdlet; `Stop-Computer` 是关闭电脑的 cmdlet 等等

## Tab 键补全

PowerShell 使用 Tab 键来补全命令和参数, 在键入部分命令或参数的时候, Tab 键可以自动补全命令和参数

![powershell_tab](./assets/tab-menu-complete.gif)

## PSReadLine 预测器

预测 IntelliSense 功能根据 PSReadLine 历史记录中的项提供完整命令建议

最新版的 PSReadLine 2.2.6 默认开启预测功能

**安装最新版的 PSReadLine**

```powershell
Install-Module -Name PSReadLine -Repository PSGallery -Force
```

在开启了 IntelliSense 功能的 PowerShell 会话中, 键入命令的时候会得到命令的预测建议

![predictor_inline](./assets/predictor-inline-1.png)

在默认的 `InLineView` 模式下, 按下 <kbd>右键头</kbd> 接受预测建议

ps: 下面是在我的 Linux 下的演示, 不过是一样效果  :smile_cat:

![accpet_suggestion](./assets/accpet_suggestion.gif)

PSReadLine 还提供了 `ListView` 的建议模式, 按下 <kbd>F2</kbd> 进入该模式

![predictor_list](./assets/predictor-listview-1.png)

## 配置

`$PROFILE` 这个环境变量指向当前的 PowerShell 配置文件, 这个文件会在每次启动 PowerShell 的时候加载, 所以可以在这个文件中写入脚本进行配置

ps: `$HOME` 这个环境变量指向当前用户的家目录
