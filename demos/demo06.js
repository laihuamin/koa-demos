const Koa = require('koa');
const app = new Koa();
const route = require('koa-route')

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
}

const main = ctx => {
    ctx.response.body = 'Hello World'
}
// koa-route的使用格式，
app.use(route.get('/about', about)); //当请求的路径时／about时，会跳转到会返回about
app.use(route.get('/', main)); // 同上

app.use(main);
app.listen(3000);