const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

require("dotenv").config();

module.exports = {
  context: __dirname,
  // Adicionar aqui em caso de code splitting
  // https://webpack.js.org/guides/code-splitting/
  entry: {
    main: ["./src/js/main.ts", "./src/scss/style.scss"],
  },
  output: {
    filename: "./js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: ["node_modules/**"],
  },
  // Detalhamento das mensagens
  stats: "minimal",
  // Modo de compilação.
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                sourceMap: "inline",
                plugins: ["autoprefixer"],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
