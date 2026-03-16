---
title: Vue 组件基础 - Props
lastUpdated: 2026-03-14 11:12
---

# {{ $frontmatter.title }}

props 主要用于接收父组件传递到子组件的数据

## 基本声明

使用 `defineProps()` 来声明 props

```vue
<script setup>
const props = defineProps(['name'])

console.log(`my name is ${props.name}`)
</script>
```

## 传递细节

Vue 官方推荐使用 `camelCase(小驼峰)` 的形式命名 props；而在传递时，推荐使用与 HTML 属性对齐的方式，即 `kebab-case` 形式

```html
<!-- Article 组件 -->
<!-- 使用 camelCase 形式声明 props 变量 -->
<script setup>
  const props = defineProps({
    articleTitle: String,
  })
</script>

<template>
  <h1>this is {{ props.articleTitle }}</h1>
</template>

<!-- 使用 Article 组件 -->
<!-- 使用组件时通过 kebab-case 的形式传递 props -->
<Article article-title="so far so good" />
```

## 单向数据流

props 的遵循单向绑定的原则，即 props 的值只应该在父组件中被更改，而不应该在子组件中修改 props 的值

```vue
<!-- Profile 子组件  -->
<script setup>
const props = defineProps(['name'])

props.name = 'leo' // ❌ 不应该在子组件中修改 props // [!code error]
</script>

<template>
  <p>my name is {{ props.name }}</p>
</template>

<!-- 父组件 -->
<script setup>
const name = ref('gin')

const changeName = () => {
  name.value = 'amber' // ✅ 只应该在父组件中修改 props
}
</script>

<template>
  <Profile :name="name" />
  <button @click="changeName">change name</button>
</template>
```

## 使用一个对象绑定多个props

使用 `v-bind` 指令可以把一个对象的所有属性当作 props 传递到子组件中

```vue
<script setup>
const person = {
  name: 'gin',
  age: 18,
}
</script>

<template>
  <Profile v-bind="person" />

  <!-- 使用 v-bind 绑定一个对象等价于下面的形式 -->
  <Profile :name="person.name" :age="person.age" />
</template>
```

## props 校验

可以向 `defineProps()` 方法传递一个对象用于声明多个可校验的 props

```js
const props = defineProps({
  title: {
    type: String / ['String', 'Number'], // 类型校验，多类型校验需要写成数组的形式
    required: true, // 必传校验
    default: 'gin' // 设置默认值
})
```

校验的 `type` 可以是以下原生构造函数：

- `String`

- `Number`

- `Boolean`

- `Array`

- `Object`

- `Date`

- `Function`

- `Symbol`

- `Error`

在项目中，为了保证 props 类型的 **准确性** 和 **可维护性**，我们可以对例如：`Function`，`Object` 这些类型做出更具体的说明

```ts
// type.d.ts 文件内容
interface RO {
  result: number;
  data: any;
}

interface ArticleContent {
  content: string;
  description: string;
}

interface CustomProps {
  title: string;
  content: ArticleContent;
  fetchApi: (data: any) => Promise<RO>
}

// props.ts 文件内容
// 将 props 的声明单独写在一个 props.ts 文件中，以便单独维护

// PropType 在 vue 源码中已经声明
import { PropType } from 'vue'

const baseProps = {
  title: {
    type: String as PropType<CustomProps['title']>,
    default: '标题'
  },
  content: {
    // content 具体的约束实际是声明在了 CustomProps 接口的 content 属性
    // CustomProps['content'] 的类型是 ArticleContent 接口
    type: Object as PropType<CustomProps['content']>,
    default: () => ({
      content: '这是文章内容',
      description: '这是文章描述'
    })
  },
  fetchApi: {
    // fetchApi 具体的约束实际是声明在了 CustomProps 接口的 fetchApi 属性
    // CustomProps['fetchApi'] 则是一个函数类型的具体声明 -- 传入 data 参数，返回一个 Promise
    type: Function as PropType<CustomProps['fetchApi']>
  }
}

// Article.vue 组件内容
// 在组件中声明 props
const props = defineProps(baseProps);
```

## 参考链接

Vue 官方文档：[https://cn.vuejs.org/guide/components/props.html#props](https://cn.vuejs.org/guide/components/props.html#props)
