import type { Root } from 'mdast'
import type { VFile } from 'vfile'
import { toString } from 'mdast-util-to-string'

export function remarkExcerpt() {
  return function (tree: Root, file: VFile) {
    const firstParagraph = tree.children.find(node => node.type === 'paragraph')
    const excerpt = firstParagraph ? toString(firstParagraph) : ''
    const frontmatter = (file.data.astro ??= {}).frontmatter ??= {}
    frontmatter.excerpt = excerpt
  }
}
