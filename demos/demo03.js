const Koa = require('koa');
const app = new Koa();
// ctx.request.accepts可以检查http请求的accept的内容
// Accept属于请求头，代表客户端希望接受的数据类型
// 与accpet相似的还有Content-Type，它代表实体头，就是发送端发送的数据类型
const main = ctx => {
    if(ctx.request.accepts('xml')){  
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello World</data>'
    }else if(ctx.request.accepts('html')){
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello World</p>'
    }else if(ctx.request.accepts('json')){
        ctx.response.type = 'json'
        ctx.response.body = '{data: Hello World}'
    }else {
        ctx.response.type = 'text'
        ctx.response.body = 'Hello World'
    }
}

app.use(main);
app.listen(3000); //app监听3000端口