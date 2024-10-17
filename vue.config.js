const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../ssafyhome/src/main/resources/static',
  devServer:{
    port: 8082,
    proxy:{ 
      '/': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        ws: false,
      },
    }
  },
})
