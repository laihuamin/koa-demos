const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    if(ctx.request.accept('xml')){
        ctx.response.body = '<h1>Hello World</h1>'
    }else if(ctx.request.accept('html')){
        ctx.response.body = '<h1><'
    }
}