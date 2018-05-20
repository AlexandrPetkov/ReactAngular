const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/')
    }
}