'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path")
const extract_plugin = require("mini-css-extract-plugin")
module.exports = {
  mode: 'production',
  entry: [
    './renderer.js'
  ],
  output : {
    path : path.resolve(__dirname, "dist"),
    filename : "app.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options : {
          publicPath : "images",
          outputPath: 'images/'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test : /\.css$/,
        use : [{
          loader: extract_plugin.loader,
        },
        "css-loader",
      ]
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader : "file-loader",
          options : {
            outputPath: 'fonts/'
          }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.min.js', // 'vue/dist/vue.common.js' for webpack 1
      'vue-router$': 'vue-router/dist/vue-router.min.js',
      'vuex$':"vuex/dist/vuex.min.js"
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new extract_plugin({
      filename: 'style.css'
    })
  ]
}