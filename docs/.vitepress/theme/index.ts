// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@catppuccin/vitepress/theme/macchiato/blue.css'
import { inject } from '@vercel/analytics'
import Profile from './components/profile/Profile.vue'
import RecentPost from './components/recent-post/RecentPost.vue'
// import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Profile', Profile)
    app.component('RecentPost', RecentPost)

    // vercel analysis
    if (typeof window !== 'undefined') {
      inject()
    }
  },
} satisfies Theme
