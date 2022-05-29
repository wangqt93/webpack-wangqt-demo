// webpack是基于nodeJS，配置文件的本质就是一个JS对象,这个对象有几个核心属性：entry、output、mode、loder、plugins

// webpack的零配置写法,webpack.config.js 是webpack的默认配置名

/*
    entry: 执行打包任务的入口位置，从设置的当前模块开始打包。entry的数据类型可以是string、Array、object。spa(单入口页面) mpa（多入口页面）
    output: 打包后输出资源文本的信息。(存储位置、文件名称)。利用占位符（[name].js）而不是将文件名写死
    mode: 打包模式：开发环境、生产环境
    占位符：[name].js  作用：让生成的文件名与entry的入口文件名相同，在有多个入口时，使用占位符可以与入口文件名一一对应
    
*/
const path =  require('path')

module.exports = {
    entry: './src/index.js',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,"./dist"),  // 存储文件的位置，要求是绝对路径
        filename: "[name].js",   
    },
    mode: "development"  // development or production
}
