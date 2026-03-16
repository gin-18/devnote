---
title: Vue 组件基础 - 透传 Attributes
lastUpdated: 2026-03-16 15:24
---

# {{ $frontmatter.title }}

对于一些未被声明为 props，emits，v-model类型的属性，会传递到组件内部的根元素上，常见的例子是 `class`，`style` 这些属性

```vue
<!-- Child.vue 子组件 -->
<template>
  <button>点击</button>
</template>
```

```vue
<!-- Parent.vue 父组件 -->
<template>
  <Child class="parent-btn" />
</template>
```

上面的代码，在使用 `Child` 组件的时候，直接添加了 `class` 属性，其最终的DOM渲染如下：

```html
<!-- 在 `Parent` 父组件添加的 `class` 会透传到 `Child` 子组件的 `button` 元素上 -->
<button class="parent-btn">点击</button>
```

## 对 class 与 style 的合并

如果组件内已经有了 `class` 或 `style` 属性，那么在父组件传入的 `class` 或 `style` 会被合并到子组件内部的 `class` 或 `style`

```vue
<!-- Child.vue 子组件 -->
<template>
  <button class="child-btn">点击</button>
</template>
```

```vue
<!-- Parent.vue 父组件 -->
<template>
  <Child class="parent-btn" />
</template>
```

上面的代码，最终的DOM渲染如下：

```html
<!-- Parent 组件传递的 class 属性合并到了 Child 组件的 class 属性 -->
<button class="parent-btn child-btn">点击</button>
```

## 多根元素的 Attributes 继承

有时，组件模板中存在多个根元素，这样的情况，不能实现自动 Attributes 透传行为

```vue
<template>
  <header></header>
  <main></main>
  <footer></footer>
</template>
```

像上面的组件模板中存在多个根元素，自动的 Attributes 透传行为不能知道是绑定在 `header`，`main` 或 `footer` 元素上

我们可以使用 `$attrs` 显式的将 透传 Attributes 绑定到指定的元素上

```vue
<template>
  <header></header>
  <main v-bind="$attrs"></main>
  <footer></footer>
</template>
```

上面的模板中，使用 `$attrs` 将透传 Attributes 绑定到了 `main` 元素上，那么父组件传递的属性就会作用做 `main` 元素上

## 在 Javascript 中访问透传 Attributes

如果我们需要在 js 代码中访问透传 Attributes，则可以在 `<script setup>` 中使用 `useAttrs()` 访问一个组件的所有透传 Attributes

```vue
<script setup>
import { useAttrs } from 'vue'

// attrs 变量会获得所有透传的 Attributes
const attrs = useAttrs()
</script>
```

## 参考链接

Vue 官方文档：[https://cn.vuejs.org/guide/components/attrs.html#fallthrough-attributes](https://cn.vuejs.org/guide/components/attrs.html#fallthrough-attributes)
