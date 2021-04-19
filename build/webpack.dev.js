var path = require('path');
var webpack = require("webpack");

var WebpackDevServe = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  mode: "development",
  entry: {
    desktop: path.resolve(process.cwd(), "./src/index.js"),
  },
  output: {
    path: path.resolve(process.cwd(), "./dist/"),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ]
}
webpack(config,(err)=>{
  console.log("err---->", err);
})

var server = new WebpackDevServe(webpack(config));

server.listen("8004","localhost",function(err){
  if(err){
    console.log(err);
  } else {
    console.log("http://localhost:8004");
  }
})