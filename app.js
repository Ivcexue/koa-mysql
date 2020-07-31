const Koa = require('koa')
const Router = require('koa-router')
const InifManager = require('./core/init')
const db = require('./config/db')
const catchError = require('./middleweres/catchError')
const app = new Koa()
const router = new Router()

const PORT = process.env.PORT || 3001
// db.initMogo()
// db.initMysql()

app.use(catchError)

// 初始化路由
InifManager.initCore(app)

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Server is Runing on ${PORT}`)
})
