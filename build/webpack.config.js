const config = {
  entry: './front/index.tsx',
  output: {
    filename: 'app.bundle.js',
    path: './public',
    publicPath: '/assets'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },{
        test: /\.json/,
        loader: 'json'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|woff|ttf)$/,
        loader: 'file-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  devtool: 'eval'
}
module.exports = config