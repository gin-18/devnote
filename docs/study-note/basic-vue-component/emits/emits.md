---
title: Vue 组件基础 - 事件
lastUpdated: 2026-03-14 17:24
---

# {{ $frontmatter.title }}

**组件事件**主要用于子组件向父组件发送信号或数据

## 声明事件

使用 `defineEmits()` 声明事件

`defineEmits()` 必须在 `<script setup>` 下使用

```vue
<!-- MyButton 子组件 -->
<script setup>
const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button @click="onClick">点击</button>
</template>
```

```vue
<!-- 父组件 -->
<script setup>
const handleButtonClick = () => {
  console.log('子组件的事件触发了')
}
</script>

<template>
  <MyButton @click="handleButtonClick" />
</template>
```

上面代码的函数执行过程：

1. 点击按钮执行子组件中的 `onClick` 方法

2. `onClick` 方法触发子组件声明的 `click` 事件

3. 父组件监听到子组件 `click` 事件被触发，执行 `handleButtonClick` 方法

## 事件参数

我们可以在触发事件的时候携带参数，以实现将子组件内部的数据传递到父组件

```vue
<!-- MyButton 子组件 -->
<script setup>
const emit = defineEmits(['click'])

const param = '这是子组件中的数据'

const onClick = () => {
  emit('click', param) // 将 param 传递至父组件
}
</script>

<template>
  <button @click="onClick">点击</button>
</template>
```

```vue
<!-- 父组件 -->
<script setup>
let newParam = void 0

// 父组件接受子组件传递的 param 参数
const handleButtonClick = (param) => {
  newParam = param
  console.log(`子组件的事件触发了，${param}`)
}
</script>

<template>
  <MyButton @click="handleButtonClick" />
</template>
```

上面代码的函数执行过程即数据流向：

1. 点击按钮执行子组件中的 `onClick` 方法

2. `onClick` 方法触发子组件声明的 `click` 事件，`emit('click', param)` 携带 `param` 的值传递到父组件

3. 父组件监听到子组件 `click` 事件被触发，并在处理函数中接受子组件的参数，执行 `handleButtonClick` 方法

## 事件校验

如果项目中使用的是 `<script setup lang="ts>"`， 即在项目中使用了 TypeScript，也可以使用纯类型标注来声明触发的事件

```vue
<!-- MyButton 子组件 -->
<script setup lang="ts">
const emit = defineEmits<
  (e: 'click', param: string) => void
>()

const onClick = () => {
  // 因为click事件在声明的时候规定了参数，所以调用时需要传参
  emit('click', '这是click事件规定的参数')
}
</script>

<template>
  <button @click="onClick">点击</button>
</template>
```

## 参考链接

vue 官方文档：[https://cn.vuejs.org/guide/components/events.html#component-events](https://cn.vuejs.org/guide/components/events.html#component-events)
