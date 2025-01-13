import type { Root } from 'mdast'
import { toString } from 'mdast-util-to-string'

interface AstroData {
  data: {
    astro: {
      frontmatter: {
        excerpt: string
      }
    }
  }
}

export function remarkExcerpt() {
  return (tree: Root, file: AstroData) => {
    let excerpt = ''
    for (const node of tree.children) {
      if (node.type !== 'paragraph') {
        continue
      }
      excerpt = toString(node)
      break
    }
    file.data.astro.frontmatter.excerpt = excerpt
  }
}
