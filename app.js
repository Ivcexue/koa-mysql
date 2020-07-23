const Koa = require('koa')
const Router = require('koa-router')
const InifManager = require('./core/init')
const app = new Koa()
const router = new Router()
// 
InifManager.initCore(app)

const PORT = process.env.PORT || 3001
router.get('/test', (ctx) => {
  ctx.body = {
    name: 'Hello Joker!',
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Server is Runing on ${PORT}`)
})
