'use strict';

const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin');

var plugins = [
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({template:'./js/index.html'}),
  new ExtractTextPlugin('[name].css'),
  new CleanWebpackPlugin('./dist/*')
];

module.exports = {
  context: __dirname + '\\src',

  entry: {
    vendor: '.\\js\\vendor\\index.js',
    application: '.\\js\\app\\index.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'cheap-inline-module-source-map',

  module: {
    loaders: [
      {test: /\.js$/,loader: 'babel?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs',exclude: [/angular[-,a-z]*\.js$/,/node_modules/,/firebase\.js/]},
      {test: /\.html$/,loader: 'ng-cache?prefix=[dir]/[dir]',exclude: /index\.html/},
      {test: /\.css$/,loader:ExtractTextPlugin.extract('style-loader','css-loader?sourceMap')},
      {test: /\.(eot|woff2?|ttf|svg|png)(\?.*)?$/,loader:'file-loader?name=[path][name].[ext]?[hash]'}
    ]
  },

  plugins: plugins

};