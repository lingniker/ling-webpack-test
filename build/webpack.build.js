var path = require('path');
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
  mode: "development",
  entry: {
    desktop: path.resolve(process.cwd(), "./src/index.js"),
  },
  output: {
    path: path.resolve(process.cwd(), "./dist/"),
    filename: 'index.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env"]
          ],
          plugins:['@babel/plugin-transform-runtime']   
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
  ]
}

webpack(config,function(err){
  console.log(err);
})
