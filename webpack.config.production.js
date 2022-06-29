const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BaseConfig = require('./webpack.config.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = merge(BaseConfig(state = 'production'), {
  mode: 'production',
  plugins: [
    // new CompressionWebpackPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'react-setup-analyzer.html',
      generateStatsFile: true,
      openAnalyzer: false
    })
  ]
});