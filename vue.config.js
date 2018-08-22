var path = require("path");
var webpack = require("webpack");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "stylus",
      patterns: []
    }
  },
  rules: [
    {
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }
  ]
};
