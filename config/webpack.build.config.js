const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssExtractPlugin = require('./webpack/plugins/mini-css-extract-plugin');
const SVGSpritePlugin = require('./webpack/plugins/svgspritemap-plugin');
const ImageminWebpPlugin = require('./webpack/plugins/imagemin-webp-webpack-plugin');
const ImageminPluginLossless = require('./webpack/plugins/imagemin-webpack-lossless');
const ImageminPluginLossy = require('./webpack/plugins/imagemin-webpack-lossy');
const copyFavicons = require('./webpack/plugins/copy-favicons');
const css = require('./webpack/rules/css');
const js = require('./webpack/rules/js');
const images = require('./webpack/rules/images');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  new CleanWebpackPlugin(),
  CssExtractPlugin(),
  ImageminWebpPlugin(),
  ImageminPluginLossless(),
  ImageminPluginLossy(),
  copyFavicons(`${baseWebpackConfig.externals.paths.src}/favicons`),
  SVGSpritePlugin(process.env.NODE_ENV, `${baseWebpackConfig.externals.paths.src}/images/sprite`),
];

const buildWebpackConfig = merge([
  baseWebpackConfig,
  {
    mode: 'production',
    plugins,
  },
  js(),
  css('production', `${baseWebpackConfig.externals.paths.src}/styles/resources`),
  images(),
]);

module.exports = buildWebpackConfig;
