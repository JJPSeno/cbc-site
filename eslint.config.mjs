// eslint-config.js

import withNuxt from './.nuxt/eslint.config.mjs'
import eslintBaseConfig from './eslint/eslint.js'
import perfectionistConfig from './eslint/perfectionist.js'
import stylisticConfig from './eslint/stylistic.js'
import eslintTsConfig from './eslint/typescript-eslint.js'
import eslintVueConfig from './eslint/vue.js'

export default withNuxt(
  eslintVueConfig,
  eslintBaseConfig,
  eslintTsConfig,
  stylisticConfig,
  perfectionistConfig
)
