import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DevNote',
  description: 'notes about study and work',

  lang: 'zh-CN',
  locales: {
    '/': {
      label: '简体中文',
      lang: 'zh-CN',
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outlineTitle: '页面内容',

    nav: [
      { text: '学习笔记', link: '/study-note/git/git-stage/git-stage' },
      { text: '工作笔记', link: '/work-note/rebue-component/rebue-form/rebue-form' },
    ],

    sidebar: {
      '/study-note/': [
        {
          text: 'Git',
          collapsed: true,
          items: [
            { text: 'git 暂存', link: '/study-note/git/git-stage/git-stage' },
            { text: 'git 贮藏', link: '/study-note/git/git-stash/git-stash' },
            { text: 'git cherry pick', link: '/study-note/git/git-cherry-pick/git-cherry-pick' },
            { text: 'git 冲突的解决', link: '/study-note/git/git-conflict-resolve/git-conflict-resolve' },
            { text: 'git 标签', link: '/study-note/git/git-tag/git-tag' },
            { text: 'git 远程仓库', link: '/study-note/git/git-remote/git-remote' },
            { text: 'git 的配置项', link: '/study-note/git/git-config/git-config' },
          ],
        },
        {
          text: 'SSH',
          collapsed: true,
          items: [{ text: 'ssh 基本使用', link: '/study-note/ssh/ssh' }],
        },
        {
          text: 'Windows',
          collapsed: true,
          items: [
            { text: 'windows 终端的配置', link: '/study-note/windows/windows-terminal/windows-terminal' },
            { text: 'powershell 的配置', link: '/study-note/windows/powershell/powershell' },
            { text: 'winget 基本使用', link: '/study-note/windows/winget/winget' },
            { text: 'wsl 基本使用', link: '/study-note/windows/wsl/wsl' },
          ],
        },
        {
          text: 'Javascript',
          collapsed: true,
          items: [
            { text: 'JSON 对象', link: '/study-note/javascript/json/json' },
          ],
        },
        {
          text: 'Vue 工程文件',
          collapsed: true,
          items: [
            { text: 'package.json 文件', link: '/study-note/web-front-end/package-json/package-json' },
          ],
        },
        {
          text: 'Web 杂记',
          collapsed: true,
          items: [
            { text: '前后端分离', link: '/study-note/web-dev/separation-of-front-back/separation-of-front-back' },
            { text: '元素拖放', link: '/study-note/web-dev/element-movement/element-movement' },
          ],
        },
        {
          text: 'Docker',
          collapsed: true,
          items: [
            { text: '镜像的基本使用', link: '/study-note/docker/docker-image/docker-image' },
            { text: '容器的基本使用', link: '/study-note/docker/docker-container/docker-container' },
            { text: '仓库的基本使用', link: '/study-note/docker/docker-registry/docker-registry' }
          ],
        },
        {
          text: 'Coding',
          collapsed: true,
          items: [{ text: 'todo comment 代码标签', link: '/study-note/coding/todo-comment/todo-comment' }],
        },
        {
          text: 'Markdown',
          collapsed: true,
          items: [{ text: 'markdown 基本语法', link: '/study-note/markdown/markdown' }],
        },
        {
          text: 'v2ray',
          collapsed: true,
          items: [{ text: '搭建代理服务器', link: '/study-note/v2ray/v2ray' }],
        },
      ],
      '/work-note/': [
        {
          text: 'Rebue Component',
          collapsed: true,
          items: [{ text: 'RebueForm', link: '/work-note/rebue-component/rebue-form/rebue-form' }],
        },
      ],
    },
  },
})
