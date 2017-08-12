const Koa = require('koa');
const app = new Koa();

const handle = async (ctx, next) => {
    try{
        await next();
    }catch(err){
        ctx.response.status = err.statusCode | err.status | 500;
        ctx.response.type = 'html';
        ctx.response.body = '<p>something error, you should concat adminster</p>'
        ctx.app.emit('error', err, ctx);
    }
}

const main = ctx => {
    ctx.throw(500);
}

app.on('err', function(err){
    console.log(err);
    console.log('logger error', err.message);
});

app.use(handle);
app.use(main);

app.listen(3000);