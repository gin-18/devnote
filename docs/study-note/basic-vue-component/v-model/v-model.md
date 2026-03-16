---
title: Vue 组件基础 - v-model
lastUpdated: 2026-03-16 11:49
---

<script setup>
import BasicInputParent from './components/BasicInputParent.vue'
</script>

# {{ $frontmatter.title }}

`v-model` 可以在组件上实现数据的双向绑定，即绑定的变量在父组件中的变化会映射到子组件中，该变量在子组件中的变化也会映射到父组件中

## 基本用法

使用 `defineModel()` 声明组件需要实现双向绑定的值

```vue
<!-- MyComponent 子组件 -->
<script setup>
/**
 * 1. 声明具体的绑定的变量名(name, age)
 * 2. defineModel() 第一个参数传入同名字符串
 * 3. defineModel() 第二个参数传入可以传入校验对象
 */ 
const name = defineModel('name', { required: true })
const age = defineModel('age')
</script>

<template>
  <!-- 绑定原生html的 input 标签 -->
  <input v-model="name" />
  <input v-model="age"
</template>
```

```vue
<!-- 父组件 -->
<script setup>
const name = ref('gin')
const age = ref('18')

const modifyName = () => {
  name.value = 'amber'
}

const modifyAge = () => {
  age.value = 12
}
</script>

<template>
  <MyComponent v-model:name="name" v-model:age="age" />

  <button @click="modifyName">更改姓名</button>
  <button @click="modifyAge">更改年龄</button>
</template>
```

上面的代码会渲染成下面的样子：

<BasicInputParent />

* 在父组件中修改 `name` 或 `age` 的值，子组件中绑定的数据会被修改

* 在子组件中修改 `name` 或 `age` 的值，父组件中的值同样会被修改

## 底层机制

使用 `defineModel()` 声明数据的双向绑定，编译器会将其展开为下面的内容：

* 一个名为 `modelValue` 的 props

* 一个名为 `update:modelValue` 的事件

具体的代码如下：

```vue
<!-- Child 子组件 -->
<script setup>
const props = defineProps('modelValue')
const emit = defineEmits(['update:modelValue'])

const onInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <input
    :value="props.modelValue"
    @input="onInput"
  />
</template>
```

父组件会把 `v-model` 编译成

* 使用 `:modelValue` 向子组件传递一个 props

* 使用 `@update:modelValue` 监听子组件的事件，并更新对应的 props 的值

具体代码如下：

```vue
<!-- 父组件 -->
<script setup>
const name = 'gin'

// 监听子组件的 update:modelValue 事件并修改 name
// 因为 name 作为 props 传递到子组件，所以父组件的 name 修改后，子组件的 props.modelValue 也会更新
const handleModelValueUpdate = (e) => {
  name.value = e
}
</script>

<template>
  <Child
    :modelValue="name"
    @update:modelValue="handleModelValueUpdate"
  />
</template>
```

代码的运行情况如下：

* 当父组件修改了 props 的值，对应上面代码的 `name`，则会通过 props 传递到子组件中，子组件的 `props.modelValue` 会更新

* 而在子组件中要修改 `name` 的值，则是会触发 `update:modelValue` 事件，将子组件内的具体值作为参数传递到父组件，在父组件的处理函数中修改 `name` 的值，因为 props 会传递，所以子组件中的 `props.modelValue` 值也会被修改

## 参考链接

Vue 官方文档：[https://cn.vuejs.org/guide/components/v-model.html#component-v-model](https://cn.vuejs.org/guide/components/v-model.html#component-v-model)
