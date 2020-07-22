const path = require('path')

module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, './src/entry.js'),
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath:'dist/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
    // devServer:{
    //   contentBase: path.join(__dirname),
    //   compress: true,
    //   inline: true,
    //   host: '127.0.0.1',
    //   port: 8001,
    //   open: false
    // }
}