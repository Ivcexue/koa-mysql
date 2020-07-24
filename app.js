const Koa = require('koa')
const Router = require('koa-router')
const InifManager = require('./core/init')
const db = require('./config/db')
const app = new Koa()
const router = new Router()

db.initMogo()
InifManager.initCore(app)

const PORT = process.env.PORT || 3001

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Server is Runing on ${PORT}`)
})
