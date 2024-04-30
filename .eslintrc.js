module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    jquery: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
}
