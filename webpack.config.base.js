const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const webpack = require("webpack");
const dotenv = require("dotenv");
const options = { publicPath: ""};
const libraryName = "cognied-front";

module.exports = (state) => {
  let envPath = "./.env.dev";
  let min = "";
  if (state === "production") {
    envPath = "./.env.prod";
    min = ".min";
  }

  const env = dotenv.config({ path: envPath }).parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.js",
    output: {
      filename: `${libraryName}.[name].[fullhash]${min}.js`,
      chunkFilename: `${libraryName}.[name].[fullhash]${min}.js`,
      path: path.join(__dirname, "build"),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/assets/img/logo_peque.svg",
      }),
      // new CopyWebpackPlugin({
      //   patterns: [{ from: path.resolve(__dirname, "locales"), to: "locales" }],
      // }),
      new WebpackManifestPlugin(options),
      new webpack.DefinePlugin(envKeys),
    ],
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jp(e*)g|gif)$/,
          type: "asset/resource",
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          type: "asset/resource",
        },
        
      ],
    },
  };
};
