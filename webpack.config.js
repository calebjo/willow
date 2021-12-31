// webpack.config.js
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/willow.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
        assets: path.resolve('./app/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.(jpg|jpeg|png|svg)(\?.*)?$/,
        use: {
          loader: 'file-loader', 
          options: {
            name: '[name][md5:hash].[ext]',
            outputPath: 'webpack-assets/',
            publicPath: '/assets/webpack-assets/'
          }
        }
      }
    ]
  },
  devtool: 'source-map'
  
};

