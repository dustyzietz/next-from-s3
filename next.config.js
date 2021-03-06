module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      
config.module.rules.push(
    {
      test: /\.(css|scss|svg)$/,
      exclude: /node_modules/,
      loader: 'emit-file-loader',
      options: {
        name: '[path][name].[ext]/[hash].[ext]',
      },
    },
    {
      test: /\.(svg|png|gif|mp4|jpg|otf|eot|ttf)$/,
      use: [
        'babel-loader',
        {
          loader: 'file-loader',
          options: {
            outputPath: '../static/',
            name: '[path][name].[ext]/[hash].[ext]',
            publicPath: 'https://static-nalula.s3.amazonaws.com/dev/_next/static/',
          },
        },
      ],
    })
      return config
    },
  }