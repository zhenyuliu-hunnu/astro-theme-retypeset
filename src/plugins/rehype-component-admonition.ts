import type { Element, Properties as HastProperties, Node } from 'hast'
/// <reference types="mdast" />
import { h } from 'hastscript'

interface AdmonitionProperties extends HastProperties {
  'title'?: string
  'has-directive-label'?: boolean
}

/**
 * Creates an admonition component.
 *
 * @param properties - The properties of the component.
 * @param type - The admonition type.
 * @param children - The children elements of the component.
 * @returns The created admonition component as a Hast Element.
 */
export function AdmonitionComponent(
  properties: AdmonitionProperties,
  type: 'tip' | 'note' | 'important' | 'caution' | 'warning',
  children: Node[],
): Element {
  if (!Array.isArray(children) || children.length === 0) {
    return h(
      'div',
      { class: 'hidden' },
      'Invalid admonition directive. (Admonition directives must be of block type ":::note{name="name"} <content> :::")',
    )
  }

  let label: Element | string | null = null

  if (properties && properties['has-directive-label']) {
    const [firstChild, ...restChildren] = children
    children = restChildren

    if (firstChild && firstChild.type === 'element') {
      label = firstChild as Element
      label.tagName = 'div' // Change the tag <p> to <div>
    }
    else {
      label = ''
    }
  }

  return h('blockquote', { class: `admonition bdm-${type}` }, [
    h('span', { class: 'bdm-title' }, label || type.toUpperCase()),
    ...(children as Element[]),
  ] as Element[])
}
