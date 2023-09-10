module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }], "module:metro-react-native-babel-preset"],
    plugins: [
      'react-native-reanimated/plugin',
      'nativewind/babel',
      '@babel/plugin-proposal-export-namespace-from'
    ],
  }
}
