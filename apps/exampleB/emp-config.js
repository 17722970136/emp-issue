const { defineConfig } = require('@efox/emp')
const vue = require('@efox/plugin-vue-3')
module.exports = defineConfig({
    appEntry: 'main.js',
    base: './',
    plugins: [vue],
    server: {
        client: {
            overlay: {
              errors: true,
              warnings: false
            }
          },
    },
    empShare: {
        name: 'Portal',
        filename: 'emp.js',
        remotes: {
            'UnifyAppLib': 'UnifyAppLib@http://localhost:8083/emp.js',
        },
    }
})