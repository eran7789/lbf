const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const merge = require('webpack-merge');
const dotenv = require('dotenv-webpack');

const baseConfig = require('./base.webpack.config');

const buildPath = path.join(__dirname, 'src/server/static/app');

const src = path.join(__dirname, 'src/client');

const appDependencies = [
  'lodash',
  'prop-types',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-actions',
  'redux-logger'
];

const config = {
  target: 'web',
  entry: {
    bundle: 'index.js',
    vendor: appDependencies
  },
  output: {
    path: buildPath,
    filename: 'js/[name].[hash].js'
  },

  plugins: [
    new CleanWebpackPlugin([buildPath]),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  devServer: {
    contentBase: buildPath,
    publicPath: '/',
    noInfo: true,
    inline: true
  },

  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = merge.smart(config, baseConfig);
