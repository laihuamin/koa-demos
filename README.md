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
## demo01: Start a Server
```
const koa = require('koa'); //引入依赖  
const app = new Koa(); //定义一个新的koa的实例

app.listen(3000);
```
run demo
```
node demos/demo01.js
```
## demo02: Hello World
```
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = 'Hello World'  //定义内容主体
}

app.use(main);
app.listen(3000);
```
## demo03: response type
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
## demo04: use a template
```
const fs = require('fs');  
//fs是一个文件系统模块，负责读写文件
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./demos/template.html');
}

app.use(main);
app.listen(3000);
```
<b>Introduce Fs</b>
```
//读取文件
fs.readFile('文件名', '编码形式', function (err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
    //当没有发生错误时err为null，打印data，当发生错误时，打印err，data为undefined
})
//同步读取文件 ———— readFileSync方法替换readFile方法
//写文件
fs.writeFile('文件名',data,function(err){
    if(err){
        console.log(err)
    }else{
        console.log('OK')
    }
})
```
## demo05: sample a router
```
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
```
run demo
Then visit http://127,0,0,1:3000/about click Index Page ,you can see Hello World
## demo06: koa-route
<b>Install koa-route</b>
```
npm install koa-route --save-dev
```
<b>Useag route</b>
```
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
```
## demo07: logger
```
const Koa = require('koa')
const app = new Koa();

const main = ctx => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body = 'Hello World';
}

app.use(main);
app.listen(3000);
```
run demo
visit http://127.0.0.1:3000
you can see logger in terminal
## demo08: middleware
middleware(中间件)，在软件领域一个很普遍的概念，中间件就相当于插件，是对功能本身的一个扩展。
举个例子：
一个鸡蛋放到流水线上，完了之后用next
将第二个鸡蛋放到流水线上。。诸如此类
```
const Koa = require('koa');
const app = new Koa();

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
}

const main = ctx => {
    ctx.response.body = 'Hello World';
}

app.use(logger);
app.use(main);

app.listen(3000);
```