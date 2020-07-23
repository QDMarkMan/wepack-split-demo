const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, './src/index.js'),
    cache: false,
    devtool: "source-map",
    output: {
      publicPath: "http://localhost:3001",
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /bootstrap\.js$/,
          loader: "bundle-loader",
          options: {
            lazy: false,
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    devServer:{
      contentBase: path.join(__dirname),
      compress: true,
      inline: true,
      host: '127.0.0.1',
      port: 3001,
      open: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app_one",
        library: { type: "var", name: "app_one" },
        filename: "remoteEntry.js",
        exposes: {
          "./Button": "./src/Button",
        },
        shared: { 'react': { singleton: true }, "react-dom": { singleton: true } },
      })
      // new HtmlWebpackPlugin({
      //   template: "./public/index.html"
      //   // chunks: ["app"]
      // })
    ]
}