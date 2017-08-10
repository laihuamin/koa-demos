## koa的安装
before
```
node -v
^8.0.0
```
install koa depandenies
```
npm i koa --save-dev
```
## demo01
```
const koa = require('koa'); //引入依赖  
const app = new Koa(); //定义一个新的koa的实例

app.listen(3000);
```
run demo
```
node demos/demo01.js
```
## demo02
```
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = 'Hello World'  //定义内容主体
}

app.use(main);
app.listen(3000);
```
## demo03
```
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
```