// const { DefinePlugin } = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './template.prod.html',
    //   favicon: "./src/assets/favicon.png",
    // }),
    new MiniCssExtractPlugin({
      filename: "main-bundle-[hash].css",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/favicon.png",
      outputPath: "img",
    }),
    new HtmlWebpackPlugin({
      template: "./template.prod.html",
      inject: true,
      favicon: "./public/favicon.png",
      manifest: "./public/manifest.json",
    }),
    // new WebpackPwaManifest({
    //   name: "Finder Api",
    //   short_name: "Finder",
    //   crossorigin: "use-credentials", //can be null, use-credentials or anonymous
    //   icons: [
    //     {
    //       src: path.resolve("public/favicon.png"),
    //       sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
    //     },
    //     {
    //       src: path.resolve("public/favicon.png"),
    //       size: "1024x1024", // you can also use the specifications pattern
    //     },
    //     {
    //       src: path.resolve("public/favicon.png"),
    //       size: "1024x1024",
    //       purpose: "maskable",
    //     },
    //   ],
    // }),
  ],
});
