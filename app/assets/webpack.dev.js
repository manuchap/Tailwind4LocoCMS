const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval'
//  plugins: [
//    new LiveReloadPlugin()
//  ]
});
