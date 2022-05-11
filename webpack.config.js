const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve("./src/app/App.tsx"),
    footer: path.resolve("./src/footer/Footer.tsx"),
    header: path.resolve("./src/header/Header.tsx"),
    teams: path.resolve("./src/teams/Teams.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "sass-loader"],
        test: /\.scss?/i,
      },
      {
        type: "asset/resouce",
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
      title: "LoL In-House Team Randomizer",
      inject: "body",
    }),
  ],
}
