const Controller = require('egg').Controller

class SomeController extends Controller {
    async list() {
        const ctx = this.ctx
        await ctx.render('some/list', { list: await ctx.service.some.list() })
    }
}

module.exports = SomeController

