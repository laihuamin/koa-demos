const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    if(ctx.request.path !== '/'){ //当请求路径不等于‘／’时，他会打印一个a标签，来跳转
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index Page</a>'
    }else{
        ctx.response.body = 'Hello World'
    }
}
app.use(main);
app.listen(3000);