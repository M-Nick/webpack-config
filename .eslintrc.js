const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js']
      }
    }
  }
}