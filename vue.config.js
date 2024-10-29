const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/emagrecimento/' // Substitua 'emagrecimento' pelo nome do seu repositório
    : '/'
});
