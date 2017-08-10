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