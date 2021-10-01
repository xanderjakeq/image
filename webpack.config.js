const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
          "eslint-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-nested-ancestors"),
                require("postcss-nested")
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-inline-loader?removeSVGTagAttrs=false"
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    library: '__MODULE_DEFAULT_EXPORT__',
    libraryTarget: 'window',
    libraryExport: 'default'
  },

};
