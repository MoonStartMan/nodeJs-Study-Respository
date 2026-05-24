/**
 * @file app.js
 * @description Express框架基础示例，演示GET/POST路由定义、URL参数获取和JSON响应等核心功能
 * @author MoonStartMan
 * @date 2024
 * 
 * Express框架基础示例，演示GET/POST路由定义、URL参数获取和JSON响应等核心功能的详细实现
 */

const express = require('express');

//  是一个 express 实例
const app = express();

app.get('/name/:age', (req, res) => {
    let {age} = req.params
    res.json({
        name: 'tom',
        age
    })
})

app.get('/name', (req, res) => {
    let {age} = req.params;
    res.send('tom')
})

app.post('/name',(req, res) => {
    res.send('tom post')
})

app.listen(3000, () => {
    console.log('server 启动成功')
})