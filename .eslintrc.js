module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "space-before-function-paren": 0,
    "no-unused-vars": [2, {  
      "vars": "local",
      "args": "none" 
    }],
    "semi": [0],
    "no-multiple-empty-lines": [0, {"max": 100}],
    "no-mixed-spaces-and-tabs": [0],
    "no-multi-spaces": 0,
    "indent":[1,2],
  }
}
