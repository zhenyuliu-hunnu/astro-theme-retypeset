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

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetTheme({
      theme: {
        dark: {
          colors: { ...themeConfig.theme.dark },
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: { ...themeConfig.theme.light },
    fontFamily: {
      title: ['Title-EN', 'Title-RU', 'CN', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      serif: ['EN', 'RU', 'CN', 'Georgia', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      footer: ['Italic-EN', 'Italic-RU', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      cust: ['EarlySummerSerif-Cust', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
  },
  shortcuts: {
    example: 'text-5 font-bold lh-7.5 m-0',
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
  preflights: [
    {
      getCSS: () => `
        h1 { font-size: 3.6rem; line-height: 1.75; }
        h2 { font-size: 3rem; line-height: 1.75; }
        h3 { font-size: 2.4rem; line-height: 1.75; }
        h4 { font-size: 2rem; line-height: 1.75; }
        h5 { font-size: 1.8rem; line-height: 1.75; }
        h6 { font-size: 1.6rem; line-height: 1.75; }
      `,
    },
  ],
})
