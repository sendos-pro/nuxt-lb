module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
  'html'
  ],
  // add your custom rules here
  rules: {
    indent: 0
  },
  globals: {}
}
