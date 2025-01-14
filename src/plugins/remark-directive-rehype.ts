import type { Node } from 'unist'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

interface DirectiveNode extends Node {
  type: 'containerDirective' | 'leafDirective' | 'textDirective'
  name: string
  attributes?: Record<string, any>
  children: Array<{
    data?: {
      directiveLabel?: boolean
    }
  }>
  data?: {
    hName?: string
    hProperties?: Record<string, any>
  }
}

export function parseDirectiveNode() {
  return (tree: Node) => {
    visit(tree, (node: unknown) => {
      const directiveNode = node as DirectiveNode
      if (
        directiveNode.type === 'containerDirective'
        || directiveNode.type === 'leafDirective'
        || directiveNode.type === 'textDirective'
      ) {
        const data = directiveNode.data || (directiveNode.data = {})
        directiveNode.attributes = directiveNode.attributes || {}

        if (directiveNode.children[0]?.data?.directiveLabel)
          directiveNode.attributes['has-directive-label'] = true

        const hast = h(directiveNode.name, directiveNode.attributes)
        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}
