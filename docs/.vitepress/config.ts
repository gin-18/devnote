import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DevNote",
  description: "notes about study and work",

  lang: 'zh-CN',
  locales: {
    '/': {
      label: '简体中文',
      lang: 'zh-CN'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outlineTitle: '页面内容',

    nav: [
      { text: '学习笔记', link: '/study-note/git/git-stage/git-stage' },
      { text: '工作笔记', link: '/work-note/rebue-component/rebue-form/rebue-form' }
    ],

    sidebar: {
      '/study-note/': [
        {
          text: 'Git',
          items: [
            { text: 'git stage', link: '/study-note/git/git-stage/git-stage' },
            { text: 'git stash', link: '/study-note/git/git-stash/git-stash' },
            { text: 'git cherry pick', link: '/study-note/git/git-cherry-pick/git-cherry-pick' },
            { text: 'git conflict resolve', link: '/study-note/git/git-conflict-resolve/git-conflict-resolve' },
            { text: 'git tag', link: '/study-note/git/git-tag/git-tag' },
            { text: 'git remote', link: '/study-note/git/git-remote/git-remote' },
            { text: 'git config', link: '/study-note/git/git-config/git-config' }
          ]
        },
        {
          text: 'Windows',
          items: [
            { text: 'windows terminal', link: '/study-note/windows/windows-terminal/windows-terminal' },
            { text: 'powershell', link: '/study-note/windows/powershell/powershell' },
            { text: 'winget', link: '/study-note/windows/winget/winget' },
            { text: 'wsl', link: '/study-note/windows/wsl/wsl' }
          ]
        },
        {
          text: 'Coding',
          items: [
            { text: 'todo comment', link: '/study-note/coding/todo-comment/todo-comment' },
          ]
        },
        {
          text: 'Markdown',
          items: [
            { text: 'markdown grammar', link: '/study-note/markdown/markdown' },
          ]
        },
        {
          text: 'SSH',
          items: [
            { text: 'ssh', link: '/study-note/ssh/ssh' },
          ]
        },
        {
          text: 'v2ray',
          items: [
            { text: '代理服务器', link: '/study-note/v2ray/v2ray' },
          ]
        }
      ],
      '/work-note/': [
        {
          text: 'Rebue Component',
          items: [
            { text: 'RebueForm', link: '/work-note/rebue-component/rebue-form/rebue-form' }
          ]
        }
      ],
    }
  }
})
