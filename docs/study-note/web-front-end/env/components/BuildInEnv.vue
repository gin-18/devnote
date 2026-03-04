<script setup lang="ts">
const mode = import.meta.env.MODE
const baseUrl = import.meta.env.BASE_URL
const isProd = import.meta.env.PROD
const isDev = import.meta.env.DEV
const isSSR = import.meta.env.SSR
</script>

<template>
  <div><strong>本站点的内建环境变量</strong></div>
  <ul>
    <li>运行模式(import.meta.env.MODE): {{ mode }}</li>
    <li>基础URL(import.meta.env.BASE_URL): {{ baseUrl }}</li>
    <li>是否为生产环境(import.meta.env.PROD): {{ isProd }}</li>
    <li>是否为开发环境(import.meta.env.DEV): {{ isDev }}</li>
    <li>是否运行在服务器(import.meta.env.SSR): {{ isSSR }}</li>
  </ul>
</template>
