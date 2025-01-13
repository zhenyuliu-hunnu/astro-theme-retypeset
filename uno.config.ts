import type { ThemeConfig } from './src/types'
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { themeConfig } from './src/config'

const { light, dark }: {
  light: ThemeConfig['color']['light']
  dark: ThemeConfig['color']['dark']
} = themeConfig.color

const cssExtend = {
  h1: {
    'font-size': '3.6rem',
  },
  h2: {
    'font-size': '3rem',
  },
  h3: {
    'font-size': '2.4rem',
  },
  h4: {
    'font-size': '2rem',
  },
  h5: {
    'font-size': '1.8rem',
  },
  h6: {
    'font-size': '1.6rem',
  },
}

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({ cssExtend }),
    presetTheme<object>({
      theme: { dark },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: light,
    fontFamily: {
      title: ['Title-EN', 'Title-RU', 'CN', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      serif: ['EN', 'RU', 'CN', 'Georgia', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      footer: ['Italic-EN', 'Italic-RU', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      cust: ['EarlySummerSerif-Cust', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
  },
  shortcuts: {
    'blog-container': 'max-w-3xl mx-auto px-4',
  },
  rules: [
    // grid-[1_2]-[3_4]
    [/^grid-(\d+|\[.+?\])-(\d+|\[.+?\])$/, ([, rows, cols]) => {
      const isColsBracket = cols.startsWith('[') && cols.endsWith(']')
      const isRowsBracket = rows.startsWith('[') && rows.endsWith(']')
      return {
        'display': 'grid',
        'grid-template-rows': isRowsBracket
          ? rows.slice(1, -1).replace(/_/g, ' ')
          : `repeat(${rows}, 1fr)`,
        'grid-template-columns': isColsBracket
          ? cols.slice(1, -1).replace(/_/g, ' ')
          : `repeat(${cols}, 1fr)`,
      }
    }],
    // (lg:)area-1-2-3-4
    [/^area-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, Xstart, Ystart, Xend, Yend]) => ({
      'grid-area': `${Xstart} / ${Ystart} / ${Xend} / ${Yend}`,
    })],
  ],
})
