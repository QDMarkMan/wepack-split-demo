const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode:"development",
    cache: false,
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      publicPath: "http://localhost:3000/"
    },
    devtool: "source-map",
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
      port: 3000,
      open: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app",
        remotes: {
          'app_one': "app_one@http://localhost:3001/remoteEntry.js",
        },
        filename: "remoteEntry.js",
        exposes: {
          "./Container": "./src/components/Container"
        },
        shared: { react: { singleton: true }, "react-dom": { singleton: true } }
      })
      // new HtmlWebpackPlugin({
      //   template: "./public/index.html"
      //   // chunks: ["app"]
      // })
    ]
}