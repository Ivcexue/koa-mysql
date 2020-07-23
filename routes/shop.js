const Router = require('koa-router')
const router = new Router()
router.prefix('/shop')

router.get('/list', (ctx) => {
  ctx.body = {
    key: 'shop api',
  }
})

module.exports = router
