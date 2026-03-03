import dayjs from 'dayjs'
import { createContentLoader } from 'vitepress'

export default createContentLoader('**/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform(rawData) {
    return rawData
      .filter((page) => {
        const excludedPaths = ['/index.md', '/about.md']
        return !excludedPaths.includes(page.url)
      })
      .map((page) => ({
        url: page.url,
        title: page.frontmatter.title || '无标题',
        lastUpdated: page.frontmatter.lastUpdated,
      }))
      .filter((page) => page.lastUpdated) // 只保留有日期的文章
      .sort((a, b) => dayjs(b.lastUpdated).valueOf() - dayjs(a.lastUpdated).valueOf()) // 按日期排序
      .slice(0, 5) // 取最新的5篇
  },
})
