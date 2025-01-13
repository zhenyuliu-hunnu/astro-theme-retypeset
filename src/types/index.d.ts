export interface ThemeConfig {
  site: {
    title_EN: string
    title_CN: string
    subtitle_EN: string
    subtitle_CN: string
    url: string
    author: string
    favicon: string
    language: string
  }
  theme: {
    color: 'light' | 'dark' | 'auto'
    light: {
      primary: string
      background: string
      grid: string
    }
    dark: {
      primary: string
      background: string
      grid: string
    }
  }
  toc: {
    enable: boolean
    depth: '1' | '2' | '3'
  }
  rss?: {
    enabled: boolean
    follow?: {
      feedId: string
      userId: string
    }
  }
  analytics?: {
    google?: string
    umami?: string
  }
  comment?: {
    waline?: {
      serverURL: string
      emoji?: string[]
      search?: boolean
      imageUploader?: boolean
    }
  }
}
