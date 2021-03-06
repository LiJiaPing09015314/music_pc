module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8899
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/fds_music/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
