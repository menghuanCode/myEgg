const Controller = require('egg').Controller



class HomeController extends Controller {
    async index(ctx) {

        await ctx.render('home/index.js', { name: 'vue js bundle render' })
    }
}

module.exports = HomeController

