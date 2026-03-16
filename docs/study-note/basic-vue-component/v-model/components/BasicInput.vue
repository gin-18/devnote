<script setup>
const name = defineModel('name')
const age = defineModel('age')
</script>

<template>
  <section>
    <div class="first">
      <span>姓名: </span>
      <input v-model="name" />
    </div>
    <div>
      <span>年龄: </span>
      <input v-model="age" />
    </div>
  </section>
</template>

<style scope>
input {
  border: 1px solid #000;
  border-radius: 4px;
}

.first {
  margin-bottom: 8px;
}
</style>
