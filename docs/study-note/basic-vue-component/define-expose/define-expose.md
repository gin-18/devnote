---
title: Vue 组件基础 - defineExpose
lastUpdated:
---

# {{ $frontmatter.title }}

有时，我们需要在父组件中直接调用子组件内部的属性或方法

我们可以通过 `defineExpose()` 显式的暴露一些组件内部的属性或方法

```vue
<!-- Child.vue 组件-->
<script setup>
const title = ref('这是标题')

const modifyTitle = (param) => {
  title.value = param
}

// 暴露 title 变量和 modifyTitle 方法
defineExpose({
  title,
  modifyTitle
})
</script>

<template>
  <div>{{ title }}</div>
</template>
```

```vue
<!-- Parent.vue 组件 -->
<script setup>
/**
 * 组件实例
 * 可以拿到子组件 defineExpose 出来的 title 属性和 modifyTitle 方法
 */
const childRef = ref(null)

const modifyChildTitle = () => {
  // 调用子组件的 modifyTitle 修改组件内部的 title
  childRef.value.modifyTitle('这是从父组件调用的修改子组件标题的方法')
}

onMounted(() => {
  // 访问子组件 defineExpose 出来的 title 属性
  console.log(childRef.value.title)
})
</script>

<template>
  <Child ref="childRef" />
  <button @click="modifyChildTitle">修改标题</button>
</template>
```
