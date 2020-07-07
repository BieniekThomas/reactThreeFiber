var path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

require("@babel/register");

const isProd = process.env.NODE_ENV && process.env.NODE_ENV === "production";

console.log(isProd);

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          // { loader: "css-loader", options: { importLoaders: 1 } },
          // {
          //   loader: "postcss-loader",
          //   options: { parser: "sugarss", exec: true },
          // },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  mode: "development",
  devServer: {
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 50000,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
    new webpack.ProvidePlugin({
      THREE: "three",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
