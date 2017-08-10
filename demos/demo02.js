const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = 'Hello World'
}

app.use(main);
console.log(app);
app.listen(3000);