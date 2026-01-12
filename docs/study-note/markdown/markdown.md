# Markdown {#top-title}

Markdown 文档常用于书写项目的 `README.md` 文件和 Github 的 issues 等

## 标题

标题使用 `# ` 开头, 一共分为 1-6 级标题, `#` 的数量代表标题的级别, 效果如下:

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 段落

要创建段落, 使用空行将一行或多行文本分隔, 效果如下:

这是段落一

这是段落二
这是段落二

这是段落三

## 强调

### 粗体(Bold)

使用两个星号 `**` 将文本包裹起来

```markdown
**这是粗体**
```

渲染效果如下:

**这是粗体**

### 斜体(Italic)

使用一个星号 `*` 将文本包裹起来

```markdown
*这是斜体*
```

渲染效果如下:

*这是斜体*

### 粗斜体

使用两个星号 `***` 将文本包裹起来

```markdown
***这是粗斜体***
```

渲染效果如下:

***这是粗斜体***

### 删除线

使用两个波浪线 `~~` 将文本包裹起来

```markdown
~~这是删除线~~
```

渲染效果如下:

~~这是删除线~~

## 引用

引用语法表示引用他人的话语, 在 Github 的 issues 中, 常看到引用上一位回复者的话语

使用大于号 `>` 将文本包裹起来

```markdown
> 这是引用语法
>
> 这是引用语法
```

渲染效果如下:

> 这是引用语法
>
> 这是引用语法

引用也可以嵌套

```markdown
> 这是引用语法
>
> > 这是二层引用语法
```

渲染效果如下:

> 这是引用语法
>
> > 这是二层引用语法

## 列表

### 有序列表

要创建有序列表, 使用 `1.`, `2.`, `3.` 等等开头

```markdown
1. 这是有序列表一
2. 这是有序列表二
3. 这是有序列表三
```

渲染效果如下:

1. 这是有序列表一
2. 这是有序列表二
3. 这是有序列表三

### 无序列表

要创建无序列表, 使用 `-` 或者 `*` 等等开头

```markdown
- 这是无序列表一
- 这是无序列表二
- 这是无序列表三

* 这是无序列表一
* 这是无序列表二
* 这是无序列表三
```

渲染效果如下:

- 这是无序列表一
- 这是无序列表二
- 这是无序列表三

* 这是无序列表一
* 这是无序列表二
* 这是无序列表三

## 代码

