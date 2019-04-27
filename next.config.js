const path = require('path');
const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
    webpack: config => {
      config.plugins = config.plugins || []
      config.resolve.alias = {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, 'components'),
        '@layouts': path.resolve(__dirname, 'layouts'),
        '@pages': path.resolve(__dirname, 'pages'),
        '@src': path.resolve(__dirname, 'src'),
        // '@router': path.resolve(__dirname, 'router')
      }
      return config;
    }
});