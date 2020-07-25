const Router = require('koa-router')
const router = new Router()
router.prefix('/book')

router.get('/list', (ctx) => {
  ctx.body = {
    key: 'book api',
  }
  // if(!a) {
  //   throw new Error()
  // }
})

module.exports = router