使用反引号 ` 将文本包裹起来, 表示该单词或短语为代码

```markdown
`这是代码`
```

渲染效果如下:

`这是代码`

## 分割线

使用三个星号 `---` 表示分割线

```markdown
---
```

渲染效果如下:

---

## 链接

Markdown 的超链接语法为 `[链接文本](链接地址 "链接title")`

对应的 HTML 代码为 `<a href="链接地址" title="链接title">链接文本</a>`

```markdown
这是[bilibili](https://www.bilibili.com "哔哩哔哩")的链接
```

渲染效果如下:

这是[bilibili](https://www.bilibili.com "哔哩哔哩")的链接

使用尖括号 `<url or email>` 可以使地址可以被点击

```markdown
<https://www.bilibili.com>
<email@example.com>
```

渲染效果如下:

<https://www.bilibili.com>

<email@example.com>

## 图片

Markdown 的图片语法为 `![图片alt](图片地址 "图片title")`

对应的 HTML 代码为 `<img src="图片地址" alt="图片alt" title="图片title">`

```markdown
![名蒸蛋柯南](./assets/markdown-normal-img.webp "名蒸蛋柯南")
```

渲染效果如下:

![名蒸蛋柯南](./assets/markdown-normal-img.webp "名蒸蛋柯南")

### 链接图片

Markdown 的链接图片语法为 `[![图片alt](图片地址 "图片title")](链接地址 "链接title")`

```markdown
[![世纪末的魔术师](./assets/markdown-link-img.webp)](./assets/markdown-link-img.webp)
```

渲染效果如下:

[![世纪末的魔术师](./assets/markdown-link-img.webp)](./assets/markdown-link-img.webp)

## 表格

要创建表格, 需要使用三个多个连字符 `---` 创建表头, 并使用管道符 `|` 分隔每列

```markdown
| 表头1     | 表头2     | 表头3     |
| --------- | --------- | --------- |
| 表格内容1 | 表格内容2 | 表格内容3 |
| 表格内容1 | 表格内容2 | 表格内容3 |
```

渲染效果如下:

| 表头1     | 表头2     | 表头3     |
| --------- | --------- | --------- |
| 表格内容1 | 表格内容2 | 表格内容3 |
| 表格内容1 | 表格内容2 | 表格内容3 |

### 表格对齐

表格的对齐方式可以通过在表格连字符 `---` 左侧, 右侧和两侧添加冒号 `:`, 将列中的文对齐到左侧, 右侧或者居中

```markdown
| 表头1     | 表头2     | 表头3     |
| :-------- | :-------: | --------: |
| 表格内容1 | 表格内容2 | 表格内容3 |
| 表格内容1 | 表格内容2 | 表格内容3 |
```

渲染效果如下:

| 表头1     | 表头2     | 表头3     |
| :-------- | :-------: | --------: |
| 表格内容1 | 表格内容2 | 表格内容3 |
| 表格内容1 | 表格内容2 | 表格内容3 |

## 代码块

要创建代码块, 使用三个反引号 ``` 将文本包裹起来, 渲染效果如下:

```
这是代码块
```

在头部的三个反引号后添加对应的语言, 可以获得语法高亮效果, 效果如下:

JavaScript代码

```js
console.log('this is javascript code')
```

C代码

```c
#include <stdio.h>

int main() {
    printf("this is c code");
    return 0;
}
```

##  标题编号

可以为标题添加自定义ID, 以链接到标题, 类似于锚点的效果

要添加自定义ID, 在标题后面添加 `{#自定义ID}`

```markdown
# 标题 {#自定义ID}
```

渲染效果如下:

[回到顶部的标题](#top-title)

## 任务列表

任务列表可以创建带有复选框的项目列表

要创建任务列表, 使用 `- [ ]` 开头, 要选中任务列表中的项目, 使用 `- [x]` 效果如下:

```markdown
- [ ] 第一未选中任务
- [ ] 第二未选中任务
- [x] 第三选中任务
```

渲染效果如下:

- [ ] 第一未选中任务
- [ ] 第二未选中任务
- [x] 第三选中任务

## 使用 Emoji 表情

可以在 Markdown 中使用 Emoji 表情, 语法为 `:表情名:`

可以在这个仓库([emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet))中查看 Emoji 表情

```markdown
:hamburger:
:camera_flash:
:eyes:
:straight_ruler:
```

渲染效果如下:

今天想吃汉堡 :hamburger:

今天要去拍照 :camera_flash:

我的 :eyes: 就是 :straight_ruler:

## 内嵌 HTML 标签

可以在 Markdown 中嵌入 HTML 标签

```markdown
<div style="display: flex; gap: 8px;">
    <label>日期</label>
    <input type="date" />
</div>
```

渲染效果如下:

<div style="display: flex; gap: 8px;">
    <label>日期</label>
    <input type="date" />
</div>

---

下面是一些我常写的效果

### 居中标题

```markdown
<h4 align="center">居中标题</h4>
```

<h4 align="center">居中标题</h4>

### 展开详情

```markdown
<details>
    <summary>展开详情</summary>
    <p>详情内容</p>
    <p>...</p>
</details>
```

<details>
    <summary>展开详情</summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus dolor dui porta orci felis pulvinar interdum tristique. Convallis sociosqu hendrerit neque sollicitudin lacinia tempor aliquet.</p>
    <p>Lorem Ipsum(乱数假文), 简称为 Lipsum, 在印刷或网页设计中常作为<strong>占位文本</strong>使用</p>
    <p>在设计一个页面时, 其中某一区块的文本内容未有具体的内容, 就可以使用 Lorem ipsum 占位, 可以搜索 Lorem Ipsum Generator 获取一个随机的占位文本</p>
</details>

### 键盘元素

```markdown
<kbd>shift</kbd>
<kbd>ctrl</kbd>
...
```

全选: <kbd>ctrl</kbd> + <kbd>a</kbd>

复制: <kbd>ctrl</kbd> + <kbd>c</kbd>

粘贴: <kbd>ctrl</kbd> + <kbd>v</kbd>
