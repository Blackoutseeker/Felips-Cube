module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          root: ['.'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@router': './src/router',
            '@utils': './src/utils',
            '@services': './src/services',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@models': './src/models'
          }
        }
      ]
    ]
  }
}
