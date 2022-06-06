// loader结构，就是一个有返回值的函数,该函数不可以是箭头函数(需要在函数内部使用this)
// 如何获取options ，通过this.query()
// 返回结果： 方式一：return；方式二： this.callback(error,result)
// 异步和同步： this.async() 会返回一个this.callback   
// 多个loader如何配合使用： 多个loader自右向左执行，作用于同一个模块时，前面的loader会阻塞后面loader的执行。前面loader执行的结果（source）会交给后面的laoder
// 解决自定义loader访问路径丑的问题。（期望与第三方loader一样书写自定义laoder）:
// resolveLoaders: {
//     modules: ['node_modelus',"./myLoader"]
// },
/**
 * 
 * @param {*} source 根据webpack.config.js的配置，接收到的相应模块资源
 * @returns 
 */

module.exports = function(source) {
    console.log(this.query.name)
    return source.replace('123',this.query.name)
}