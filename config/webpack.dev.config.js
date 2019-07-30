const merge = require('webpack-merge');
const css = require('./webpack/rules/css');
const js = require('./webpack/rules/js');
const images = require('./webpack/rules/images');
const devserver = require('./webpack/devserver');
const SVGSpritePlugin = require('./webpack/plugins/svgspritemap-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  SVGSpritePlugin(process.env.NODE_ENV, `${baseWebpackConfig.externals.paths.src}/images/sprite`),
];

const devWebpackConfig = merge([
  baseWebpackConfig,
  {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    watchOptions: {
      ignored: /node_modules/,
    },
    plugins,
  },
  css('development'),
  js(),
  images(),
  devserver(`${baseWebpackConfig.externals.paths.src}/html`),
]);

module.exports = devWebpackConfig;

//TODO Во время компиляции игнорируется ошибка в js.
