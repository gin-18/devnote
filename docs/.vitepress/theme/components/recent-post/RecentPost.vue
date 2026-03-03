<script setup lang="ts">
import dayjs from 'dayjs'
import { data as posts } from './recent-post.data'

const formatDate = (date) => {
  if (!date) return ''
  return dayjs(date).format('YYYY-MM-DD HH:mm')
}

const goToUrl = (url: string) => {
  window.location.href = url
}
</script>

<template>
  <div class="recent-post" v-if="posts.length">
    <div class="title">最近更新</div>
    <ul class="list">
      <li v-for="post in posts" class="list-item" :key="post.url" @click="goToUrl(post.url)">
        <div class="item-title">{{ post.title }}</div>
        <span class="item-update-date">更新时间：{{ formatDate(post.lastUpdated) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scope>
.recent-post {
  .title {
    font-size: 22px;
    font-weight: 600;
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: unset;

    .list-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 12px 16px;
      margin-top: unset;
      border-radius: 6px;
      background: var(--vp-c-bg-soft);

      &:hover {
        cursor: pointer;
        background: var(--vp-c-bg-elv);
      }

      .item-title {
        margin: unset;
        font-size: 16px;
        color: var(--vp-c-text-1);
      }

      .item-update-date {
        font-size: 12px;
        color: var(--vp-c-text-3);
      }
    }
  }
}
</style>
