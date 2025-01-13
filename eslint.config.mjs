import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    typescript: true,
    astro: true,
    rules: {
      'style/max-len': 'off',
      'no-console': 'warn',
      'unocss/order': 'error',
      'unocss/order-attributify': 'error',
    },
  },
)
