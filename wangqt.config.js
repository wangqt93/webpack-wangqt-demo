/*
webpack打包时，默认的配置文件为webapck.config.js，如何指定打包时的配置文件？
思路是： 使用cli进行打包，package.json 文件相关设置：
    {
        "scripts": {
        "wangqt": "webpack --config ./wangqt.config.js"  
        },
        "devDependencies": {
        "webpack": "^4.43.0",
        "webpack-cli": "^3.3.12"
        }
    }
*/ 
 

const path = require('path')
const { mainModule } = require('process')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "main.js"
    },
    mode: 'production'
}