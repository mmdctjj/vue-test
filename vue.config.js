const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('remove-others-console-loader')
      .test(/\.vue|js$/)
      .use('remove-others-console-loader')
      .loader('remove-others-console-loader')
  }
})
