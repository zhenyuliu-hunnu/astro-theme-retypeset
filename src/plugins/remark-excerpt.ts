import type { Root } from 'mdast'
import type { VFile } from 'vfile'
import { toString } from 'mdast-util-to-string'

export function remarkExcerpt() {
  return function (tree: Root, file: VFile) {
    let excerpt = ''
    for (const node of tree.children) {
      if (node.type === 'paragraph') {
        excerpt = toString(node)
        break
      }
    }

    // 确保 data.astro.frontmatter 存在
    file.data.astro = file.data.astro || {}
    file.data.astro.frontmatter = file.data.astro.frontmatter || {}

    file.data.astro.frontmatter.excerpt = excerpt
  }
}
