---
title: Date 对象
---

<script setup>
import dayjs from 'dayjs'
</script>

# {{ $frontmatter.title }}

`Date` 对象是原生的 Javascript 时间库，不过，一般在项目中会引入 `Day.js` 或 `Moment.js` 第三方时间库，所以，这里只记录 `Day.js` 和 `Moment.js` 这两个时间库的使用

## Day.js

### 当前时间

直接调用 `dayjs()` 会返回一个包含当前日期和时间的Day.js对象

* `dayjs()`： {{ dayjs() }}

### 解析字符串

向 `dayjs()` 函数传入 `ISO 8601` 格式的字符串，返回一个Day.js对象实例

* `dayjs('2025-10-25 16:18')`：{{ dayjs('2025-10-25 16:18') }}

* `dayjs('2024/03/27 15:49')`：{{ dayjs('2024/03/27 15:49') }}

### 解析时间戳

向 `dayjs()` 函数传入时间戳(必须是数值类型)，返回一个Day.js对象实例

* `dayjs(1772634030529)`：{{ dayjs(1772634030529) }}

* {{ dayjs().year() }}

* {{ dayjs().year(2024).year() }}

### 获取年，月，日，周，时，分，秒

使用 `year()`，`month()`，`date()`，`day()`，`hour()`，`minute()`，`second()` 这些方法可以分别获取Day.js对象的年，月，日，周，时，分，秒

* `dayjs('2025-05-20 16:18:17').year()`：{{ dayjs('2025-05-20 16:18:17').year() }}

* `dayjs('2025-05-20 16:18:17').month()`：{{ dayjs('2025-05-20 16:18:17').month() }}

* `dayjs('2025-05-20 16:18:17').date()`：{{ dayjs('2025-05-20 16:18:17').date() }}

* `dayjs('2025-05-20 16:18:17').day()`：{{ dayjs('2025-05-20 16:18:17').day() }}

* `dayjs('2025-05-20 16:18:17').hour()`：{{ dayjs('2025-05-20 16:18:17').hour() }}

* `dayjs('2025-05-20 16:18:17').minute()`：{{ dayjs('2025-05-20 16:18:17').minute() }}

* `dayjs('2025-05-20 16:18:17').second()`：{{ dayjs('2025-05-20 16:18:17').second() }}

## Moment.js
