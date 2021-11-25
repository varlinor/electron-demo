const path = require('path');

module.exports = {
  publicPath: '/rts-ver/',
  // outputDir: 'dist/pages',
  pages: {
    index: {
      // page 的入口
      entry: 'pages/src/main.js',
      // 模板来源
      template: 'pages/public/index.html',
      // 在 dist/index.html 的输出
      // filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Test Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common',  'index'],
    },
  },
  devServer: {},
  pluginOptions: {
    electronBuilder: {
      // for vue-cli-plugin electron builder options
      outputDir: 'dist',
      mainProcessFile: 'app/background.js', //  主进程入口
      // rendererProcessFile: 'pages/src/main.js', //  页面渲染入口
      // customFileProtocol:'',   //  改变vue 的 baseUrl 和publicPath
      builderOptions: {
        //  for electron builder options
        extraResources: ['server/**/**'],
      },
    },
  },
};
