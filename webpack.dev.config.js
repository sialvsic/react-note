var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    jsx: './src/index.js',
    html: './src/index.html',
    vendor: ['jquery']       //Array
  },
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [path.resolve('./src')],
    publicPath: '/',
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192&name=/images/[name].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192&name=/fonts/[name].[ext]'
      },
      {
        test: /\.(html|ico)$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  devtool: 'eval-source-map'
};