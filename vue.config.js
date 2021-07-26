module.exports = {
  configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    host: '0.0.0.0',
    public:'114.215.139.188:8081',
    hot: true,
    disableHostCheck: true,
  },
};
