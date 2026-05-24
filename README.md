<p align="center">
  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="120">
</p>

<h1 align="center">Node.js 学习资源仓库</h1>

<p align="center">
  <strong>从零开始学习 Node.js 全栈开发 -- 实战项目驱动，循序渐进掌握核心技能</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v14%2B-green" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-v4.17-blue" alt="Express">
  <img src="https://img.shields.io/badge/Sequelize-v6.6-orange" alt="Sequelize">
  <img src="https://img.shields.io/badge/MySQL2-v2.3-blue" alt="MySQL2">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License">
</p>

---

## 目录

- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [环境要求](#环境要求)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [模块详细说明](#模块详细说明)
- [API 接口文档](#api-接口文档)
- [常见问题](#常见问题)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## 项目简介

本仓库是一个系统化的 **Node.js 全栈开发学习资源库**，通过多个渐进式的实战项目，帮助开发者从 Node.js 原生模块到 Express 框架、从路由管理到数据库 ORM 操作，逐步构建完整的知识体系。

仓库包含以下核心学习模块：

| 模块 | 说明 | 难度 |
|------|------|------|
| `nodeJs-LoginAndRegister` | 使用原生 Node.js `http` 模块实现用户登录注册系统 | 入门 |
| `express-demo` | Express 框架基础入门示例 | 基础 |
| `express-middleware-demo` | Express 中间件机制详解与实践 | 进阶 |
| `express-route-demo` | Express 路由模块化 + Sequelize ORM | 进阶 |
| `todo_api` | 完整的 RESTful Todo API（含数据库操作） | 实战 |

---

## 功能特性

- **原生 Node.js 实战** -- 使用 `http`、`url`、`querystring`、`fs` 等核心模块构建完整的 Web 服务
- **Express 框架全流程** -- 从基础搭建到中间件、路由模块化
- **用户认证系统** -- 实现登录、注册功能，理解 HTTP GET/POST 请求处理
- **RESTful API 设计** -- 完整的 CRUD 操作，规范的接口设计
- **数据库集成** -- 使用 Sequelize ORM + MySQL2，支持数据模型定义、迁移和 CRUD
- **前端页面交互** -- jQuery + HTML/CSS 构建用户界面
- **错误处理机制** -- 全局错误处理中间件
- **CORS 跨域支持** -- 配置跨域资源共享

---

## 技术栈

### 后端

| 技术 | 版本 | 说明 |
|------|------|------|
| Node.js | 14+ | JavaScript 运行时环境 |
| Express | 4.17.x | 快速、简洁的 Web 框架 |
| Sequelize | 6.6.x | 基于 Promise 的 Node.js ORM |
| MySQL2 | 2.3.x | MySQL 数据库驱动 |
| Sequelize CLI | 6.2.x | 数据库迁移与管理工具 |
| body-parser | 1.19.x | 请求体解析中间件 |

### 前端

| 技术 | 说明 |
|------|------|
| HTML5 | 页面结构 |
| CSS3 | 页面样式 |
| jQuery | DOM 操作与 AJAX 请求 |

### 开发工具

| 工具 | 说明 |
|------|------|
| nodemon | 文件变更自动重启服务 |
| npm | 包管理器 |

---

## 环境要求

在开始之前，请确保你的开发环境满足以下要求：

- **Node.js** >= 14.0.0（推荐 LTS 版本）
- **npm** >= 6.0.0（随 Node.js 一起安装）
- **MySQL** >= 5.7（仅 `express-route-demo` 和 `todo_api` 模块需要）
- **Git** -- 用于克隆仓库

检查版本：

```bash
node -v    # 应输出 v14.0.0 或更高
npm -v     # 应输出 6.0.0 或更高
mysql -V   # 如需使用数据库相关模块
```

---

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/MoonStartMan/nodeJs-Study-Respository.git
cd nodeJs-Study-Respository
```

### 2. 运行 nodeJs-LoginAndRegister（原生 Node.js）

此模块无需安装依赖，直接运行即可：

```bash
cd nodeJs-LoginAndRegister
node app.js
```

服务启动后，在浏览器中访问：

```
http://localhost:8080/index.html
```

> **提示**：默认账户为 `admin`，密码为 `123456`。注册新用户后，用户数据存储在内存中，重启服务后重置。

### 3. 运行 Express 项目

以 `express-demo` 为例：

```bash
# 进入项目目录
cd Nodejs全栈入门/express-demo

# 安装依赖
npm install

# 启动开发服务器（使用 nodemon 热重载）
npm start
```

### 4. 运行数据库相关项目（express-route-demo / todo_api）

这些项目需要 MySQL 数据库支持，请按以下步骤操作：

```bash
# 1. 进入项目目录
cd Nodejs全栈入门/todo_api

# 2. 安装依赖
npm install

# 3. 创建数据库（在 MySQL 中执行）
# CREATE DATABASE todo_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 4. 修改数据库配置
# 编辑 config/config.json，设置正确的数据库连接信息

# 5. 初始化 Sequelize
npx sequelize init

# 6. 创建模型和迁移文件（todo_api 示例）
npx sequelize model:generate --name Todo --attributes name:string,deadline:date,content:string

# 7. 执行数据库迁移
npx sequelize db:migrate

# 8. 启动服务
npm start
```

---

## 项目结构

```
nodeJs-Study-Respository/
├── .gitignore                              # Git 忽略配置
├── README.md                               # 项目说明文档
│
├── nodeJs-LoginAndRegister/                # 模块一：原生 Node.js 登录注册
│   ├── app.js                              # 主服务文件（http 模块）
│   └── page/                               # 前端页面
│       ├── index.html                      # 登录/注册页面
│       ├── index.css                       # 页面样式
│       └── jquery.min.js                   # jQuery 库
│
└── Nodejs全栈入门/                          # 模块二~五：Express 全栈入门
    ├── express-demo/                       # Express 基础示例
    │   ├── package.json                    # 项目配置
    │   ├── package-lock.json               # 依赖锁定文件
    │   └── src/
    │       └── app.js                      # Express 入口文件
    │
    ├── express-middleware-demo/            # Express 中间件示例
    │   ├── middleware.md                   # 中间件学习笔记
    │   ├── package.json                    # 项目配置
    │   ├── package-lock.json               # 依赖锁定文件
    │   ├── static/                         # 静态资源目录
    │   └── src/
    │       ├── app.js                      # 应用入口（含中间件配置）
    │       └── router/                     # 路由模块
    │
    ├── express-route-demo/                 # Express 路由 + ORM 示例
    │   ├── README.md                       # 模块说明
    │   ├── package.json                    # 项目配置
    │   ├── package-lock.json               # 依赖锁定文件
    │   ├── config/
    │   │   └── config.json                 # 数据库配置文件
    │   ├── migrations/                     # Sequelize 数据库迁移文件
    │   ├── models/                         # Sequelize 数据模型
    │   │   ├── index.js                    # 模型入口
    │   │   └── user.js                     # 用户模型
    │   └── src/
    │       ├── app.js                      # 应用入口
    │       ├── member.router.js            # 会员路由
    │       └── sku.router.js               # SKU 商品路由
    │
    └── todo_api/                           # Todo RESTful API 实战
        ├── README.md                       # 模块说明
        ├── package.json                    # 项目配置
        ├── package-lock.json               # 依赖锁定文件
        ├── config/
        │   └── config.json                 # 数据库配置文件
        ├── migrations/                     # Sequelize 数据库迁移文件
        ├── models/                         # Sequelize 数据模型
        │   ├── index.js                    # 模型入口
        │   └── todo.js                     # Todo 模型
        └── src/
            └── app.js                      # API 入口文件
```

---

## 模块详细说明

### 模块一：nodeJs-LoginAndRegister

使用 Node.js 原生 `http` 模块构建的登录注册系统，帮助理解 Web 服务的基本原理。

**核心知识点：**
- `http.createServer()` 创建 HTTP 服务器
- `url.parse()` 解析 URL 和查询参数
- `querystring.parse()` 解析 POST 请求体
- `fs.readFile()` 读取静态文件
- GET 与 POST 请求的区别与处理

**运行端口：** `8080`

### 模块二：express-demo

Express 框架的入门示例，展示如何快速搭建一个 Web 服务。

**核心知识点：**
- Express 应用初始化
- 路由定义（`app.get()`、`app.post()`）
- 响应方法（`res.send()`、`res.json()`）
- nodemon 热重载开发

### 模块三：express-middleware-demo

深入讲解 Express 中间件机制，包含学习笔记文档。

**核心知识点：**
- 中间件的概念与执行顺序
- 应用级中间件
- 路由级中间件
- 内置中间件（`express.json()`、`express.urlencoded()`）
- 静态文件服务（`express.static()`）
- 路由模块化拆分

### 模块四：express-route-demo

展示 Express 路由模块化与 Sequelize ORM 的结合使用。

**核心知识点：**
- `express.Router()` 路由模块化
- Sequelize 模型定义（`sequelize.define()`）
- 数据库迁移（`sequelize-cli`）
- MySQL 数据库连接与配置
- 数据模型：用户（User）

**路由模块：**
- `member.router.js` -- 会员相关路由
- `sku.router.js` -- SKU 商品相关路由

### 模块五：todo_api

一个完整的 RESTful Todo API 项目，涵盖从数据库设计到 API 实现的全流程。

**核心知识点：**
- RESTful API 设计规范
- Sequelize CRUD 操作（`create`、`findOne`、`update`、`findAndCountAll`）
- 分页查询实现
- 全局错误处理中间件
- CORS 跨域配置
- body-parser 请求体解析

**运行端口：** `3000`

---

## API 接口文档

### todo_api 接口列表

服务基础地址：`http://127.0.0.1:3000`

#### 1. 创建 Todo

- **URL：** `POST /create`
- **Content-Type：** `application/x-www-form-urlencoded` 或 `application/json`

**请求参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | 是 | 任务名称 |
| deadline | date | 是 | 截止日期 |
| content | string | 是 | 任务内容 |

**响应示例：**

```json
{
  "todo": {
    "id": 1,
    "name": "学习 Node.js",
    "deadline": "2025-12-31",
    "content": "完成 Express 框架学习",
    "status": null,
    "updatedAt": "2025-01-01T00:00:00.000Z",
    "createdAt": "2025-01-01T00:00:00.000Z"
  },
  "message": "任务创建成功"
}
```

#### 2. 更新 Todo

- **URL：** `POST /update`
- **Content-Type：** `application/x-www-form-urlencoded` 或 `application/json`

**请求参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 任务 ID |
| name | string | 否 | 任务名称 |
| deadline | date | 否 | 截止日期 |
| content | string | 否 | 任务内容 |

**响应示例：**

```json
{
  "todo": {
    "id": 1,
    "name": "学习 Node.js 进阶",
    "deadline": "2025-12-31",
    "content": "完成 Sequelize ORM 学习",
    "status": null,
    "updatedAt": "2025-01-02T00:00:00.000Z",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

#### 3. 更新 Todo 状态

- **URL：** `POST /update_status`
- **Content-Type：** `application/x-www-form-urlencoded` 或 `application/json`

**请求参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 任务 ID |
| status | int | 是 | 状态值（1: 待办, 2: 完成, 3: 删除） |

**响应示例：**

```json
{
  "todo": {
    "id": 1,
    "name": "学习 Node.js",
    "status": 2,
    "updatedAt": "2025-01-02T00:00:00.000Z",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

#### 4. 查询 Todo 列表（分页）

- **URL：** `GET /list/:status/:page`

**路径参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| status | int | 是 | 状态筛选（-1: 全部, 1: 待办, 2: 完成, 3: 删除） |
| page | int | 是 | 页码（从 1 开始） |

**响应示例：**

```json
{
  "list": {
    "count": 25,
    "rows": [
      {
        "id": 1,
        "name": "学习 Node.js",
        "deadline": "2025-12-31",
        "content": "完成 Express 框架学习",
        "status": 1,
        "createdAt": "2025-01-01T00:00:00.000Z",
        "updatedAt": "2025-01-01T00:00:00.000Z"
      }
    ]
  },
  "message": "列表查询成功"
}
```

> **说明：** 每页默认返回 10 条记录，通过 `offset = (page - 1) * limit` 计算偏移量。

### nodeJs-LoginAndRegister 接口列表

服务基础地址：`http://localhost:8080`

#### 1. 用户登录

- **URL：** `GET /login`
- **方式：** Query 参数

**请求参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |

**响应示例：**

```json
// 成功
{ "err": 0, "msg": "登陆成功" }

// 用户名不存在
{ "err": 1, "msg": "用户名不存在" }

// 密码错误
{ "err": 1, "msg": "密码不正确" }
```

#### 2. 用户注册

- **URL：** `POST /reg`
- **Content-Type：** `application/x-www-form-urlencoded`

**请求参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |

**响应示例：**

```json
// 成功
{ "err": 0, "msg": "注册成功" }

// 用户已存在
{ "err": 1, "msg": "用户已经存在" }
```

---

## 常见问题

### Q1：运行 `nodeJs-LoginAndRegister` 时页面显示 404？

确保你通过 `http://localhost:8080/index.html` 访问页面，而不是直接访问 `http://localhost:8080/`。服务器会从 `page` 目录下读取静态文件。

### Q2：数据库相关项目启动报连接错误？

请检查以下配置：
1. 确保 MySQL 服务已启动
2. 检查 `config/config.json` 中的数据库连接信息（用户名、密码、数据库名）
3. 确保已创建对应的数据库
4. 确保已执行 `npx sequelize db:migrate` 完成数据表迁移

### Q3：`npm install` 安装依赖失败？

可以尝试以下方案：
```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 lock 文件后重新安装
rm -rf node_modules package-lock.json
npm install

# 如果网络问题，可使用淘宝镜像
npm install --registry=https://registry.npmmirror.com
```

### Q4：`npx sequelize` 命令找不到？

确保在对应项目目录下执行，并且已安装项目依赖：
```bash
cd Nodejs全栈入门/todo_api
npm install
npx sequelize --help
```

### Q5：端口被占用怎么办？

- `nodeJs-LoginAndRegister` 默认端口 `8080`
- `todo_api` 默认端口 `3000`

如果端口被占用，可以修改源码中的端口号，或者使用以下命令查找并关闭占用进程：
```bash
# 查找占用端口的进程
lsof -i :8080
# 或
netstat -tunlp | grep 8080

# 结束进程
kill -9 <PID>
```

### Q6：nodemon 未检测到文件变更？

确保你使用 `npm start` 或 `npm run dev` 启动项目（而非直接 `node src/app.js`），这样 nodemon 才能正常工作。

---

## 贡献指南

欢迎对本仓库进行贡献！无论是修复 Bug、添加新功能还是改进文档，都非常感谢你的参与。

### 贡献步骤

1. **Fork** 本仓库到你的 GitHub 账号
2. **Clone** 你 Fork 的仓库到本地
   ```bash
   git clone https://github.com/<your-username>/nodeJs-Study-Respository.git
   ```
3. 创建新的**功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. 进行修改并**提交**
   ```bash
   git add .
   git commit -m "feat: 描述你的修改内容"
   ```
5. **推送**到你的远程仓库
   ```bash
   git push origin feature/your-feature-name
   ```
6. 在 GitHub 上创建 **Pull Request**

### 提交规范

建议使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

| 前缀 | 说明 |
|------|------|
| `feat:` | 新功能 |
| `fix:` | 修复 Bug |
| `docs:` | 文档更新 |
| `style:` | 代码格式调整 |
| `refactor:` | 代码重构 |
| `test:` | 测试相关 |
| `chore:` | 构建/工具链相关 |

---

## 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源。

```
MIT License

Copyright (c) 2025 MoonStartMan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  Made with heart by <a href="https://github.com/MoonStartMan">MoonStartMan</a>
</p>
