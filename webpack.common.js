const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@':  path.join(__dirname, 'src'),
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}