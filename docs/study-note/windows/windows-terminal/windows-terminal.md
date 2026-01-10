# Windows终端

官方文档: https://learn.microsoft.com/zh-cn/windows/terminal/

## 配置文件

Windows终端的配置文件为 `setting.json`, 可以以下目录中找到:

* 终端(稳定/常规版本): `%LOCALAPPDATA%\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json`

* 终端(预览版): `%LOCALAPPDATA%\Packages\Microsoft.WindowsTerminalPreview_8wekyb3d8bbwe\LocalState\settings.json`

* <kbd>shift + ctrl + ,</kbd> 打开终端配置文件

## 配色方案

配色方案可以在 `settings.json` 的 `schemes` 字段下进行配置; 主题配色在 `settings.json` 的 `themes` 字段下进行配置

### catppuccin

Github: https://github.com/catppuccin/windows-terminal

`catppuccin` 一共提供4个配色方案, 分别为 `latte`, `frappe`, `macchiato`, `mocha`

![catppuccin](https://github.com/catppuccin/windows-terminal/blob/main/assets/splash.png?raw=true)

**latte**

将以下配置添加到 `settings.json` 的 `schemes` 字段下:

```json
{
  "name": "Catppuccin Latte",

  "cursorColor": "#DC8A78",
  "selectionBackground": "#ACB0BE",

  "background": "#EFF1F5",
  "foreground": "#4C4F69",

  "black": "#5C5F77",
  "red": "#D20F39",
  "green": "#40A02B",
  "yellow": "#DF8E1D",
  "blue": "#1E66F5",
  "purple": "#EA76CB",
  "cyan": "#179299",
  "white": "#ACB0BE",

  "brightBlack": "#ACB0BE",
  "brightRed": "#D20F39",
  "brightGreen": "#40A02B",
  "brightYellow": "#DF8E1D",
  "brightBlue": "#1E66F5",
  "brightPurple": "#EA76CB",
  "brightCyan": "#179299",
  "brightWhite": "#BCC0CC"
}
```

**frappe**

```json
{
  "name": "Catppuccin Frappe",

  "cursorColor": "#F2D5CF",
  "selectionBackground": "#626880",

  "background": "#303446",
  "foreground": "#C6D0F5",

  "black": "#51576D",
  "red": "#E78284",
  "green": "#A6D189",
  "yellow": "#E5C890",
  "blue": "#8CAAEE",
  "purple": "#F4B8E4",
  "cyan": "#81C8BE",
  "white": "#B5BFE2",

  "brightBlack": "#626880",
  "brightRed": "#E78284",
  "brightGreen": "#A6D189",
  "brightYellow": "#E5C890",
  "brightBlue": "#8CAAEE",
  "brightPurple": "#F4B8E4",
  "brightCyan": "#81C8BE",
  "brightWhite": "#A5ADCE"
}
```

**macchiato**

```json
{
  "name": "Catppuccin Macchiato",

  "cursorColor": "#F4DBD6",
  "selectionBackground": "#5B6078",

  "background": "#24273A",
  "foreground": "#CAD3F5",

  "black": "#494D64",
  "red": "#ED8796",
  "green": "#A6DA95",
  "yellow": "#EED49F",
  "blue": "#8AADF4",
  "purple": "#F5BDE6",
  "cyan": "#8BD5CA",
  "white": "#B8C0E0",

  "brightBlack": "#5B6078",
  "brightRed": "#ED8796",
  "brightGreen": "#A6DA95",
  "brightYellow": "#EED49F",
  "brightBlue": "#8AADF4",
  "brightPurple": "#F5BDE6",
  "brightCyan": "#8BD5CA",
  "brightWhite": "#A5ADCB"
}
```

**mocha**

```json
{
  "name": "Catppuccin Mocha",

  "cursorColor": "#F5E0DC",
  "selectionBackground": "#585B70",

  "background": "#1E1E2E",
  "foreground": "#CDD6F4",

  "black": "#45475A",
  "red": "#F38BA8",
  "green": "#A6E3A1",
  "yellow": "#F9E2AF",
  "blue": "#89B4FA",
  "purple": "#F5C2E7",
  "cyan": "#94E2D5",
  "white": "#BAC2DE",

  "brightBlack": "#585B70",
  "brightRed": "#F38BA8",
  "brightGreen": "#A6E3A1",
  "brightYellow": "#F9E2AF",
  "brightBlue": "#89B4FA",
  "brightPurple": "#F5C2E7",
  "brightCyan": "#94E2D5",
  "brightWhite": "#A6ADC8"
}
```

### nord

Github: https://github.com/thismat/nord-windows-terminal

![nord](https://github.com/thismat/nord-windows-terminal/raw/main/screenshot.png?raw=true&t=123)

将以下配置添加到 `settings.json` 的 `schemes` 字段下:

```json
{
  "name": "Nord",

  "foreground": "#D8DEE9",
  "background": "#2E3440",

  "selectionBackground": "#434C5E",
  "cursorColor": "#81A1C1",

  "black": "#3B4252",
  "red": "#BF616A",
  "green": "#A3BE8C",
  "yellow": "#EBCB8B",
  "blue": "#81A1C1",
  "purple": "#B48EAD",
  "cyan": "#88C0D0",
  "white": "#E5E9F0",

  "brightBlack": "#4C566A",
  "brightRed": "#BF616A",
  "brightGreen": "#A3BE8C",
  "brightYellow": "#EBCB8B",
  "brightBlue": "#81A1C1",
  "brightPurple": "#B48EAD",
  "brightCyan": "#8FBCBB",
  "brightWhite": "#ECEFF4"
}
```
