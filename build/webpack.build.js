var path = require('path');
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  mode: "development",
  entry: {
    desktop: path.resolve(process.cwd(), "./src/index.js"),
  },
  output: {
    path: path.resolve(process.cwd(), "./dist/"),
    filename: 'index2.js',
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ]
}

webpack(config,function(err){
  console.log(err);
})
