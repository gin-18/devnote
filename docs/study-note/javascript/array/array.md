---
title: Array 对象
date: 2025-09-25
---

# {{ $frontmatter.title }}

## Array.isArray()

`Array.isArray()` 方法用于判断参数是否为一个数组，返回值为布尔值，参数为数组返回 `true`，否则返回 `false`

```js
const arr = [1, 2]
const str = 'gin'

Array.isArray(arr) // true
Array.isArray(str) // false
```

## push()

`push()` 方法用于在数组末尾添加一个或多个元素，返回值为新数组的长度

注意，`push()` 方法会改用原数组

```js
const arr = [1, 2]

// res_1 为 3，即 arr 数组的长度，arr 数组现在为 [1, 2, 5]
const res_1 = arr.push(5)


// res_2 为 5，即 arr 数组的长度，arr 数组现在为 [1, 2, 5, 4, 8]
const res_2 = arr.push(4, 8)
```

## pop()

`pop()` 方法用于删除数组的最后一个元素，返回值为被删除的元素

注意，`pop()` 会改变原数组

```js
const arr = [1, 3, 6, 8]

// res 为 8，即数组的最后一个元素，此时的 arr 为 [1, 3, 6]
const res = arr.pop()

arr // [1, 3, 6]
```

## unshift()

`unshift()` 方法用于在数组的头部添加一个或多个元素，返回值为新数组的长度

注意，`unshift()` 会改变原数组

```js
const arr = [2, 3]

// res 为 4，即数组的长度，此时的 arr 为 [0, 1, 2, 3]
const res = arr.unshift(0, 1)

arr // [0, 1, 2, 3]
```

## shift()

`shift()` 方法用于删除数组的第一个元素，返回值为被删除的元素

注意，`shift()` 会改变原数组

```js
const arr = [1, 2, 3]

// res 为 1，即被删除的第一个数组元素，此时的 arr 为 [2, 3]
const res = arr.shift()

arr // [2, 3]
```

## join()

`join()` 方法将传入的参数作为分隔符，将数组元素拼成一个字符串，并返回该字符串，如果不提供参数，默认使用逗号作为分隔符

```js
const arr = [1, 2, 3]

// str_1 为 '1,2,3'
const str_1 = arr.join()

// 以空格为分隔符，str_2 为 '1 2 3'
const str_2 = arr.join(' ')

// 以 | 为分隔符，str_3 为 '1|2|3'
const str_3 = arr.join('|')
```

## reverse()

`reverse()` 方法用于翻转数组元素，返回值为翻转后的数组

注意，`reverse()` 会改变原数组

```js
const arr = [1, 2, 3]

// res 为 [3, 2, 1]，arr 也为 [3, 2, 1]
const res = arr.reverse()
```
