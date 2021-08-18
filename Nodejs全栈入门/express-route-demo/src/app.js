const express = require('express');
const app = express()
const memberRouter = require('./member.router');
const skuRouter = require('./sku.router')

const models = require('../models');//模型对象

app.get('/create',async(req, res) => {
    let {name} = req.query;
    //  promise user-sequlize 对象
    let user = await models.User.create({
        name
    })
    console.log(user)
    res.json({
        messaage: '创建成功'
    })
})

app.get('/list', async (req, res) => {
    let list = await models.User.findAll();
    res.json({
        list
    })
})

app.get('/detail/:id',async (req,res) => {
    let {id} = req.params;
    let user = await models.User.findOne({
        where: {
            id
        }
    })
    res.json({
        user
    })
})

//  注册路由
app.use('/member' ,memberRouter)
app.use('/sku' ,skuRouter)

app.listen(3000, () => {
    console.log('服务启动成功')
})