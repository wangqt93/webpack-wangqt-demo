
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry: {
        test: './src/test.js'
    },
    output: {
        path: path.resolve(__dirname,'./test'),
        filename: '[name].js'
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/test.html',
            filename: 'test.html',
        })
    ],
    modules: {
        rules: []
    }
}