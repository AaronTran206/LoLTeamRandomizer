const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve("./src/app/App.tsx"),
    nav: path.resolve("./src/nav/Nav.tsx"),
    header: path.resolve("./src/header/Header.tsx"),
    teams: path.resolve("./src/teams/Teams.tsx"),
    footer: path.resolve('./src/footer/Footer')
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        test: /\.(scss|css)$/,
      },

      {
        type: "asset/resource",
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
      },
    ],
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlPlugin({
      template: "./index.html",
    }),
    require("autoprefixer"),
  ],
}
