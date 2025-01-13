export interface ThemeConfig {

  site: {
    title: string
    subtitle: string
    description: string
    author: string
    url: string
    favicon: string
  }

  color: {
    mode: 'light' | 'dark'
    light: {
      primary: string
      backgroundStart: string
      backgroundEnd: string
    }
    dark: {
      primary: string
      backgroundStart: string
      backgroundEnd: string
    }
  }

  global: {
    language: string
    font: string
    rss: boolean
    toc: boolean
  }

  comment?: {
    waline?: {
      serverURL?: string
      emoji?: string[]
      search?: boolean
      imageUploader?: boolean
    }
  }

  seo?: {
    twitter?: string
    meta?: {
      google?: string
      bing?: string
      baidu?: string
    }
    link?: string
    googleAnalyticsID?: string
    umamiAnalyticsID?: string
    follow?: {
      feedID?: string
      userID?: string
    }
  }

  footer: {
    linkA: {
      name: string
      url: string
    }
    linkB: {
      name: string
      url: string
    }
    linkC: {
      name: string
      url: string
    }
  }
}

export default ThemeConfig
