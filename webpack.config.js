const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    filename: "main.js",
  },
  target: "web",
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "/dist/main.js"),
    port: 3340
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "template.html"),
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
}