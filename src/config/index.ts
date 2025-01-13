import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // SITE INFORMATION ---------------------------------------------------------------------------------------- //
  site: {
    // Choose One to Fill In
    title_EN: 'Retypeset', // support English, Spanish, Russian
    title_CN: '重新编排', // supports simplified, traditional Chinese, and Japanese
    // Choose One to Fill In
    subtitle_EN: '', // support English, Spanish, Russian
    subtitle_CN: '再现版式之美', // supports simplified, traditional Chinese, and Japanese
    // Site URL
    url: 'http://localhost:4321/',
    // Author name
    author: 'radishzz',
    // Site Favicon
    favicon: 'https://image.radishzz.cc/image/favicon-round-48px.webp',
    // Site Language
    language: 'zh', // zh | tw | ja | en | es | ru
  },
  // THEME SETTING ------------------------------------------------------------------------------------------- //
  theme: {
    color: 'auto',
    // Light Mode
    light: {
      primary: '#333', // text color
      background: '#FFF', // background color
      grid: '#F3F3F3', // grid lines color
    },
    // Dark Mode
    dark: {
      primary: '#DBDBDB', // text color
      background: '#121212', // background color
      grid: '#1B1B1B', // grid lines color
    },
  },
  toc: {
    enable: true,
    depth: '2',
  },
  rss: {
    enabled: true,
    follow: {
      feedId: '68090849347654656',
      userId: '68014765825824768',
    },
  },
  analytics: {
    // google:
    umami: 'https://analytics.example.com/script.js',
  },
  comment: {
    waline: {
      serverURL: 'https://comment.radishzz.cc',
      emoji: [
        '//unpkg.com/@waline/emojis@1.2.0/bmoji',
        '//unpkg.com/@waline/emojis@1.2.0/weibo',
      ],
      search: false,
      imageUploader: false,
    },
  },
}

export default themeConfig
