import type { Element, Properties as HastProperties, Node } from 'hast'
import { h } from 'hastscript'

interface AdmonitionProperties extends HastProperties {
  'title'?: string
  'has-directive-label'?: boolean
}

type AdmonitionType = 'tip' | 'note' | 'important' | 'caution' | 'warning'

const ADMONITION_CLASS_PREFIX = 'bdm-'
const DEFAULT_ERROR_MESSAGE = 'Invalid admonition directive. (Admonition directives must be of block type ":::note{name="name"} <content> :::")'

export function AdmonitionComponent(
  properties: AdmonitionProperties,
  type: AdmonitionType,
  children: Node[],
): Element {
  if (!Array.isArray(children) || children.length === 0) {
    console.warn('Invalid admonition directive: empty or invalid children')
    return h('div', { class: 'hidden' }, DEFAULT_ERROR_MESSAGE)
  }

  let label: Element | string | null = null

  if (properties && properties['has-directive-label']) {
    const [firstChild, ...restChildren] = children
    children = restChildren

    if (firstChild && firstChild.type === 'element') {
      label = firstChild as Element
      label.tagName = 'div'
    }
    else {
      label = ''
    }
  }

  return h('blockquote', { class: `${ADMONITION_CLASS_PREFIX}${type}` }, [
    h('span', { class: 'bdm-title' }, label || type.toUpperCase()),
    ...(children as Element[]),
  ] as Element[])
}
