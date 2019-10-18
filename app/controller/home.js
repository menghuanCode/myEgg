const Controller = require('egg').Controller



class HomeController extends Controller {
    async index(ctx) {
        ctx.app.locals = { appName: 'showcase' }
        const data = { name: 'egg' }

        ctx.body = await ctx.renderString('{{ name }} - {{ appName }}', data)
        ctx.body = await ctx.renderString('{{ name }} - {{ helper.lowercaseFirst("aaaa") }}', data)
    }
}

module.exports = HomeController

