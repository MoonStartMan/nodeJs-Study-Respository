# API

## 数据库的初始化

1. 创建一个数据库
2. 使用 `sequeliz cli` 初始化 项目的 数据库配置信息
    ` npx sequelize init `
3. 生成模型文件
    1. migrate 文件
    2. model 文件
    ` npx sequelize model:generate --name Todo --attributes name:string,deadline:date,content:string `
4. 持久化，模型对应的[数据库表]
    ' npx sequelize db:migrate '

## API里面具体使用ORM模型