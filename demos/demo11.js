const Koa = require('koa');
const compose = require('koa-compose'); //引入依赖
const app = new Koa();

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.methods} ${ctx.request.url}`);
    next();
}

const main = ctx => {
    ctx.response.body = 'Hello World';
}
const middlewares = compose([logger, main]);
app.use(middlewares);

app.listen(3000);