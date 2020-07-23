/*
 * @Author: Ives-xue
 * @Date: 2020-07-23 14:13:58
 * @LastEditTime: 2020-07-23 14:30:53
 * @LastEditors: Please set LastEditors
 */

const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InifManager {
  static initCore(app) {
    InifManager.app = app
    InifManager.initLoadRouters()
  }
  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/routes`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule,
    })
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InifManager.app.use(obj.routes())
      }
    }
  }
}
module.exports = InifManager
