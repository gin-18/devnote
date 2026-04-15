---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<section class="home-page">
  <Profile class="profile" />
  <RecentPost class="recent-post" />
</section>

<style scope>
.home-page {
  display: flex;
  gap: 8px;
  margin-top: 64px;

  .profile {
    box-sizing: border-box;
    flex: 1;
    padding: 12px;
    border-radius: 6px;
    background: var(--vp-c-bg-soft);
  }

  .recent-post {
    flex: 1;
  }
}
</style>
