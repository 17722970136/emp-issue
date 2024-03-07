const { defineConfig } = require('@efox/emp')
const vue = require('@efox/plugin-vue-3')
module.exports = defineConfig({
  appEntry: 'main.js',
  base: './',
  server: {
    port: 8083,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
  },
  plugins: [vue],
  empShare: {
    name: 'UnifyAppLib',
    filename: 'emp.js',
    exposes: {
      './App': './src/App.vue',
      './BusComp': './src/bus_comp',
    }
  }

})