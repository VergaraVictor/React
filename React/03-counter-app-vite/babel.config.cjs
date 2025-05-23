// babel.config.cjs
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }], // or { node: 'current' }
    '@babel/preset-react'
  ],
};