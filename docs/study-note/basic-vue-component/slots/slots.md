---
title: Vue 组件基础 - 插槽
lastUpdated: 2026-03-17 15:29
---

# {{ $frontmatter.title }}

如果我们的组件需要接收模板内容，可以在组件内部定义插槽，以提供模板内容的插入位置

例如：我希望 `MyButton` 组件可以在被使用时，传递一些模板内容：

```vue
<template>
  <MyButton>
    <!-- 这一部分的模板，是在组件被使用的时候，由父组件传入的 -->
    <Icon />
    点击
  </MyButton>
</template>
```

```vue
<!-- 组件内部的实现 -->
<script setup>
const onClick = () => {
  console.log('只是点击')
}
</script>

<template>
  <button @click="onClick">
    <!-- 使用 slot 标签预留插槽，当有模板传入时，具体的内容会显示在 slot 的位置 -->
    <slot></slot>
  </button>
</template>
```

## 具名插槽

如果在组件中需要定义多个插槽，那么需要在 `<slot>` 元素上添加 `name` 属性，用于给每个插槽分配一个唯一的标识，以正确每一处要渲染的内容

```vue
<!-- Layout.vue 组件 -->
<!-- 使用 name 属性标记具名插槽 -->
<template>
  <header>
    <!-- 显示头部内容 -->
    <slot name="header"></slot>
  </header>
  <main>
    <!-- 显示主要内容 -->
    <slot name="main"></slot>
  </main>
  <footer>
    <!-- 显示底部内容 -->
    <slot name="footer"></slot>
  </footer>
</template>
```

在使用组件的时候，通过 `#<slot-name>` 的方式，将模板插入对应的插槽中 

```vue
<!-- Parent.vue 父组件 -->
<template>
  <Layout>
    <!-- 将头部模板插入 Layout 的 header 插槽中 -->
    <template #header>
      <div>父组件传入的头部模板</div>
    </template>

    <!-- 将主体模板插入 Layout 的 main 插槽中 -->
    <template #main>
      <div>父组件传入的主体模板</div>
    </template>

    <!-- 将底部模板插入 Layout 的 footer 插槽中 -->
    <template #footer>
      <div>父组件传入的底部模板</div>
    </template>
  </Layout>
</template>
```

## 条件插槽

有时，我们需要根据是否传入了插槽来显隐某些内容，我们可以通过 `$slots` 获得父组件传入的插槽对象，配合 `v-if` 控制模板的显隐

例如：我们在组件内提供了某些默认的模板，在未传入插槽的时候显示默认的模板，传入插槽时，显示传入的插槽模板

```vue
<!-- Child.vue 子组件 -->
<template>
  <!-- 默认模板 -->
  <div v-if="!$slot.content">
    未传入插槽时显示的默认模板
  </div>

  <!-- 传入 content 插槽则显示插槽内容 -->
  <slot v-else name="content"></slot>
</template>
```

```vue
<!-- Parent.vue 父组件 -->
<template>
  <!-- 不传入 content 插槽则默认显示组件内部的内容 -->
  <Child />

  <!-- 这里会显示对应传入的插槽模板内容，不显示组件内部的默认模板 -->
  <Child>
    <template #content>
      <div>这是父组件传入的 content 插槽模板</div>
    </template>
  </Child>
</template>
```

## 作用域插槽

插槽的内容可以访问到父组件的数据作用域，因为插槽是在父组件定义的

```vue
<!-- Parent.vue 父组件 -->
<script setup>
const name = ref('gin')
</script>

<template>
  <!-- 传到子组件中的 name 是父组件作用域的 name -->
  <Child>{{ name }}</Child>
</template>
```

但有时，我们希望插槽的内容同时使用父组件和子组件内的数据

这时，我们需要把子组件内部的数据提供给插槽，只需要在 `<slot>` 元素上添加对应的数据属性，类似 props 的传递方式

```vue
<!-- Child.vue 子组件 -->
<script setup>
const title = ref('我在子组件')
const score = ref(100)
</script>

<template>
  <div>
    <h2>
      <!-- 通过类似 props 的形式将子组件内部的 title 传递给 slot -->
      <slot name="title" :title="title"></slot>
    </h2>

    <span>
      <!-- 通过类似 props 的形式将子组件内部的 score 传递给 slot -->
      <slot name="score" :score="score"></slot>
    </span>
  </div>
</template>
```

```vue
<!-- Parent.vue 父组件 -->
<script setup>
const parentTitle = ref('我在父组件')
const parentScore = ref(60)
</script>

<template>
  <Child>
    <!-- 直接解构子组件传递出来的变量 title -->
    <template #title="{ title }">
      <div>父组件标题：{{ parentTitle }}</div> <!-- 我在父组件 -->
      <div>子组件标题：{{ title }}</div> <!-- 我在子组件 -->
    </template>

    <!-- 用一个变量 obj 接收子组件传递出来的变量 -->
    <template #score="obj">
      <div>父组件分数：{{ parentScore }}</div> <!-- 60 -->
      <!-- 通过 obj.score 访问具体的数据 -->
      <div>子组件分数：{{ obj.score }}</div> <!-- 100 -->
    </template>
  </Child>
</template>
```

## 参考链接

Vue 官方文档：[https://cn.vuejs.org/guide/components/slots.html#slots](https://cn.vuejs.org/guide/components/slots.html#slots)
