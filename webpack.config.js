const isProduction = process.env.NODE_ENV === 'production';
const path = require("path");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    /** "path"
     * the folder path of the output file 
     */
    path: path.resolve(__dirname, "public"),
    /** "filename"
     * the name of the output file 
     */
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["@vanilla-extract/babel-plugin"]
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ]
  },
  devtool: isProduction ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: '/public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new VanillaExtractPlugin(),
  ],
};


