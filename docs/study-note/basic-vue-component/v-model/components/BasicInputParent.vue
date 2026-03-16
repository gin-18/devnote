<script setup>
import { ref } from 'vue'
import BasicInput from './BasicInput.vue'

const name = ref('gin')
const age = ref(18)

const modifyName = () => {
  name.value = 'amber'
}

const modifyAge = () => {
  age.value = 23
}
</script>

<template>
  <section class="basic-container">
    <div>
      <div class="child">
        <div class="title"><strong>子组件表单绑定的值</strong></div>
        <BasicInput v-model:name="name" v-model:age="age" />
      </div>

      <div>
        <div class="title"><strong>父组件数据的值</strong></div>
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
      </div>
    </div>

    <div class="btn">
      <button @click="modifyName">更改姓名</button>
      <button @click="modifyAge">更改年龄</button>
    </div>
  </section>
</template>

<style scope>
.basic-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
}

.child {
  margin-bottom: 8px;
}

.title {
  margin-bottom: 6px;
}

.btn {
  display: flex;
  gap: 8px;

  button {
    padding: 4px 6px;
    border: 1px solid #000;
    border-radius: 4px;
  }
}
</style>
