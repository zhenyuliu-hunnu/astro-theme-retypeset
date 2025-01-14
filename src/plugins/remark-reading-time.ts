import type { Root } from 'mdast'
import type { VFile } from 'vfile'
import { toString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'

export function remarkReadingTime() {
  return function (tree: Root, file: VFile) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)

    // 确保 data.astro.frontmatter 存在
    file.data.astro = file.data.astro || {}
    file.data.astro.frontmatter = file.data.astro.frontmatter || {}

    file.data.astro.frontmatter.minutes = Math.max(1, Math.round(readingTime.minutes))
    file.data.astro.frontmatter.words = readingTime.words
  }
}
