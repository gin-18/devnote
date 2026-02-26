# String 对象

## trim()

移除字符串两端的空白字符（包括空格、制表符、换行等），不修改字符串中间的空白。

返回值：新的字符串（原字符串不变）。

示例：

```javascript
const s = '  \tHello World\n  '
s.trim() // "Hello World"
```

## slice()

根据开始索引和结束索引（结束索引不包含）从字符串中提取子串。支持负数索引（从字符串末尾计数）。如果结束索引省略，则一直到字符串末尾。

签名：`str.slice(beginIndex[, endIndex])`。

示例：

```javascript
const s = 'abcdef'
s.slice(1, 4) // "bcd" (索引1~3)
s.slice(-3) // "def" (从倒数第3个到末尾)
s.slice(2) // "cdef"
```

注意：如果 `beginIndex` 大于 `endIndex`，`slice` 会返回空字符串。

## substring()

与 `slice` 类似，但处理负数和参数顺序的方式不同。

签名：`str.substring(indexStart[, indexEnd])`。

行为要点：

- 任何负数参数会被视为 `0`。
- 如果 `indexStart > indexEnd`，会交换两个参数（即 `substring(4,1)` 等价于 `substring(1,4)`）。

示例：

```javascript
const s = 'abcdef'
s.substring(1, 4) // "bcd"
s.substring(4, 1) // "bcd" (参数会交换)
s.substring(-2, 3) // "abc" (负数视为0)
```

比对：当你需要支持负数索引（从尾部计数）时用 `slice`，当需要参数自动交换时用 `substring`。

## split()

将字符串按照指定的分隔符拆分成数组。分隔符可以是字符串或正则表达式；可以提供 `limit` 限制返回数组长度。

签名：`str.split(separator[, limit])`。

示例：

```javascript
const s = 'a,b,c'
s.split(',') // ["a","b","c"]
'hello'.split('') // ["h","e","l","l","o"]
'a b  c'.split(/\s+/) // ["a","b","c"]
'1,2,3'.split(',', 2) // ["1","2"] (limit)
```

注意：当分隔符为空字符串时，会把字符串拆成字符数组；当找不到分隔符时返回包含原字符串的数组。

## replace()

替换第一个匹配项（当第一个参数是字符串时）或按正则规则替换（当第一个参数是正则时可使用修饰符）。可以传入替换字符串或替换函数。

签名：`str.replace(searchValue, replaceValue)`。

要点：

- 若 `searchValue` 是字符串，则只替换第一个出现的匹配项。
- 若 `searchValue` 是带有 `g` 标志的正则，则替换所有匹配项。
- `replaceValue` 可以是字符串（支持一些特殊替换标记，如 `$&`, `$1` 等）或函数，函数接收匹配文本和捕获组并返回替换文本。

示例：

```javascript
const s = 'apple banana apple'
s.replace('apple', 'pear') // "pear banana apple" (只替换第一个)

s.replace(/apple/g, 'pear') // "pear banana pear" (使用全局正则替换所有)

// 使用捕获组和引用
'John Doe'.replace(/(\w+) (\w+)/, '$2, $1') // "Doe, John"

// 使用函数生成替换值
'10, 20, 30'.replace(/\d+/g, (n) => String(Number(n) * 2)) // "20, 40, 60"
```

## includes()

判断字符串中是否包含指定的子串，返回布尔值。可以提供起始搜索位置 `fromIndex`（默认 0）。

签名：`str.includes(searchString[, fromIndex])`。

示例：

```javascript
const s = 'Hello world'
s.includes('world') // true
s.includes('World') // false (区分大小写)
s.includes('o', 5) // false (从索引5开始查找)
```

用途示例：条件判断、简单查找（比正则在可读性上更直观）。

## toLowerCase() / toUpperCase()

将字符串转换为全部小写或全部大写，返回新的字符串（不修改原字符串）。这两个方法对 ASCII 和大多数 Unicode 字符都有效；对于某些语言环境有特殊的大小写规则（例如土耳其语），可使用 `toLocaleLowerCase()` / `toLocaleUpperCase()` 指定区域。

示例：

```javascript
'Hello WORLD'.toLowerCase() // "hello world"
'Hello world'.toUpperCase() // "HELLO WORLD"

// 本地化示例（通常不需要，除非处理特定语言）
'Istanbul'.toLocaleUpperCase('tr') // 在土耳其语环境下可能有不同规则
```
