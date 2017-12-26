var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, "node_modules"),
        query: {
          presets: ['es2015', ['stage-2'], 'react', 'react-hmre']
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } }
        ]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(jpg|png|gif|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  devtool: 'source-map', 
  resolve: {
    unsafeCache: true,
    alias: {
      vox: path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')}),
    new webpack.HotModuleReplacementPlugin()
  ],
  stats: {
    source: true 
  },
  target: 'web',
  externals: {
    "Tone": "tone"
  }
};

module.exports = config;
