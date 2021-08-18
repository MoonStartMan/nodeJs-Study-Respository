const express = require('express')

// const userRouter = require('./router/user_router')

const app = express()

// function log_middleware(req, res, next) {
//     console.log('请求来了...');
//     next();
// }

// app.use(log_middleware);

// app.use('/user',userRouter)

//  加载一个 static 的中间件

// app.use(express.static('static', {
//     extensions: ['html', 'htm']
// }))

//  中间件完整的结构
//  1. 是一个函数
//  2. err, req, res, next-->function

// function demo_middleware(err, req, res, next) {
    //  1. 异常处理
    //  2. 处理下业务功能, 然后转交控制权--next
    //  3. 响应请求--结束响应-->当作路由的处理函数
// }

//  /test?name = 
// function valid_name_middleware(req, res, next) {
//     let {name} = req.query;
//     if (!name || !name.length) {
//         res.json({
//             message: '缺少name参数'
//         })
//     } else {
//         next();
//     }
// }
//  1.
// app.all('*', valid_name_middleware)

// app.get('/test', (req, res) => {
//     res.json({
//         message: 'test'
//     })
// })

app.get('/demo', (req, res) => {

    throw new Error('测试异常功能')
    res.json({
        message
    })
})

function error_handler_middleware(err, req, res, next) {
    if (err) {
        let { message } = err;
        res.status(500)
        .json({
            message: `${message || '服务器异常'}`
        })
    } else {

    }
}

function demo_middleware(req, res, next) {
    try {
        //  mysql 操作
    } catch (error) {
        next()
    }
    //
}

//  tips: 异常处理一定是 收口的。

//  
function not_found_handler(req, res, next){
    res.json({
        message: 'api不存在'
    })
}

app.use(not_found_handler);
app.use(error_handler_middleware)

app.listen(3000, () => {
    console.log("启动成功")
})