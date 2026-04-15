<script setup>
import { computed } from 'vue'

const name = 'GIN'
const role = '前端工程师'
const bio = '学习的能力永不褪色'
const tags = ['Vue 3', 'TailwindCSS', 'Linux', 'Docker']
const stats = {
  projects: 18,
  articles: 23,
}

const avatarUrl = computed(() => {
  const encodedName = name.split(' ').join('+')
  return `https://ui-avatars.com/api/?name=${encodedName}&background=4f46e5&color=fff&size=160&bold=true&format=svg`
})

const navigateToGithub = () => {
  const github = 'https://github.com/gin-18'
  window.location.href = github
}
</script>

<template>
  <div class="profile-card">
    <section class="profile-header">
      <img class="avatar" :src="avatarUrl" :alt="`${name}的头像`" />
      <div class="info">
        <h2 class="name">{{ name }}</h2>
        <p class="role">{{ role }}</p>
      </div>
    </section>

    <section class="profile-main">
      <p class="bio">{{ bio }}</p>

      <div class="tags">
        <span class="tag" v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
      </div>
    </section>

    <section class="profile-footer">
      <div class="social-hint">
        <button @click="navigateToGithub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256c0-1.123.404-2.336 1.078-3.144c-.292-.741-.247-2.314.09-2.965c.898-.112 2.111.36 2.83 1.01c.853-.269 1.752-.404 2.853-.404c1.1 0 1.999.135 2.807.382c.696-.629 1.932-1.1 2.83-.988c.315.606.36 2.179.067 2.942c.72.854 1.101 2 1.101 3.167c0 2.763-2.089 4.852-5.098 5.234c.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786c4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1C5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669c.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313c-.247-.607-.517-.966-1.034-1.033c-.27-.023-.359-.135-.359-.27c0-.27.45-.471.898-.471c.652 0 1.213.404 1.797 1.235c.45.651.921.943 1.483.943c.561 0 .92-.202 1.437-.719c.382-.381.674-.718.944-.943"
            />
          </svg>
        </button>
      </div>
      <!-- <div class="stats"> -->
      <!-- <div class="stat-item"> -->
      <!-- <span class="stat-emoji">📁</span> -->
      <!-- <span class="stat-text">{{ stats.projects }} 项目</span> -->
      <!-- </div> -->
      <!-- <div class="stat-divider"></div> -->
      <!-- <div class="stat-item"> -->
      <!-- <span class="stat-emoji">📝</span> -->
      <!-- <span class="stat-text">{{ stats.articles }} 文章</span> -->
      <!-- </div> -->
      <!-- </div> -->
    </section>
  </div>
</template>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
}

/* 头像容器，用于定位状态点 */
.profile-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--vp-c-border);

  .avatar {
    width: 80px;
    border-radius: 6px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .name {
      font-size: 2rem;
      font-weight: 700;
      border-top: none;
      margin: unset;
      padding: unset;
    }

    .role {
      margin: unset;
      padding: unset;
    }
  }
}

.profile-main {
  flex: 1;
  display: flex;
  flex-direction: column;

  .tags {
    display: flex;
    align-items: center;
    gap: 16px;

    .tag {
      padding: 8px 12px;
      border: 1px solid var(--vp-c-border);
      border-radius: 6px;
      color: var(--vp-c-text-1);
      background: var(--vp-c-bg);
    }
  }
}

.profile-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px dashed var(--vp-c-border);

  .social-hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: var(--vp-c-text-3);
  }

  .hint-text {
  }

  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 8px;
    border-radius: 6px;
    background: var(--vp-c-bg-elv);
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--vp-c-text-1);
  }

  .stat-text {
    font-weight: 600;
  }

  .stat-divider {
    width: 1px;
    height: 20px;
    background: var(--vp-c-border);
  }
}
</style>
