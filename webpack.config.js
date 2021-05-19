const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: { 
    index: path.resolve(__dirname, "input", "main.js") 
  },
  output: {
    path: path.resolve(__dirname, "output")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "input", "index.html")
    }),
    new VueLoaderPlugin()
  ]
};