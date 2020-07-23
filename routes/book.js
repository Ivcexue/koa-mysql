const Router = require('koa-router')
const router = new Router()
router.prefix('/book')

router.get('/list', (ctx) => {
  ctx.body = {
    key: 'book api',
  }
})

module.exports = router