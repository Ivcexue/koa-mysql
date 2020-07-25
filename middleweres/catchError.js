const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = '服务器错误,请稍后重试!'
  }
}

module.exports = catchError
